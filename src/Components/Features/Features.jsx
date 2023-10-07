import UseGetData from "../../Hooks/UseGetData";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    const {features} =UseGetData()

    return (
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            Highlighted Features
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* can help image */}
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="w-1/2 md:w-full mx-auto"
              src="https://placeholder.pics/svg/600"
              alt="can_help_banner"
            />
          </div>
          {/* end can help image */}
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                {
                    features?.map((feature,idx) => <FeaturesCard key={idx} feature={feature}></FeaturesCard>)
                }

          </div>
        </div>
      </div>
    );
};

export default Features;