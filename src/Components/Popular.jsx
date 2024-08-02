import React from "react";
import POPULAR from "../assets/popular";
import Item from "./Item";

const Popular = () => {
  return (
    <section>
      <div>
        <h3>Popular Product</h3>
        <hr />
        <div>
          {POPULAR.map((item) => (
            <Item key={item.id} id={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
