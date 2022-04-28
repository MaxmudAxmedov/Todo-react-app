import React, {useState} from "react";
// js file import

import Item from "../Item/Item";
import Completed from "../Completed/Completed";

// scss file list.scss import
import "./list.scss";

function List () {

    const [array, setArray] = useState(JSON.parse(window.localStorage.getItem("array") || []));
    const [arrayTrue, setTrue] = useState(JSON.parse(window.localStorage.getItem("arrayTrue"))|| []);
    const [arrayFalse, setFalse] = useState(JSON.parse(window.localStorage.getItem("arrayFalse")) || []);
   
    function renderFunction (evt) {
        
        const todo = {
            id: array[array.length - 1]?.id + 1 || 0,
            title: evt.target.value,
            isCompleted: false
        }

        if(evt.code === "Enter" && evt.target.value !== ""){
            evt.target.value = "";
 
            window.localStorage.setItem("array", JSON.stringify([...array, todo]));  
            
            setTrue(JSON.parse(window.localStorage.getItem("array")).filter(item => item.isCompleted === true))
            setFalse(JSON.parse(window.localStorage.getItem("array")).filter(item => item.isCompleted === false))

            window.localStorage.setItem("arrayFalse", JSON.stringify([...arrayFalse, todo]));
            window.localStorage.setItem("arrayTrue", JSON.stringify([...arrayTrue, todo]));

            setArray([...array, todo])

        }


    }

    function selectedItem (evt) {
        const idNumber = evt.target.dataset.id - 0;
        const findElement = array.find(item => item.id === idNumber);

        
        findElement.isCompleted = !findElement.isCompleted;

        window.localStorage.setItem("array", JSON.stringify([...array]));
        
        setTrue(JSON.parse(window.localStorage.getItem("array")).filter(item => item.isCompleted === true));
        setFalse(JSON.parse(window.localStorage.getItem("array")).filter(item => item.isCompleted === false));
      
        window.localStorage.setItem("arrayTrue", JSON.stringify([...arrayTrue, array ]));
        window.localStorage.setItem("arrayFalse", JSON.stringify([...arrayFalse, array ]));
        
        setArray([...array]);
    }

    function deleteItem (evt) {
        const idNumber = evt.target.dataset.id - 0;

        const filterElement = array.filter(item => item.id !== idNumber);
        const filterTrue = arrayTrue.filter(item => item.id !== idNumber);
        const filterFalse = arrayFalse.filter(item => item.id !== idNumber);

        window.localStorage.setItem("array", JSON.stringify(filterElement));
        window.localStorage.setItem("arrayTrue", JSON.stringify(filterTrue));
        window.localStorage.setItem("arrayFalse", JSON.stringify(filterFalse));

        setTrue(filterTrue);
        setFalse(filterFalse);
        setArray(filterElement);
    }
    
    function allItem () {
        setArray(JSON.parse(window.localStorage.getItem("array")));
    }

    function completedItem () {
        setArray(JSON.parse(window.localStorage.getItem("array")).filter(item => item.isCompleted === true));
        
    }

    function unCompletedItem () {
        setArray(JSON.parse(window.localStorage.getItem("array")).filter(item => item.isCompleted === false));
    }

    return(
        <div className="todo">
            <input className="list-input" onKeyUp={renderFunction} type="text" placeholder="Enter your text"/>
            <ul className="list">
                {
                    array.map(item => (
                        <Item key={item.id} title={item.title} id={item.id} isCompleted={item.isCompleted} selected={selectedItem} deleteItem={deleteItem} />
                    ))
                } 
            </ul>
            <Completed all={array.length} Completed={arrayTrue.length} unCompleted={arrayFalse.length}  allItem={allItem} completedItem={completedItem} unCompletedItem={unCompletedItem} />
        </div>

    )
}

export default List;