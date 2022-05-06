import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class TraderHome extends Component {
  constructor(props){
    super(props);

    this.state={
      promotion:[]
    };
  }
  componentDidMount(){
    this.retrievepromotion();
 
  }
  retrievepromotion(){
    axios.get("http://localhost:5000/promotion").then(res=>{
     
        
        this.setState({
          promotion:res.data          
        });
        
        //alert(JSON.stringify(res.data))
      
    });
  }

  render() {
   

    return (
      <div>
      <button ><Link to={"/item/add"} style={{textDecoration:'none',color:'white'}}>Add items</Link></button>
      <button ><Link to={"/profile/add"} style={{textDecoration:'none',color:'white'}}>Add profile</Link></button>
      <button ><Link to={"/profile"} style={{textDecoration:'none',color:'white'}}>View profile</Link></button>
      
      
  <table className="table">

<thead>
<tr>
     <th scope ="col">#</th>
     <th scope ="col">ItemId</th>
     <th scope ="col">Discount Price</th>
     <th scope ="col">Discount Rate</th>
     
</tr>
</thead>
<tbody>
 {this.state.promotion.map((promotion,index)=>(
  <tr key ={index}>
     <th scope="row">{index+1} </th>
     <td>{promotion.itemid}</td>
     <td>{promotion.dprice}</td>
     <td>{promotion.drate}</td>
  </tr>

 ))}
</tbody> 
</table>


    </div>  
    )
  }
}