import React from 'react';
import './leftCards.css'
import History from "./history";
import Days from "./days";
import Logo from "./pic";

const LeftCards = () => {
    return (
        <div className='cards-container'>
            <div className='cards'>
                <Days className='days'/>
                <History className='historyText'/>
            </div>
                <Logo/>
        </div>

    )
}
 export default LeftCards