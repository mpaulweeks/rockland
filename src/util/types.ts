export interface Data {
  photos: Photo[];
}

export interface PhotoSort {
  reverse: boolean;
  sortBy(record: Photo): (string | number | Date);
}

export interface Photo {
  added: Date;
  date: string;
  image: string;
  description: string;
}
