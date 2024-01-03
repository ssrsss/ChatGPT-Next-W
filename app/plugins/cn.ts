import { BuiltinPlugin } from "./typing";

export const CN_PLUGINS: BuiltinPlugin[] = [
    {
    name: "联网功能",
    toolName: "web-search",
    lang: "cn",
    description: "搜索引擎的网络搜索工具。例子:搜索一下+内容",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "计算器",
    toolName: "calculator",
    lang: "cn",
    description: "用于计算的工具。例子:计算+内容",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "科研计算搜索引擎",
    toolName: "wolfram_alpha",
    lang: "cn",
    description:
      "在需要回答有关数学、科学、技术、文化、社会和日常生活的问题时非常有用。",
    builtin: true,
    createdAt: 1703846656000,
    enable: false,
    onlyNodeRuntime: false,
  },
 {
    name: "维基百科",
    toolName: "WikipediaQueryRun",
    lang: "cn",
    description: "维基百科在线搜索助手。例子:在wiki查找+内容",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
    onlyNodeRuntime: false,
   },
  {
    name: "Arxiv",
    toolName: "arxiv",
    lang: "cn",
    description: "使用Arxiv获取论文信息。例子：人工智能论文",
    builtin: true,
    createdAt: 1699265115000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "网页浏览器",
    toolName: "web-browser",
    lang: "cn",
    description:
      "可以从网页中提取信息或总结其内容。例子:可搜索到的网址+要求",
    builtin: true,
    createdAt: 1693744292000,
    enable: false,
    onlyNodeRuntime: false,
  },
 {
    name: "DALL·E",
    toolName: "dalle_image_generator",
    lang: "cn",
    description:
      "DALL·E-3绘画(一张$0.04)。指令：画一个xxx",
    builtin: true,
    createdAt: 1694703673000,
    enable: false,
    onlyNodeRuntime: true,
  },
   {
    name: "Stable Diffusion",
    toolName: "stable_diffusion_image_generator",
    lang: "cn",
    description:
      "Stable Diffusion绘图",
    builtin: true,
    createdAt: 1688899480510,
    enable: false,
    onlyNodeRuntime: true,
  },
];
