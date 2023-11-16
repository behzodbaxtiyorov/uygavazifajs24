/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

import Tour from "./Tour";


export default function Tours({ list }) {
  return (
    <div className="taurs">
      {list.map((item) => <Tour key={item.id} {...item}/> )}
    </div>
  );
}
