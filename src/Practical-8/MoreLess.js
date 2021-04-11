import React, {Component} from "react";

const btn = {
    padding: "5px 10px",
    margin: "10px",
    fontSize: "15px",
    fontFace: "bold"
};

export default class MoreLess extends React.Component{
    constructor(){
        super();
            this.state = {
                content: "",
                btn: "Read More",
                chk: true
            };
    }

    upd = () => {
        if(this.state.chk == true){
            this.setState({
                content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                btn: "Show Less",
                chk: false
            });

        }
        else{
            this.setState({
                content: "",
                btn: "Read More",
                chk: true
            });
        }
    };

    render(){
        return(
            <div style = {{textAlign: "center", marginTop: "90px"}}>
                <h1 style = {{color : "red"}}>Ques-2</h1>
                <hr style = {{width : "30%", margin : "0px auto"}}/>
                <h2>Welcome You...</h2>
                <p style = {{fontSize: "20px"}}>Click on Button to see More|Less</p>
                <p style = {{fontSize: "18px", color: "blue"}}>{this.state.content}</p>
                <button onClick = {this.upd} style = {btn}>{this.state.btn}</button>
            </div>
        );
    }
} 