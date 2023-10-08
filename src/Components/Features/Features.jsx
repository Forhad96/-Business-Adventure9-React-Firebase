import UseGetData from "../../Hooks/UseGetData";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    const {features} =UseGetData()

    return (
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-[#DAFFFB]">
            Highlighted Features
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* can help image */}
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="h-[600px] object-cover w-[500px] mx-auto"
              src="https://plus.unsplash.com/premium_photo-1661870399335-f5efe423b78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              alt="can_help_banner"
            />
          </div>
          {/* end can help image */}
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            {features?.map((feature, idx) => (
              <FeaturesCard key={idx} feature={feature}></FeaturesCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Features;