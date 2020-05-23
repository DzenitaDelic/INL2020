import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import { userActions } from "../_actions";
import { Header } from "../_components/Header";

const StyledForm = styled.div`
  margin-top: 3em;
  padding: 2em;
`;

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Header></Header>
        <StyledForm>
          <div className="col-md-6 col-md-offset-3">
            <h1>Hi {user.firstName}!</h1>
            <p>This is your information:</p>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>E-mail</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Zip Code</th>
                <th>City</th>
                <th>State</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td>{user.birthDay}</td>
                <td>{user.address}</td>
                <td>{user.zip}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>
                  <Link to={"edit/" + user.id} className="btn btn-primary">
                    Edit
                  </Link>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={this.handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </StyledForm>
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
  deleteUser: userActions.delete,
};

const connectedProfilePage = connect(mapState, actionCreators)(ProfilePage);
export { connectedProfilePage as ProfilePage };
