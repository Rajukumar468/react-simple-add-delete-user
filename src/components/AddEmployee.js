import React, { Component } from 'react';

export default class AddEmployee extends Component{
    
    add(){
        this.props.onAdd(this.refs.empName.value, this.refs.empAddress.value);
        this.refs.empName.value = '';
        this.refs.empAddress.value = '';
    }
    
    render(){
        return(
        <div className='row'>
              <div className="col-md-2">
                <input type="text" ref='empName' className="form-control" id="First Name" placeholder="Employee Name"/>
              </div>
            
              <div className="col-md-2">
                <textarea ref='empAddress' className="form-control" id="Address" placeholder="Employee Details"></textarea>
              </div>
              <button className="btn btn-success" onClick={this.add.bind(this)}>Add</button>
        </div>
        )
    }
}