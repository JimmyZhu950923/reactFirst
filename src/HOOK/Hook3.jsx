import React, {useContext} from 'react'
import Child from './Hooktest'

const Context = React.createContext({name: 'tim', age: '18'});

export default function Hook3() {
    const ctx = useContext(Context);
    return (
        <div>
            <div>我是{ctx.name} -- {ctx.age}岁</div>
            <p>使用子组件</p>
            <Child Context={Context}></Child>
        </div>
    )
}
