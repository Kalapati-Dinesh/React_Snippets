import { useEffect, useState } from "react";

function Count() {
    let[count, setCount] = useState(0);
    useEffect(() => console.log("You clicked button."))
    const dec = () => {
        setCount(count = count-1);
    }


    const inc = () => {
        setCount(count = count + 1);
    }

    return (
        <>
            <button onClick={dec}>Decrement</button>
            <h1>The count is {count}</h1>
            <button onClick={inc}>Increment</button><br /><br />
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Count;