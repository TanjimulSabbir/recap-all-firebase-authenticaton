import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [car, setCar] = useState();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '74f6093500msh0026ad6883e30d7p137b23jsn010793ecea73',
                'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
            }
        };

        fetch('https://car-data.p.rapidapi.com/cars/makes', options)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(err => console.error(err));
    }, [1500])
    console.log(car)
    return (
        <div className='carDiv'>
            This is home page.
            {
                car?.map((c) => {
                    return <div>
                        <p className='carCard'>{c}</p>
                    </div>
                })
            }
        </div>
    );
};

export default Home;