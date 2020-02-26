import React, { Component } from 'react'

const withFirstHOC = (Comp) => {
    const NewComponent = (props) => {
        return (
            <div>
                <Comp {...props} name="欢迎大家来到小D课堂学习react" ></Comp>
            </div>
        )
    }
    return NewComponent;
};

const withLifeCycle = (Comp) => {
    class NewComponent extends Component {
        componentDidMount() {
            console.log('重写componentDidMount生命周期');
        }

        render() {
            return (
                <Comp {...this.props}></Comp>
            )
        }
    }

    return NewComponent;
};

@withFirstHOC
@withLifeCycle
class HOC extends Component {
    render() {
        return (
            <div>
                <h1>欢迎大家体验高阶组件的写法</h1>
                {this.props.title}
                <p>姓名： {this.props.name}</p>
            </div>
        )
    }
}


export default HOC;