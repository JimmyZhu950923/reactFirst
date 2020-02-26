import React, {useEffect, useState} from 'react'

function Effect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        //处理副作用逻辑
        document.title = `你点击了${count}`
        return () => {
            console.log('组件卸载或更新了')
        }
    }, [count]);
    return (
        <div>
            <div>你点击了{count}次</div>
            <button onClick={() => setCount(count+1)}>+1</button>
        </div>
    )
}

const Hook2 = () => {
    const [count, setCount] = useState(10);
    return(
        <div>
            <div>你点击了{count}次</div>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
            {count>10 ? <Effect/> : null}
            
        </div>
    )
}

export default  Hook2;