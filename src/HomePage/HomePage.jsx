import React from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { userActions } from "../_actions";
import { Header } from "../_components/Header";

const StyledForm = styled.div`
  margin-top: 5em;
  padding: 2em;
`;

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
    return (
      <>
        <Header></Header>
        <StyledForm>
            <h2>All registerd users:</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Zip Code</th>
                <th>City</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.items &&
                users.items.map((user, i) => {
                  return (
                    <tr key={user.id}>
                      <td>{i}</td>
                      <td>{user.firstName}</td>
                      <td>{user.middleName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.birthDay}</td>
                      <td>{user.address}</td>
                      <td>{user.zip}</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={this.handleDeleteUser(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
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

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
