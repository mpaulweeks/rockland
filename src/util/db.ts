import { Data, Photo, PhotoSort } from "./types";
import { sortBy } from "./util";

export class Database {
  private constructor(
    private readonly data: Data) { }

  get(photoSort: PhotoSort): Photo[] {
    return sortBy(this.data.photos, photoSort.sortBy);
  }

  search(terms: string[], orderBy: PhotoSort) {
    return this.get(orderBy).filter(p => terms.some(t => p.description.includes(t)));
  }

  static async load() {
    const resp = await fetch('data.json');
    const json = await resp.json() as Data;
    return new Database(json);
  }
}
