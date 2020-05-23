import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { casecustomerActions } from "../_actions";
import { Header } from "../_components/Header";

const StyledForm = styled.div`
  margin-left: 40em;
`;

class AddCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      casecustomer: {
        username: "",
        caseName: "",
        caseInfo: "",
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { casecustomer } = this.state;
    this.setState({
      casecustomer: {
        ...casecustomer,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { casecustomer } = this.state;
    if (
      casecustomer.username &&
      casecustomer.caseName &&
      casecustomer.caseInfo
    ) {
      this.props.register(casecustomer);
    }
  }

  render() {
    const { registering } = this.props;
    const { casecustomer, submitted } = this.state;
    return (
      <>
        <Header></Header>
        <StyledForm>
          <div className="col-md-6 col-md-offset-3">
            <h2>Add Case</h2>
            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  "form-group" +
                  (submitted && !casecustomer.username ? " has-error" : "")
                }
              >
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={casecustomer.username}
                  onChange={this.handleChange}
                />
                {submitted && !casecustomer.username && (
                  <div className="help-block">User Name is required</div>
                )}
              </div>
              <div
                className={
                  "form-group" +
                  (submitted && !casecustomer.caseName ? " has-error" : "")
                }
              >
                <label htmlFor="caseName">Case Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="caseName"
                  value={casecustomer.caseName}
                  onChange={this.handleChange}
                />
                {submitted && !casecustomer.caseName && (
                  <div className="help-block">Case Name is required</div>
                )}
              </div>
              <div
                className={
                  "form-group" +
                  (submitted && !casecustomer.caseInfo ? " has-error" : "")
                }
              >
                <label htmlFor="caseInfo">Case Information</label>
                <input
                  type="text"
                  className="form-control"
                  name="caseInfo"
                  value={casecustomer.caseInfo}
                  onChange={this.handleChange}
                />
                {submitted && !casecustomer.caseInfo && (
                  <div className="help-block">Case information is required</div>
                )}
              </div>

              <div className="form-group">
                <button className="btn btn-primary">Add case</button>
                {registering}
                <Link to="/customercase" className="btn btn-link">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </StyledForm>
      </>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: casecustomerActions.register,
};

const connectedAddCase = connect(
  mapState,
  actionCreators
)(AddCase);
export { connectedAddCase as AddCase };
