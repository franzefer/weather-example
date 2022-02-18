import { useEffect, useState } from "react";

const url = 'http://localhost:3001/'

export const useWeather = () => {
    const [data, setData] = useState({
        temp: null,
        clouds: null,
        pressure: null
    })

    const fetchApi = async () => {
        const res = await fetch(url)
        const { temp, clouds, pressure } = await res.json()
        if (temp && clouds && pressure) {
            setData({
                temp,
                clouds,
                pressure
            })
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return data
}

