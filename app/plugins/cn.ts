import { BuiltinPlugin } from "./typing";

export const CN_PLUGINS: BuiltinPlugin[] = [
  {
    name: "联网功能",
    toolName: "web-search",
    lang: "cn",
    description: "<使用时切换专用模型>搜索引擎的网络搜索工具。例子:搜索一下+内容",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "计算器",
    toolName: "calculator",
    lang: "cn",
    description: "<使用时切换专用模型>用于计算的工具。例子:计算+内容",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Arxiv",
    toolName: "arxiv",
    lang: "cn",
    description: "<使用时切换专用模型>使用Arxiv获取论文信息。例子：人工智能论文",
    builtin: true,
    createdAt: 1699265115000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "维基百科",
    toolName: "WikipediaQueryRun",
    lang: "cn",
    description: "<使用时切换专用模型>维基百科在线搜索助手。例子:在wiki查找+内容",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
    onlyNodeRuntime: false,
   },
];
