import { useState } from "react";
import UseGetData from "../../Hooks/UseGetData";
import { useParams } from "react-router-dom";

const TourDetails = () => {
  const [tourDetails,setTourDetails] = useState()
  const {tours,loading} = UseGetData()
  const {Id} = useParams()

    if(loading){
     return console.log('loading');
    }


    const filteredTour = tours?.find(tour => tour.Id == Id)
    console.log(filteredTour);
    const {
      tourName,
      tourDescription,
      destination,
      price,
      duration,
      facilities,
    } = filteredTour;

    return (
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1676982102134-00bcdd1ccd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold mb-2">{tourName}</h2>
              <p className="text-gray-600 text-sm mb-4">{tourDescription}</p>
              <div className="mb-4">
                <p>
                  <span className="font-bold text-gray-700">Destination:</span>
                  {destination}
                </p>
              </div>

              <div>
                <span className="font-bold text-gray-700">Facilities:</span>
                {facilities.map((facility, idx) => (
                  <li key={idx}>{facility}</li>
                ))}
              </div>

              <div className="flex my-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700">Price:</span>
                  <span className="text-gray-600">{price}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">Duration:</span>
                  <span className="text-gray-600"> {duration}</span>
                </div>
              </div>

              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
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