import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

export default class EditItem extends Component {

    constructor(props) {
        super(props);
        this.state={
          id:"",
          name:"",
          price:"",

        }
    }

    handleInputChange = (e) => {

        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value

        })
    }


    onSubmit = (e) => {

        e.preventDefault();

        const {id,name} = this.state;

        const data = {
            id: id,
            name: name,
            price: price
        }

        console.log(data)

        axios.put('http://localhost:5000/item/', data).then((res) => {
            if (res.data.success) {
                alert(" Updated successfully")
                this.setState(
                    {
                        id: "",
                        name: "",

                    }
                )
            }
        })

    }

    componentDidMount() {

        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/item/${id}`).then((res)=>{
           
            this.setState({
                id:res.data.item.id,
                name:res.data.item.name,
                price:res.data.item.name,


            });
           
        
        });

    }
    render() {
      
       
        return (
            <div>
                <div>
                    <div className="col-md-8 mt-4 mx-auto" >
                        <h1 className="h3 mb-3 font-weight-normal">Edit Item</h1>
                        <form className="needs-validation">

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <i className="fa fa-list-alt"></i>&nbsp;&nbsp;
                                <label style={{ marginBottom: '5px' }}> Id</label>
                                <input type="text "
                                    className="form-control"
                                    name="id"
                                    placeholder="Enter room id"
                                    value={this.state.id}
                                    onChange={this.handleInputChange}
                                   
                                />
                            </div>



                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                                <label style={{ marginBottom: '5px' }}> Name</label>
                                <input type="text "
                                    className="form-control"

                                    name="name"
                                    placeholder="Enter room name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    required="required"
                                />
                            </div>

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <i className="fa fa-calendar-o"></i>&nbsp;&nbsp;
                                <label style={{ marginBottom: '5px' }}> Price</label>
                                <input type="text "
                                    className="form-control"

                                    name="price"
                                    placeholder="Enter room name"
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                    required="required"
                                />
                            </div>




                            <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                <i className="far fa-check-square"></i>
                                &nbsp;Update
                            </button>









                        </form>

                    </div>
                </div>
            </div>
        )
    }
}