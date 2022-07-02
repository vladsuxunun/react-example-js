import React,{useContext} from "react";
import {Book} from "./Book";
import  {CustomContext} from "../hooks/Context";


export function Books(){
    const {books} = useContext(CustomContext);


    return (<div className={'books'}>
        {books.map((book) =>
                {
                    return<Books key ={book.id} {...book}/>;
                }
        )}


    </div>
    );
}