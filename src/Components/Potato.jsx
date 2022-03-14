import React from "react";


const Potato = () => {
    const [count, setCount] = React.useState(8);
    function changeCount(val){
        setCount(count +val);
    }

    return(
        <>
        <div>
            <h1>Potato:{count}</h1>
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
export {Potato}