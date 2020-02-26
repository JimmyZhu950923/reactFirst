import React, { useState } from 'react'

const Hook1 = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <div>你点击了{count}次</div>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
        </div>
    )
};

export default Hook1;