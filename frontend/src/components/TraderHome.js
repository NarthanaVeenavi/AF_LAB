import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class TraderHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: []
    };
  }
  componentDidMount() {
    this.retrieveitems();

  }
  retrieveitems() {
    axios.get("http://localhost:5000/item").then(res => {


      this.setState({
        item: res.data
      });

      //alert(JSON.stringify(res.data))

    });
  }

  render() {
    return (
      <div>
        <button ><Link to={"/item/add"} style={{ textDecoration: 'none', color: 'white' }}>Add items</Link></button>
        <button ><Link to={"/profile/add"} style={{ textDecoration: 'none', color: 'white' }}>Add profile</Link></button>
        <button ><Link to={"/profile"} style={{ textDecoration: 'none', color: 'white' }}>View profile</Link></button>
        <button ><Link to={"/promotion/add"} style={{ textDecoration: 'none', color: 'white' }}>Add promotion</Link></button>
        <button ><Link to={"/promotion"} style={{ textDecoration: 'none', color: 'white' }}>View promotion</Link></button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {this.state.item.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1} </th>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <a className="btn btn-warning" href={`/${item.id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>&nbsp;
                  <a className="btn btn-danger" href="/" onClick={() => this.onDelete(item.id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
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