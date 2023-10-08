import UseGetData from "../../Hooks/UseGetData";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const { testimonials } = UseGetData();
  return (
    <section id="testimonies" className="py-20 my-10 text-white">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It&rsquo;s not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            {testimonials?.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} ></TestimonialCard>
            ))}
          </ul>
          <ul className="hidden space-y-8 sm:block">
            {testimonials?.slice(3, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} ></TestimonialCard>
            ))}
          </ul>
          <ul className="hidden space-y-8 sm:block">
            {testimonials?.slice(6, 9).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} ></TestimonialCard>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
