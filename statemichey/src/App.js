import {useState} from "react";
import Clicker from "./Clicker";
import Timer from "./Timer";
import Ref from "./Ref";
import {State} from "./State";
import {Context} from "./hooks/Context";
import {Books} from "./components/Books";


function App() {
    return <div>
        <Clicker/>
        <Timer/>
        <Ref/>
        <State/>
        <Context>

        </Context>





    </div>


}

export default App;
