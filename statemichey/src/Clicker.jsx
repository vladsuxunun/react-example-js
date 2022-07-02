import {useState,useEffect} from "react";

function Clicker() {

    const [count,setCount] = useState(0);
    const [Loading,setLoading] = useState(false);
    const increment = () => {
        setCount(count + 1)

    }
    const decrement = () => {
        setCount(count - 1)

    }
    return (
        <div>
            <button onClick={increment}>{count}</button>
            <button onClick={decrement}>{count}</button>


        </div>
    );
}

export default Clicker;
