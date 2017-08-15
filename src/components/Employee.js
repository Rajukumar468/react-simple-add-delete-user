import React, { Component } from 'react';

export default class Employee extends Component{
    onEmployeeClick(){
        this.props.onEmpClick();
    }
    onEmployeeRemove(e){
        this.props.onEmpRemove();
        e.stopPropagation();
    }
    render(){
        return(
            <div className='company-list' style={{backgroundColor: this.props.bgc}} onClick={this.onEmployeeClick.bind(this)}>
                <button className="btn btn-danger pull-right" onClick={this.onEmployeeRemove.bind(this)}>X</button>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}