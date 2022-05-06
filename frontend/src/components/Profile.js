import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class profile extends Component {
  constructor(props){
    super(props);

    this.state={
      profile:[]
    };
  }
  componentDidMount(){
    this.retrieveprofile();
 
  }
  retrieveprofile(){
    axios.get("http://localhost:5000/profile").then(res=>{
     
        
        this.setState({
          profile:res.data          
        });
        
        //alert(JSON.stringify(res.data))
      
    });
  }

  render() {
   

    return (
      <div>
      <button ><Link to={"/item/add"} style={{textDecoration:'none',color:'white'}}>Add items</Link></button>
      <button ><Link to={"/profile/add"} style={{textDecoration:'none',color:'white'}}>Add profile</Link></button>
      
  <table className="table">

<thead>
<tr>
     <th scope ="col">#</th>
     <th scope ="col">Id</th>
     <th scope ="col">firstname</th>
     <th scope ="col">lastname</th>
     <th scope ="col">address</th>
     
</tr>
</thead>
<tbody>
 {this.state.profile.map((profile,index)=>(
  <tr key ={index}>
     <th scope="row">{index+1} </th>
     <td>{profile.id}</td>
     <td>{profile.firstname}</td>
     <td>{profile.laststname}</td>
     <td>{profile.address}</td>
  </tr>

 ))}
</tbody> 
</table>


    </div>  
    )
  }
}