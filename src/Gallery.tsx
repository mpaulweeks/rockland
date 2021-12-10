import { useState } from "react";
import { Database } from "./db";
import { PhotoPreview } from "./PhotoPreview";
import { PhotoSort } from "./types";

export function Gallery(props: {db: Database}) {
  const [sortBy, setSortBy] = useState<PhotoSort>({
    sortBy: p =>  p.date,
    reverse: false,
  });

  const records = props.db.get(sortBy);

  return (
    <div>
      {records.map((p, i) => <PhotoPreview key={i} photo={p} />)}
    </div>
  )
}
