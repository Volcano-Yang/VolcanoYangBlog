import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";

export default defineConfigWithTheme<ThemeConfig>({
  description: "杨火山的学习、工作、生活记录📝",
  head: [
    [
      "link",
      {
        rel: "alternate icon",
        href: "https://qnycdn.volcanoblog.cn/web/volcano-favicon.ico",
        type: "ico",
        sizes: "16x16",
      },
    ],
  ],
  themeConfig: {
    footer: {
      copyright: '<a href="https://beian.miit.gov.cn/">京ICP备18000331号-1</a>'
    }
  },
});
