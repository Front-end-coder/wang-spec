 
import { defineUserConfig } from 'vuepress'
import theme from './theme'

export default defineUserConfig({
  base: '/wang-sepc/',

  lang: 'en-US',
  title: 'wang-sepc',
  description: '团队自定义规范，一键扫描，一键修复，一键搭建',

 theme,

 
})