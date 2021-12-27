import { Photo } from "./types";

class UrlManager {
  readUrl(): string | undefined {
    return window.location.hash.split('#').pop();
  }
  setUrl(photo?: Photo): void {
    // https://stackoverflow.com/a/14690177
    const hash = `#${photo?.image ?? ''}`;
    if (window.history.pushState) {
      window.history.pushState(null, document.title, hash);
    }
    else {
      window.location.hash = hash;
    }
  }
}

export const URL = new UrlManager();
