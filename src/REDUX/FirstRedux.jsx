import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add, minus, asyncAdd} from './count.redux'

// const mapStateToProps = (state) => {
//     return {
//         count: state
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: () => dispatch({type: 'add'}),
//         minus: () => dispatch({type: 'minus'})
//     }
// }

@connect(
    state => ({count: state}),
    {add, minus, asyncAdd}
    // dispatch => ({
    //     add: () => dispatch({type: 'add'}),
    //     minus: () => dispatch({type: 'minus'})
    // })
    
        // add: () => ({type:'add'}),
        // minus: () => ({type:'minus'}),
        // asyncAdd: () => dispatch => {
        //     setTimeout(() => {
        //         dispatch({type: 'add'})
        //     }, 2000)
            
        // }
    
)

class FirstRedux extends Component {
    render() {
        return (
            <div>
                <h1>学习Redux，编写第一个redux累加器</h1>
                {this.props.count}
                <div>
                    <button onClick={()=>this.props.add()}>+1</button>
                    <button onClick={()=>this.props.minus()}>-1</button>
                    <button onClick={()=>this.props.asyncAdd()}>延时+1</button>
                </div>
            </div>
        )
    }
}

export default FirstRedux;