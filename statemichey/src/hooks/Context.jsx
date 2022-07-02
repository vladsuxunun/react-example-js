import {useState,createContext} from "react";
export const CustomContext = createContext();

export const Context = (props) =>{
    const [books,setBooks] = useState([
        {id:1,title:'js'},
        {id:2,title:'react'},
        {id:3,title:'NodeJs'},

        ]
    );
    const addBook = (book) => {
        setBooks([book,...books])
    }
    const removeBook = (id) =>{
        setBooks(books.filter(book => book.id !== id))
    }
    const value ={
        books,
        addBook,
        removeBook,
    }
    return <CustomContext.Provider value ={value}>
        {props.children}
    </CustomContext.Provider>





}