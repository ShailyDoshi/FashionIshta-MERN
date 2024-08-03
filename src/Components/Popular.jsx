import React from "react";
import POPULAR from "../assets/popular";
import Item from "./Item";

const Popular = () => {
  return (
    <>
      <h1>Popular Product</h1>
      <hr
        style={{
          backgroundColor: "lightgrey",
          height: 3,
        }}
      />
      {POPULAR.map((item) => (
        <Item key={item.id} id={item.id} />
      ))}
    </>
  );
};

export default Popular;
