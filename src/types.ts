export interface Data {
  photos: Photo[];
}

export type PhotoSort = (record: Photo) => (string | number | Date);

export interface Photo {
  added: Date;
  date: string;
  image: string;
  description: string;
}
