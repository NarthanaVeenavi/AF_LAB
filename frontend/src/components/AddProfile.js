import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import axios from 'axios'







export default class AddProfile extends Component {

  constructor(props){
    super(props);
    this.state={
      id:"",
      firstname:"",
      lastname:"",
      address:"",

    }
  }

  handleInputChange = (e) =>{

    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value

    })
  }



  onSubmit =(e) =>{
    e.preventDefault();

    const{id,firstname,lastname,address} = this.state;

    const data = {
      id:id,
      firstname:firstname,
      lastname:lastname,
      address:address
      



    }

    console.log(data)

    axios.post("http://localhost:5000/profile/add",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
           id:"",
           name:"",
           firstname:"",
           lastname:"",
           address:"",

            
          }
        )
      }
    })
    
  }

   render(){
      return(
        <div>
          
        <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Room</h1>
                <form className="needs-validation" noValidate>

                  <div className="form-group" style={{marginBottom: '15px'}}>
                  <i className="fa fa-list-alt"></i>&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}> Id</label>
                    <input type="text "  
                    required
                    className="form-control"
                    name="id"
                    placeholder="Enter  id"
                    value={this.state.id}
                    onChange={this.handleInputChange}/>
                    </div>



                    <div className="form-group" style={{marginBottom: '15px'}}>
                    <i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}> First Name</label>
                    <input type="text "  
                     required
                    className="form-control"
                    name="firstname"
                    placeholder="Enter first name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}/>
                    </div>


                    <div className="form-group" style={{marginBottom: '15px'}}>
                    <i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}> Last Name</label>
                    <input type="text "  
                     required
                    className="form-control"
                    name="lastname"
                    placeholder="Enter last name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}/>
                    </div>

                    
                    <div className="form-group" style={{marginBottom: '15px'}}>
                    <i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}> Address</label>
                    <input type="text "  
                     required
                    className="form-control"
                    name="address"
                    placeholder="Enter last name"
                    value={this.state.address}
                    onChange={this.handleInputChange}/>
                    </div>


                    

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp;save
            </button>








                    
                </form>
          
          
          </div>
          </div>
          
      )
   }
  }
