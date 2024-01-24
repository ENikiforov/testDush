import React from "react";
import { useSelector } from 'react-redux';
import './text.css';

const Text = () => {

    const co2 = useSelector(state => state.co2)
    const temp = useSelector(state => state.temp)
    const excess = useSelector(state => state.excess)

    const text = () => {
        if (co2 > 800 && temp <= 27) return ('CO2 превышает норму')
        else if (co2 <= 800 && temp > 27) return ('Температура превышает норму')
        else if (co2 > 800 && temp > 27) return ('Все показатели превышают норму')
        else return ('Все показатели в норме')

    }
    const result = () => 'result' + (excess !== false ? ' alt' : '')
    const resultText = () => excess === false ? 'Душнила доволен вами' : 'Душнила не доволен вами'


    return (
        <div>
            <div className={result()}>
                <h1 className='resultText'>
                    {resultText()}
                </h1>
                <p className='resultTextMain'>
                    {text()}
                </p>
            </div>
        </div>
    )
}

export default Text