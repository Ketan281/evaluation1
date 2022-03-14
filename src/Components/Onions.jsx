import React from "react";


const Onions = () => {
    const [count, setCount] = React.useState(7);
    function changeCount(val){
        setCount(count +val);
    }
    
    return(
        <>
        <div>
        <h1>Carrots:{count}</h1>
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
export {Onions}