import React, { Component } from "react";
import { connect } from "react-redux";
import config from "config";

import { userActions } from "../_actions";
import { Header } from "../_components/Header";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      birthDay: "",
      address: "",
      zip: "",
      city: "",
      state: "",
      email: "",
      username: "",
      password: "",
    };
  }
  componentDidMount() {
    this.props.getUsers();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // To update the record on submit
  handleSubmit(event) {
    event.preventDefault();

    const {
      firstName,
      middleName,
      lastName,
      birthDay,
      address,
      zip,
      city,
      state,
      email,
      username,
      password,
    } = this.state;
    fetch(`${config.apiUrl}/users/` + this.props.match.params.id, {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      birthDay: birthDay,
      address: address,
      zip: zip,
      city: city,
      state: state,
      email: email,
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Header></Header>
        
        <div className="container">
        <h2>Edit information</h2>
          <form style={customStyle} onSubmit={this.handleSubmit}>
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
              Zip
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
            <label>
              Username
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                className="form-control"
              />
            </label>
            <br />
            <label>
             E-mail
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control"
              />
            </label>
            <br />
            <label>
              Password
              <input
                name="password"
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
              />
            </label>
            <br />

            <input type="submit" value="submit" className="btn btn-primary" />
          </form>
        </div>
      </>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}
const actionCreators = {
  getUsers: userActions.getAll,
};

const connectedEditProfile = connect(mapState, actionCreators)(EditProfile);
export { connectedEditProfile as EditProfile };
