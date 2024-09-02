import Hearo from "../Components/Hearo";
import NewCollections from "../Components/NewCollections";
import NewsLatter from "../Components/NewsLatter";
import Offer from "../Components/Offer";
import Popular from "../Components/Popular";

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
