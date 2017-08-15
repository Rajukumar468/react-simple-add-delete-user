import React from 'react';
import $ from 'jquery'; 
import Header from './Header';
import AddEmployee from './AddEmployee';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
export default class EmployeeManagement extends React.Component {
    constructor(){
        super();
        this.state = {
            emp:[
                
                {"name":"Raju Kumar","desc":"Raju Description","bgc":"#9ec0f7"},{"name":"Saurabh Kamble","desc":"Saurabh Description","bgc":"#e7b8ef"},{"name":"Krishna","desc":"Krishna Description","bgc":"#e9fcc4"}
                
            ],
        selectedEmployee:{}
        };
        
    }
//    componentDidMount(){
//        $.ajax({
//            url:'https://api.myjson.com/bins/19x6xt',
//            method:'GET',
//            
//        }).then((data)=>this.setState({emp:data, selectedEmployee:data[0]}));
//    }
//    
    handleAdd(name,address){
        let newEmp = {name:name,desc:address,bgc:"#"+((1<<24)*Math.random()|0).toString(16)};
        let emp = this.state.emp;
        emp.push(newEmp);
        this.setState({emp});
    }
    
    handleEmployeeClick(i){
        let selectedEmployee = this.state.emp[i];
        this.setState({selectedEmployee:selectedEmployee});
    }
    handleRemoveEMployee(i){
        console.log(i);
        let employees = this.state.emp;
        employees.splice(i,1);
        let selectedEmployee;
        if(employees.length > 0){
            selectedEmployee = employees[0];
        }else{
            selectedEmployee = {};
        }
        this.setState({employees, selectedEmployee});
        
    }
  render(){
        return(
            <div>
                <Header title="EMPLOYEE MANAGEMENT CONSOLE"/>
                <AddEmployee onAdd={this.handleAdd.bind(this)}/>
                <br/>
                <EmployeeList employees={this.state.emp} onEmployeeClickList={this.handleEmployeeClick.bind(this)} onEmployeeRemove={this.handleRemoveEMployee.bind(this)}/>
                <EmployeeDetails currentEmployee={this.state.selectedEmployee}/>
            </div>
        );
    }
}