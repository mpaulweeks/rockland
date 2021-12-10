import { useState } from "react";
import { Database } from "./db";
import { PhotoPreview } from "./PhotoPreview";
import { PhotoSort } from "./types";

export function Gallery(props: {db: Database}) {
  const [sortBy, setSortBy] = useState<PhotoSort>(p => p.date);

  const records = props.db.get(sortBy);

  return (
    <div>
      {records.map((p, i) => <PhotoPreview key={i} photo={p} />)}
    </div>
  )
}
