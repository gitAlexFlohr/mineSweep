import React from "react";
import { Rectangle } from "react-shapes";
import './Square.css';

class Square extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            color: '#8b8b8c',
            number: '',
            bomb: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if(this.state.color === '#8b8b8c')
        {
            this.setState({
                color : '#ba1a1a'
            });
        }
        else{
            this.setState({
                color : '#8b8b8c'
            }); 
        }
    }
    render() {
        return (
        <div className="Square" onClick={this.handleClick}>
           <Rectangle width={50} height={50} fill={{color: this.state.color}}  stroke={{color : '#000000'}}
           strokeWidth={2} />
        </div>);
    }
}

export default Square;