import ToursCard from "./ToursCard";


const Tours = () => {
    const data = [1,2,3,4,5,6];
    return (
      <div className="grid grid-cols-3 px-4 sm:px-6 md:px-8">
        {data.map((num, idx) => (
          <ToursCard key={idx}></ToursCard>
        ))}
      </div>
    );
};

export default Tours;