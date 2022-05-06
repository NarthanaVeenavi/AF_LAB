import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      item:[]
    };
  }
  componentDidMount(){
    this.retrieveitems();
 
  }
  retrieveitems(){
    axios.get("http://localhost:5000/item").then(res=>{
     
        
        this.setState({
          item:res.data          
        });
        
        //alert(JSON.stringify(res.data))
      
    });
  }
  render() {
    return (
      <div id="home">
        <div id='button-group'>
          <button className='button' id='button1'><Link to={"/trader/home"} style={{textDecoration:'none',color:'black'}}>Trader Home</Link></button>
          <button className='button' id='button2'><Link to={"/customer/home"} style={{textDecoration:'none',color:'black'}}>Customer Home</Link></button>
        </div>
      </div>  
    )
  }
}