import { useEffect, useState  } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_MMewTn64Gmeb5uVVZ7z1zvtoNiGIB46scFj2UTJ4')
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    return data   //  returns the data fetched and stored in the state
}

export default useCurrencyInfo   // custom hook, here it helps to return whole functionality's method  