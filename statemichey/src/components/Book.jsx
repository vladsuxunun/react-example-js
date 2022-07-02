import React ,{useContext} from "react";
import {CustomContext} from "../hooks/Context";

export function Book(props) {
    const {removeBook} =useContext(CustomContext)

    return <h2 onClick={() =>removeBook(props.id)}>{props.title}</h2>
}

