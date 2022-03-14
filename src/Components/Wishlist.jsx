import React from "react";

const Wishlist = () => {
    const [query, setQuery] = React.useState("");
    const [wish, setWish] = React.useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    };
    const addtoWish = () => {
        const payload = {
            towish: query,
            status: false,
        };
        let updatedWish = [...wish, payload];
        setWish(updatedWish);
    };
    if(wish.length > 3)
    {
        return <h1>
            You cannot add more than 3 items to wishlist
        </h1>
    }
    return (
        <>
        <h1>Wishlist</h1>
        <input 
        placeholder="Add Wish"
        onChange={handleChange}
        value={query}
        />
        <button onClick={addtoWish}>Add Wish</button>
         
        {wish.map(({towish, status}, idx) => (
            
            <div key={idx} > {towish}</div>
        ))}
        </>
    )
}
export {Wishlist};