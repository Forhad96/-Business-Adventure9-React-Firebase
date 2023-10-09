import UseGetData from "../../Hooks/UseGetData";
// import './Banner.css'


const Banner = () => {
  const { heroSection, loading } = UseGetData();
  if(loading)
  return console.log('loading');

    return (
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[60vh] md:h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            {heroSection.title}
          </h1>
          <p data-aos="fade-right" className="text-lg text-gray-300 mb-8">
            {heroSection.subtitle}
          </p>
          <a
            data-aos="fade-up"
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-3 md:px-6 rounded-full md:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            {heroSection.ctaText}
          </a>
        </div>
      </div>
    );
};

export default Banner;