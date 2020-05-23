import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => (
<Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link><Link to="/" className="btn btn-link">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"><Link to="/profile" className="btn btn-link">Profile Page</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><Link to="/customerlist" className="btn btn-link">Customers Page</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3"><Link to="/newcustomer" className="btn btn-link">Add customer</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3"><Link to="/customercase" className="btn btn-link">Customer Cases</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3"><Link to="/login" className="btn btn-link">LogOut</Link>
    </Nav.Link>
  </Nav.Item>
</Nav>
);

