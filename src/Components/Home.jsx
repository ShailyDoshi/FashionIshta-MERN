import React from "react";
import Hearo from "./Hearo";
import Popular from "./Popular";
import Offer from "./Offer";
import NewCollections from "./NewCollections";
import NewsLatter from "./NewsLatter";

const Home = () => {
  return (
    <>
      <Hearo />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLatter />
    </>
  );
};

export default Home;
