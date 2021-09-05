//  都直接用js写  不装react了





import React, {useState, useEffect} from 'react';


function APP() {
    const [count,setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    },[])

return <h1>{count}</h1>
}
