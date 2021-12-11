import { Photo } from "./types";

export class UrlManager {
  readUrl(): string | undefined {
    const hash = window.location.hash.split('#').pop();
    console.log('hash', hash);
    return hash;
  }
  setUrl(photo?: Photo): void {
    window.location.replace(`#${photo?.image ?? ''}`);
  }
}
