import { use } from "react";

import { Opinion } from "./Opinion";
import { OpinionsContext } from "../store/opinions-context";

export function Opinions() {
  const { opinions } = use(OpinionsContext);
  const sortedOpinions = opinions
    ? [...opinions].sort((a, b) => b.id - a.id)
    : [];

  return (
    <div id="opinions">
      <h2>User Opinions</h2>
      {sortedOpinions.length > 0 && (
        <ul>
          {sortedOpinions.map((o) => (
            <li key={o.id}>
              <Opinion opinion={o} />
            </li>
          ))}
        </ul>
      )}
      {!opinions && (
        <p>No opinions found. Maybe share your opinion on something?</p>
      )}
    </div>
  );
}
