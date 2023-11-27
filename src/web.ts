import { WebPlugin } from "@capacitor/core";

import type {
  InAppBrowserPlugin,
  OpenWebViewOptions,
  OpenOptions,
} from "./definitions";

export class InAppBrowserWeb extends WebPlugin implements InAppBrowserPlugin {
  async open(options: OpenOptions): Promise<any> {
    console.log("open", options);
    return options;
  }

  async clearCookies(): Promise<any> {
    console.log("cleanCookies");
    return;
  }

  async getCookies(_options: { url: string }): Promise<{ cookies: Record<string, string> }> {
    // Web implementation to get cookies
    const cookies = {}; // Logic to retrieve cookies for the specified URL
    return Promise.resolve({ cookies });
  }

  async openWebView(options: OpenWebViewOptions): Promise<any> {
    console.log("openWebView", options);
    return options;
  }

  async close(): Promise<any> {
    console.log("close");
    return;
  }

  async setUrl(options: { url: string }): Promise<any> {
    console.log("setUrl", options.url);
    return;
  }

  async reload(): Promise<any> {
    console.log("reload");
    return;
  }
}
