import React, { Component } from 'react';
import { connect } from 'react-redux';
 import axios from 'axios';
import styled from 'styled-components';
 import { Header } from '../_components/Header';

 const StyledForm = styled.div`
 margin-top: 5em;
 margin-left: 50em;
 `;
 
 class EditCustomer extends Component {
 constructor(props) {
 super(props);
 this.state = {
 firstName: '',
 middleName: '',
 lastName: '',
 birthDay: '',
 address: '',
 zip: '',
 city:'',
 state:'',
 username: '',
 }
 }
 
 componentDidMount () {
 this.getCustomerById();
 }
 
 // To get employee based on ID
 getCustomerById() {
 axios.get('http://localhost:4000/customers/' + this.props.match.params.id)
 .then((response) => {
 this.setState({
 firstName: response.data.firstName,
 middleName: response.data.middleName,
 lastName: response.data.lastName,
birthDay: response.data.birthDay,
 address: response.data.address,
 zip: response.data.zip,
 city: response.data.city,
 state: response.data.state

 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 handleChange (e) {
 this.setState({ [event.target.name]: event.target.value });
 }
 
 // To update the record on submit
 handleSubmit (e) {
 e.preventDefault();
 const { firstName, middleName, lastName, birthDay, address, zip, city, state } = this.state;
 axios.post('http://localhost:4000/node-mongo-registration-login-api/customers/' + this.props.match.params.id, {
 firstName: firstName,
 middleName: middleName,
 lastName: lastName,
 birthDay: birthDay,
 address: address,
zip:zip,
city: city,
state: state,
 })
 .then((response) => {
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
 
 }
 
 render() {
 return (
     <>
    <Header></Header>
    <StyledForm>
 <div className="col-md-6 col-md-3" >
 <h2>Edit customer</h2>
 <form  onSubmit={this.handleSubmit}>
 <label>
 First Name
 <input
 name="firstName"
 type="text"
 value={this.state.firstName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Middle Name
 <input
 name="middleName"
 type="text"
 value={this.state.middleName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Last Name
 <input
 name="lastName"
 type="text"
 value={this.state.lastName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
Date of birth
 <input
 name="birthDay"
 type="text"
 value={this.state.birthDay}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Address
 <input
 name="address"
 type="text"
 value={this.state.address}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
City
 <input
 name="city"
 type="text"
 value={this.state.city}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
Zip Code
 <input
 name="zip"
 type="text"
 value={this.state.zip}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 City
 <input
 name="city"
 type="text"
 value={this.state.city}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
State
 <input
 name="state"
 type="text"
 value={this.state.state}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <input
 type="submit"
 value="submit"
 className="btn btn-primary"
 />
 </form>
 </div>
 </StyledForm>
 </>
 );
 }
 }
 
 
const connectedEditCustomer = connect()(EditCustomer);
export { connectedEditCustomer as EditCustomer };