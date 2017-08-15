import React, { Component } from 'react';

export default class EmployeeDetails extends Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.currentEmployee.bgc}}>
                <h1>{this.props.currentEmployee.name}</h1>
                <h2>{this.props.currentEmployee.desc}</h2>
            </div>
        )
    }
}