import React, { Component } from "react";
import styled from 'styled-components';

// To use routing functionalities
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { casecustomerActions } from "../_actions";
import { Header } from "../_components/Header";
import { Table, Button } from "react-bootstrap";

const StyleTable = styled.div`
margin-top: 10em;
padding: 2em;
`;

class CustomerCase extends Component {
  componentDidMount() {
    this.props.getCasecustomers();
  }

  handleDeleteCasecustomer(id) {
    return (e) => this.props.deleteCasecustomer(id);
  }

  render() {
    const { casecustomers } = this.props;
    return (
      <>
        <Header></Header>
       <StyleTable>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Case Name</th>
              <th>Case Info</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {casecustomers.items &&
              casecustomers.items.map((casecustomer, i) => {
                return (
                  <tr key={casecustomer.id}>
                    <td>{i}</td>
                    <td>{casecustomer.username}</td>
                    <td>{casecustomer.caseName}</td>
                    <td>{casecustomer.caseInfo}</td>
                    <td>
                      <Button variant="danger" onClick={this.handleDeleteCasecustomer(casecustomer.id)}>
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
  const { casecustomers, authentication } = state;
  const { casecustomer } = authentication;
  return { casecustomer, casecustomers };
}

const actionCreators = {
  getCasecustomers: casecustomerActions.getAll,
  deleteCasecustomer: casecustomerActions.delete,
};

const connectedCustomerCase = connect(mapState, actionCreators)(CustomerCase);
export { connectedCustomerCase as CustomerCase };
