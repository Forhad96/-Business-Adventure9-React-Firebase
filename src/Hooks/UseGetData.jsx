import { useEffect } from "react";
import { useState } from "react";


const UseGetData = () => {
    const [allData,setAllData]=useState({})
    const[loading,setLoading] = useState(true)
    const { heroSection, tours, features, faqSection, testimonials, teams } =
      allData;


    useEffect(()=>{
        fetch('/tours.json')
        .then(res => res.json())
        .then(data =>{
            setAllData(data)
            setLoading(false)
        })
    },[])

    return {
      allData,
      loading,
      tours,
      heroSection,
      features,
      faqSection,
      testimonials,
      teams,
    };
};

export default UseGetData;