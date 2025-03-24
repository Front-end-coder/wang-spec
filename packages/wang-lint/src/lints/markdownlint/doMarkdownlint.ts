import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import markdownlint, { LintError } from 'markdownlint';
import markdownlintRuleHelpers from 'markdownlint-rule-helpers';
import { extname, join } from 'path';
import { Config, PKG, ScanOptions } from '../../types';
import { MARKDOWN_LINT_FILE_EXT, MARKDOWN_LINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatMarkdownlintResults } from './formatMarkdownlintResults';
import { getMarkdownlintConfig } from './getMarkdownlintConfig';

export interface DoMarkdownlintOptions extends ScanOptions {
    pkg: PKG
}

export async function doMarkdownlint(options: DoMarkdownlintOptions) {
    let files: string[] = []
    if (options.files) {
        files = options.files.filter(name => MARKDOWN_LINT_FILE_EXT.includes(extname(name)))
    } else {
        const pattern = join(options.include, `**/*.{${MARKDOWN_LINT_FILE_EXT.map(t => t.replace(/^\./, '')).join(',')}}`)
        files = await fg(pattern, {
           cwd: options.cwd,
           ignore: MARKDOWN_LINT_IGNORE_PATTERN,
        })
    }

    const results = await markdownlint.promises.markdownlint({
        ...getMarkdownlintConfig(options, options.pkg, options.config),
        files
    })

    if (options.fix) {
        await Promise.all(Object.keys(results).map(filename => formatMarkdownFile(filename, results[filename])))
    }
    return formatMarkdownlintResults(results, options.quiet)
}

async function formatMarkdownFile(filename: string, errors: LintError[]) {
    const fixes = errors.filter(error => error.fixInfo)
    if (fixes.length > 0) {
        const originText = await readFile(filename, 'utf8')
        const fixedText = markdownlintRuleHelpers.applyFixes(originText, fixes)
        if (originText !== fixedText) {
            await writeFile(filename, fixedText)
            return errors.filter(error => !error.fixInfo)
        }
    }
    return errors
}