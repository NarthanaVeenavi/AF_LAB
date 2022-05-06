import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import axios from 'axios'







export default class AddPromotion extends Component {

  constructor(props){
    super(props);
    this.state={
      itemid:"",
      dprice:"",
      drate:"",
     

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

    const{itemid,dprice,drate} = this.state;

    const data = {
   
        itemid:itemid,
        dprice: dprice,
        drate: drate,


    }

    console.log(data)

    axios.post("http://localhost:5000/promotion/add",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            itemid:"",
            dprice:"",
            drate:"",

            
          }
        )
      }
    })
    
  }

   render(){
      return(
        <div>
          
        <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new Promotion</h1>
                <form className="needs-validation" noValidate>

                  <div className="form-group" style={{marginBottom: '15px'}}>
                  <i className="fa fa-list-alt"></i>&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}> Item Id</label>
                    <input type="text "  
                    required
                    className="form-control"
                    name="itemid"
                    placeholder="Enter  id"
                    value={this.state.itemid}
                    onChange={this.handleInputChange}/>
                    </div>



                    <div className="form-group" style={{marginBottom: '15px'}}>
                    <i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}>Discount Price </label>
                    <input type="text "  
                     required
                    className="form-control"
                    name="dprice"
                    placeholder="Enter first name"
                    value={this.state.dprice}
                    onChange={this.handleInputChange}/>
                    </div>


                    <div className="form-group" style={{marginBottom: '15px'}}>
                    <i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                    <label style={{marginBottom:'5px'}}> Discount Rate</label>
                    <input type="text "  
                     required
                    className="form-control"
                    name="drate"
                    placeholder="Enter last name"
                    value={this.state.drate}
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
