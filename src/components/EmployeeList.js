import React, { Component } from 'react';
import Employee from './Employee';
export default class EmployeeList extends Component{
    
    onEmployeeClick(i){
        this.props.onEmployeeClickList(i);
    }
    onEmployeeRemove(i){
        this.props.onEmployeeRemove(i);
    }
    render(){
        return(
        <div className='row'>
            {this.props.employees.map(function(emp, i){
                return <Employee key={i} name={emp.name} bgc={emp.bgc} onEmpClick={this.onEmployeeClick.bind(this,i)} onEmpRemove={this.onEmployeeRemove.bind(this,i)}/>
            },this)}
        </div>
        );
    }
}