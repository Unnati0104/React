import React, {Component} from "react";

const btn = {
    padding: "5px 10px",
    margin: "10px",
    fontSize: "15px",
    fontFace: "bold"
};

export default class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 10
        };
    }

    inc = () => {
        this.setState({
            value: this.state.value + 1
        });
    }; 

    rst = () => {
        this.setState({
            value: 0
        });
    }; 

    dcr = () => {
        this.setState({
            value: this.state.value - 1
        });
    }; 

    render(){
        return (
            <React.Fragment>
                <h1 style = {{textAlign: "center", color : "red"}}>Ques-1</h1>
                <hr style = {{width : "30%", margin : "0px auto"}}/>
                <h1 style = {{textAlign: "center"}}>{this.state.value}</h1>
                <div style = {{display: "flex", alignItems : "center", justifyContent : "center"}}>
                    <button onClick = {this.inc} style = {btn}>Increase</button>
                    <button onClick = {this.rst} style = {btn}>Reset</button>
                    <button onClick = {this.dcr} style = {btn}>Decrease</button>
                </div>
            </React.Fragment>
        );
    }
}