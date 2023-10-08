import Faq from "../../Components/Faq/Faq";
import Features from "../../Components/Features/Features";
import Banner from "../../Components/Header/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Tours from "../../Components/Tours/Tours";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <Testimonial></Testimonial>
            <Features></Features>
            <Faq></Faq>
        </div>
    );
};

export default Home;