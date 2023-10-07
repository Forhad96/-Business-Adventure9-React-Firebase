import UseGetData from "../../Hooks/UseGetData";
import ToursCard from "./ToursCard";


const Tours = () => {
  const {tours} = UseGetData()

    return (
      <div className="grid grid-cols-3 gap-5 place-content-center px-4 sm:px-6 md:px-8">
        {tours?.map((tour, idx) => (
          <ToursCard key={idx} tour={tour}></ToursCard>
        ))}
      </div>
    );
};

export default Tours;