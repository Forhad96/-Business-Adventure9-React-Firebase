import UseGetData from "../../Hooks/UseGetData";
import ToursCard from "./ToursCard";


const Tours = () => {
  const {tours} = UseGetData()

    return (
      <div className="md:my-20 md:mx-16">
        <h2 className="text-4xl text-center border-b-4 text-[#DAFFFB] font-bold my-5 lg:mb-20">
          Our services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-8 place-content-center">
          {tours?.map((tour, idx) => (
            <ToursCard key={idx} tour={tour}></ToursCard>
          ))}
        </div>
      </div>
    );
};

export default Tours;