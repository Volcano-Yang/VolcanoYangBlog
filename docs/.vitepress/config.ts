import { defineConfigWithTheme } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";

export default defineConfigWithTheme<ThemeConfig>({
  title: '编程之旅',
  description: "用代码改变生活",
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
