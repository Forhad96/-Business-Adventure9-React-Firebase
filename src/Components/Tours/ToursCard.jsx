import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ToursCard = ({ tour }) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full mx-auto mt-12">
      <img
        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
        alt="University of Southern California"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">
        {tour.tourName}
      </h3>
      <div className="z-10 gap-y-1  overflow-hidden text-sm leading-6 text-gray-300">
        {tour.destination}
      </div>
      <Link to={`/tourDetails/${tour.Id}`}>
        <button className="z-10 gap-y-1 btn bg-transparent btn-outline-success overflow-hidden text-sm leading-6 text-gray-300">
          Details
        </button>
      </Link>
    </article>
  );
};
ToursCard.propTypes ={
  tour: PropTypes.object.isRequired,
}
export default ToursCard;
