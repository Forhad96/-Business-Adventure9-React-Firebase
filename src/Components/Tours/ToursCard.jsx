import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ToursCard = ({ tour }) => {
  return (
    <div className="relative group">
      
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="relative">
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div className="absolute bottom-6 left-6">
          <h3 className="z-10 mt-3 text-3xl font-bold text-white">
            {tour.tourName}
          </h3>
          <div className="z-10 gap-y-1  overflow-hidden text-sm leading-6 text-gray-300">
            {tour.destination}
          </div>
          <Link to={`/tourDetails/${tour.Id}`}>
            <button className="z-10 gap-y-1 btn bg-transparent btn-outline-success overflow-hidden text-sm leading-6 text-gray-300 shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
ToursCard.propTypes = {
  tour: PropTypes.object.isRequired,
};
export default ToursCard;
