import React from 'react';

function Dialog(props) {
    return (
        <div style={{color: props.color || 'green'}}>
            {props.children}
            {props.btn}
        </div>
    )
}

export default function Composition() {
    const confirmBtn = (
        <button onClick={() => alert('react好不好玩')}>确认</button>
    )
    return (
        <div>
            <h1>组件复合的写法</h1>
            <Dialog color="pink" btn={confirmBtn}>
                <h2>欢迎来到小D课堂</h2>
                <p>Welcome</p>
            </Dialog>
        </div>
    )
}