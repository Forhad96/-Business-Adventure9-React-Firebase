const getDataLs = ()=>{
    const tours = localStorage.getItem('tours')
    if(tours){
        return JSON.parse(tours)
    }

    return []
}


const saveDataLs = (data)=>{
    const tours = getDataLs();

    const isExist = tours?.find(id => id == data)
    if(!isExist){
        tours.push(data)
        localStorage.setItem('tours',JSON.stringify(tours))
    }
}

export {getDataLs,saveDataLs}