import { Photo } from "./types";

export class UrlManager {
  readUrl(): string | undefined {
    const hash = window.location.hash.split('#').pop();
    console.log('hash', hash);
    return hash;
  }
  setUrl(photo?: Photo): void {
    // https://stackoverflow.com/a/14690177
    const hash = `#${photo?.image ?? ''}`;
    if (window.history.pushState) {
      window.history.pushState(null, '', hash);
    }
    else {
      window.location.hash = hash;
    }
  }
}
