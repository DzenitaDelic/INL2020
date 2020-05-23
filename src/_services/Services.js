import axios from 'axios';
 
 class CustomersService {
 
 deleteCustomer(id) {
 axios.get('http://localhost:4000/customers/deleteCustomer/' + id)
 .then(() => {
 console.log('Customer Deleted !!!')
 })
 .catch((error) => {
 console.log(error)
 })
 }
 }
 
 export default CustomersService;