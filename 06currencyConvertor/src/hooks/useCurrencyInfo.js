import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    let [data,setData]= useState({});
    let url= `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((response)=>{
            setData(response[currency])
        })
    },[currency]);

    console.log(data)

    return data;
}


export default useCurrencyInfo;