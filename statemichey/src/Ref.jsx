import React, { useState, useEffect, useRef } from 'react';



export default function Ref() {

    // const numRef = useRef(0);
    const [count,setCount] = useState(0);

    const handleClick = () => {
        // numRef.current = 1;
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    };
    // useEffect(()=>{
    //     console.log(numRef.current)
    //
    // });




    return (
        <div className="timer">
            {/*<button onClick={handleClick}>{numRef.current}</button>*/}
            <button onClick={handleClick}>{count}</button>

        </div>
    );
}