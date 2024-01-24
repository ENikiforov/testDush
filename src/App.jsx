import './App.css';
import React from "react";
import Temperature from "./components/temp";
import Text from "./components/text";
import LeftCards from "./components/leftCards";


function App() {
    return (
        <div className='containerApp'>
            <h1 className='headText'>ДУШНИЛА</h1>
            <div className='body'>
                <div>
                    <Text/>
                    <LeftCards/>
                </div>
                <Temperature/>
            </div>
        </div>
    );
}

export default App;
