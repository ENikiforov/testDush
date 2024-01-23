import React from "react";
import './history.css';

const History =()=>{
    return (
        <div>
            <button className='historyBut'>
                    История
                <div className='butArrow'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                    >
                        <path
                            d="M24.5 14.2521L18.6667 8.41879M24.5 14.2521L18.6667 20.0855M24.5 14.2521H3.5"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>

        </div>
        )
}
export default History