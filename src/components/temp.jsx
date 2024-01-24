import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateExcess, updateCO2, updateTemp} from "../store/actions";
import './temp.css';


const Temperature = () => {
    const dispatch = useDispatch()
    const co2 = useSelector(state => state.co2)
    const temp = useSelector(state => state.temp)
    const excess = useSelector(state => state.excess)

    const getData = () => {
        fetch('http://dushnila.gooddelo.com/data')
            .then(response => response.json())
            .then(data => {
                dispatch(updateCO2(data.co2))
                dispatch(updateTemp(data.temp))
                if (data.co2 > 800 || data.temp > 27) {
                    dispatch(updateExcess(true))
                } else {
                    dispatch(updateExcess(false))
                }
            })
            .catch(err => console.log(err))

    }

    const tempContainer = () => 'tempContainer' + (excess !== false ? ' alt' : '')
    const tempVal = Math.round(temp * 10) / 10
    const coVal = Math.round(co2)

    useEffect(() => {
        getData()
        const interval = setInterval(() => {
            getData()
        }, 60000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <div className={tempContainer()}>
                <h1 className='tempTextMain'>{tempVal} ℃</h1>
                <p className='tempText'>Температура</p>
                <h2 className='coText'>{coVal} ppm</h2>
                <p className='co2Text'>CO2</p>
            </div>
        </div>
    )
}
export default Temperature