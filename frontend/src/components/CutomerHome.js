import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class TraderHome extends Component {
  constructor(props){
    super(props);

    this.state={
      item:[],
      cart:[]

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

  handleClick = (item) => {
    
    this.setState([...cart, item]);
  };

  render() {
   

    return (
      <div>
   
      <button ><Link to={"/profile/add"} style={{textDecoration:'none',color:'white'}}>Add profile</Link></button>
    
      <button ><Link to={"/promotion/add"} style={{textDecoration:'none',color:'white'}}>view cart</Link></button>
      <button ><Link to={"/promotion"} style={{textDecoration:'none',color:'white'}}>View wishlist</Link></button>
      
      
  <table className="table">

<thead>
<tr>
     <th scope ="col">#</th>
     <th scope ="col">Id</th>
     <th scope ="col">Title</th>
     <th scope ="col">Price</th>
     
</tr>
</thead>
<tbody>
 {this.state.item.map((item,index)=>(
  <tr key ={index}>
     <th scope="row">{index+1} </th>
     <td>{item.id}</td>
     <td>{item.name}</td>

     <td>                           
         <button onClick={() => handleClick(item)}>Add to Cart</button>
        <a className="btn btn-danger" href="/" onClick={()=>this.onDelete(item.id)}>
        <i className="far fa-trash-alt"></i>&nbsp;Add to wishlist
          </a>&nbsp;
          <a className="btn btn-danger" href="/" onClick={()=>this.onDelete(item.id)}>
        <i className="far fa-trash-alt"></i>&nbsp;Purchace
          </a>&nbsp;
          </td>
  </tr>



 ))}
</tbody> 
</table>


    </div>  
    )
  }
}