import { useEffect, useState } from "react";
import UseGetData from "../../Hooks/UseGetData";
import { getDataLs } from "../../Utility/localStorage";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [filteredData , setFilteredData] = useState({})
  const { tours,loading } = UseGetData() || {};

  
  useEffect(() => {
    const savedData = getDataLs();

    const data = tours?.filter((tour) => savedData.includes(tour.Id));

    setFilteredData(data);
  }, [tours]);

  if(loading){
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div>
    );
  }



  return (
    <section className=" grid md:grid-cols-3 gap-5  mx-auto p-10 md:p-20 antialiased ">
      {
        filteredData?.map(tour => <FavoriteCard key={tour.Id} tour={tour}></FavoriteCard>)
      }
    </section>
  );
};

export default Favorites;
