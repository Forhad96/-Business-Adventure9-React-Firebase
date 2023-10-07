import { useEffect } from "react";
import { useState } from "react";


const UseGetData = () => {
    const [allData,setAllData]=useState({})
    const[loading,setLoading] = useState(true)
    const {heroSection} = allData


    useEffect(()=>{
        fetch('/tours.json')
        .then(res => res.json())
        .then(data =>{
            setAllData(data)
            setLoading(false)
        })
    },[])

    return {heroSection,allData,loading}
};

export default UseGetData;