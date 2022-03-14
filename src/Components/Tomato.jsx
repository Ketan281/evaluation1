import React from "react";


const Tomato = () => {
    const [count, setCount] = React.useState(10);
    function changeCount(val){
        setCount(count +val);
    }

    return(
        <>
        <div>
        <h1>Tomato:{count}</h1>
        </div>
        <button onClick={()=>changeCount(1)}> 
         +
        </button>
        <button onClick={()=>changeCount(-1)}> 
         -
        </button>
        </>
    )
}
export {Tomato}