import React, { Component } from "react";
import styled from 'styled-components';

// To use routing functionalities
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { customerActions } from "../_actions";
import { Header } from "../_components/Header";
import { Table, Button } from "react-bootstrap";

const StyleTable = styled.div`
margin-top: 10em;
padding: 2em;
`;

class CustomerList extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

  handleDeleteCustomer(id) {
    return (e) => this.props.deleteCustomer(id);
  }

  render() {
    const { customers } = this.props;
    return (
      <>
        <Header></Header>
       <StyleTable>
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
              <th>Add Case</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.items &&
              customers.items.map((customer, i) => {
                return (
                  <tr key={customer.id}>
                    <td>{i}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.middleName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.address}</td>
                    <td>{customer.zip}</td>
                    <td>{customer.city}</td>
                    <td>{customer.state}</td>
                    <td>
                      <Link
                        to={"editcustomer/" + customer.id}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"addcase/"}
                        className="btn btn-primary"
                      >
                        Add Case
                      </Link>
                    </td>
                    <td>
                      <Button variant="danger" onClick={this.handleDeleteCustomer(customer.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        </StyleTable>
      </>
    );
  }
}
function mapState(state) {
  const { customers, authentication } = state;
  const { customer } = authentication;
  return { customer, customers };
}

const actionCreators = {
  getCustomers: customerActions.getAll,
  deleteCustomer: customerActions.delete,
};

const connectedCustomerList = connect(mapState, actionCreators)(CustomerList);
export { connectedCustomerList as CustomerList };
