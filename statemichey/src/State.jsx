import {useState,useEffect} from "react";

export const State = () => {

        const [state,setState] = useState( {
            count:0,
            isCounting:false,
        })
    // const [value,setValue] = useState(() =>{
    //     const userCount = localStorage.getItem('count')
    //     return +userCount || 0;
    // });
    // setValue((prevVALUE) =>{
    //     return prevVALUE + 1
    // })
    const handleCount = () => {

            setState({
                ...state,count: state.count + 1});
    };
    const handleStatus = () => {

        setState({
            ...state,isCounting: !state.isCounting});
    };




    useEffect(() =>{
        console.log(state);

    },[state]);


    return <div>

        <button onClick={handleCount}>click</button>
        <button onClick={handleStatus}>mejj</button>
    </div>;



};