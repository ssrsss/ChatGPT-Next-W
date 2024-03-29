import { ArxivAPIWrapper } from "@/app/api/langchain-tools/arxiv";
import { DallEAPIWrapper } from "@/app/api/langchain-tools/dalle_image_generator";
import { StableDiffusionWrapper } from "@/app/api/langchain-tools/stable_diffusion_image_generator";
import { BaseLanguageModel } from "langchain/dist/base_language";
import { Calculator } from "langchain/tools/calculator";
import { WebBrowser } from "langchain/tools/webbrowser";
import { BaiduSearch } from "@/app/api/langchain-tools/baidu_search";
import { DuckDuckGo } from "@/app/api/langchain-tools/duckduckgo_search";
import { GoogleSearch } from "@/app/api/langchain-tools/google_search";
import { Tool, DynamicTool } from "langchain/tools";
import * as langchainTools from "langchain/tools";
import { Embeddings } from "langchain/dist/embeddings/base.js";
import { promises } from "dns";

export class EdgeTool {
  private apiKey: string | undefined;

  private baseUrl: string;

  private model: BaseLanguageModel;

  private embeddings: Embeddings;

  private callback?: (data: string) => Promise<void>;

  constructor(
    apiKey: string | undefined,
    baseUrl: string,
    model: BaseLanguageModel,
    embeddings: Embeddings,
    callback?: (data: string) => Promise<void>,
  ) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.model = model;
    this.embeddings = embeddings;
    this.callback = callback;
  }

  async getCustomTools(): Promise<any[]> {
    const webBrowserTool = new WebBrowser({
      model: this.model,
      embeddings: this.embeddings,
    });
    const calculatorTool = new Calculator();
    const dallEAPITool = new DallEAPIWrapper(
      this.apiKey,
      this.baseUrl,
      this.callback,
    );
    const stableDiffusionTool = new StableDiffusionWrapper();
    const arxivAPITool = new ArxivAPIWrapper();
    return [
      // searchTool,
      calculatorTool,
      webBrowserTool,
      dallEAPITool,
      stableDiffusionTool,
      arxivAPITool,
    ];
  }
}
