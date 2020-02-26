import React, { Component} from 'react'

export default class Purememo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '小D课堂学习React',
            count: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                <Title title={this.state.title} />
                <Count count={this.state.count} />
            </div>
        )
    }
}


// class Title extends PureComponent {

//     // shouldComponentUpdate(nextProps) {
//     //     return nextProps.title !== this.props.title
//     // }

//     render() {
//         return (
//             <div>
//                 标题：{this.props.title}
//             </div>
//         )
//     }
// }

const Title = React.memo((props) => {
    return (
        <div>
            {props.title}
        </div>
    )
})


class Count extends Component {
    render() {
        return (
            <div>
                条数：{this.props.count}
            </div>
        )
    }
}
