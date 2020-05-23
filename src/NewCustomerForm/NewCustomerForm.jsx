import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { customerActions } from '../_actions';
import { Header } from '../_components/Header';

const StyledForm = styled.div`
margin-left: 40em;

`;


class NewCustomerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: {
                firstName: '',
                lastName: '',
                middleName: '',
                birthDay: '',
                username: '',
                address: '',
                zip: '',
                city: '',
                state: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { customer } = this.state;
        this.setState({
            customer: {
                ...customer,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { customer } = this.state;
        if (customer.firstName && customer.middleName && customer.lastName && customer.birthDay && customer.address && customer.zip && customer.city && customer.city && customer.username) {
            this.props.register(customer);
        }
    }

    render() {
        const { registering  } = this.props;
        const { customer, submitted } = this.state;
        return (
            <>
            <Header></Header>
            <StyledForm>
            <div className="col-md-6 col-md-offset-3">
                <h2>Add customer</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !customer.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={customer.firstName} onChange={this.handleChange} />
                        {submitted && !customer.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.middleName ? ' has-error' : '')}>
                        <label htmlFor="middleName">Middle Name</label>
                        <input type="text" className="form-control" name="middleName" value={customer.middleName} onChange={this.handleChange} />
                        {submitted && !customer.middleName &&
                            <div className="help-block">Middle Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={customer.lastName} onChange={this.handleChange} />
                        {submitted && !customer.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.birthDay ? ' has-error' : '')}>
                        <label htmlFor="birthDay">Date of birth</label>
                        <input type="text" className="form-control" name="birthDay" value={customer.birthDay} onChange={this.handleChange} />
                        {submitted && !customer.birthDay &&
                            <div className="help-block">Date of birth is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.address ? ' has-error' : '')}>
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" name="address" value={customer.address} onChange={this.handleChange} />
                        {submitted && !customer.address &&
                            <div className="help-block">Address is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.zip ? ' has-error' : '')}>
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" name="zip" value={customer.zip} onChange={this.handleChange} />
                        {submitted && !customer.zip &&
                            <div className="help-block">Zip is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.city ? ' has-error' : '')}>
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" name="city" value={customer.city} onChange={this.handleChange} />
                        {submitted && !customer.city &&
                            <div className="help-block">City is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.state ? ' has-error' : '')}>
                        <label htmlFor="state">State</label>
                        <input type="text" className="form-control" name="state" value={customer.state} onChange={this.handleChange} />
                        {submitted && !customer.state &&
                            <div className="help-block">State is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !customer.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={customer.username} onChange={this.handleChange} />
                        {submitted && !customer.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
  
                    <div className="form-group">
                        <button className="btn btn-primary">Add customer</button>
                        {registering}
                        <Link to="/home" className="btn btn-link">Cancel</Link>
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
    register: customerActions.register
}

const connectedNewCustomerForm = connect(mapState, actionCreators)(NewCustomerForm);
export { connectedNewCustomerForm as NewCustomerForm };