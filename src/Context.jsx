import React, { Component } from 'react'

//1.先创建一个数据源，供等一下使用
let store = {
    name: 'Time',
    from: '小D课堂'
}

// function Info(props) {
//     return (
//         <div>
//             <p>姓名： {props.name}</p>
//             <p>来自哪里: {props.from}</p>
//         </div>
//     )
// }

class Info extends Component {
    render() {
        return (
            <div>
            <p>姓名： {this.props.name}</p>
            <p>来自哪里: {this.props.from}</p>
        </div>
        )
    }
}

function ToolBar(props) {
    return (
        <Info {...props}></Info>
    )
}

export default class Context extends Component {
    render() {
        return (
            <div>
                <ToolBar name={store.name} from={store.from}></ToolBar>
            </div>
        )
    }
}
