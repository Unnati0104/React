import React from "react";

const box = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    borderRadius: "30px",
    margin: "10px",
};

const bg = {
    height: "150px",
    width: "650px",
    margin: "20px",
    padding: "20px",
};

const cn = {
    textAlign: "center",
    fontFamily: "sans-serif",
};

const red = {
    color : "red",
};

const yel ={
    color: "blue",
    backgroundColor: "yellow",
    padding: "5px",
    borderRadius: "5px",
};

export default class ClassComponent extends React.Component{
    render(){
        return(
            <div style = {box}>
            <div style = {bg}>
                <h1 style = {cn}> This is Class Component</h1>;
                <h2 style = {cn}> 
                    <span style = {red}> Created By: </span>
                    <span style = {yel}> Unnati Goyal </span>
                </h2>
            </div>
        </div>
        ); 
    }
}
