import React, { Component } from "react";
import './App.css'
class Practice extends Component{
    constructor(prop){
        super(prop)
        this.state ={num:0}
        this.handleRandom = this.handleRandom.bind(this);
    }
    handleRandom(){
        let randomNumber = Math.floor(Math.random() * 10);
        this.setState(()=>({
            num: randomNumber
        }))
    }
    render(){
        const containerClass = 'practice-container';
        const title = this.props.title;
        return(
            <div className={containerClass}>
                <h1>{title}</h1>
                <h2>{this.state.num}</h2>
                <button onClick={this.handleRandom}>random number</button>
                {this.state.num === 7? <h3 className="winner">winner</h3>: <h4>click the button again</h4>}
            </div>
        )
    }
}

export default Practice;