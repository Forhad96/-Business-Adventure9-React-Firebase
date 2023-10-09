import PropTypes from "prop-types";

const FeaturesCard = ({ feature }) => {
  return (
    <div
     
      className="w-full sm:w-1/2 mb-4 px-2 text-[#DAFFFB]"
    >
      <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
        <h3 className="text-2xl font-bold text-md mb-6">
          {feature.featureTitle}
        </h3>
        <p className="text-sm">{feature.featureDescription}</p>
      </div>
    </div>
  );
};
FeaturesCard.propTypes ={
    feature: PropTypes.object.isRequired,
}
export default FeaturesCard;
