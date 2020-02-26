import React, {useContext} from 'react'

export default function Hook3({Context}) {
    const ctx = useContext(Context);
    return (
        <div>
            <div>我是{ctx.name} -- {ctx.age}岁</div>
        </div>
    )
}
