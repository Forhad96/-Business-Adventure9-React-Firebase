
import UseGetData from "../../Hooks/UseGetData";
import { useParams } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import { saveDataLs } from "../../Utility/localStorage";

const TourDetails = () => {

  const {tours,loading} = UseGetData()
  const {Id} = useParams()
  console.log(typeof Id);
  const idInt = parseInt(Id)

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

    
    const filteredTour = tours?.find(tour => tour.Id == Id)
   
    const {
      
      tourName,
      tourDescription,
      destination,
      price,
      duration,
      facilities,
    } = filteredTour;



    // handle favorite
    const handleFavorite =()=>{

      saveDataLs(idInt)
    }
    return (
      <div className=" py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[400px] max-w-md rounded-lg bg-gray-300 mb-4">
                <Slider></Slider>
              </div>
            </div>
            <div className="md:flex-1  px-4 ">
              <h2 className="text-2xl text-white font-bold mb-2">{tourName}</h2>
              <p className="text-gray-300 text-sm mb-4">{tourDescription}</p>
              <div className="mb-4">
                <p>
                  <span className="font-bold text-gray-300">Destination: </span>
                  <span className="text-gray-300">

                  {destination}
                  </span>
                </p>
              </div>

              <div>
                <span className="font-bold text-gray-300">Facilities:</span>
                <div className="text-lg text-white">

                {facilities.map((facility, idx) => (
                  <li key={idx}>{facility}</li>
                ))}
                </div>
              </div>

              <div className="flex my-6 ">
                <div className="mr-4">
                  <span className="font-bold text-gray-300">Price:</span>
                  <span className="text-gray-300">{price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-300">Duration:</span>
                  <span className="text-gray-300"> {duration}</span>
                </div>
              </div>

              <div className="flex -mx-2 mt-10">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button onClick={handleFavorite} className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TourDetails;