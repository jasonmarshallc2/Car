import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader';
import MopedTable from '../components/MopedTable';
import { mopedGET } from '../Utils';

export default class Customers extends Component {

  customerTableConfig = {
    tableHeader: true,
    rowClick: (customer) => this.customerClick(customer),
    text: {
      noResults: "No Customers Found"
    },
    pager: true,
    pageRows: 10,
    searchable: true,
    columns: [
      { key: 'idCustomers', title: 'ID' },
      { key: 'nameFirst', title: 'First Name' },
      { key: 'nameLast', title: 'Last Name' },
      { key: 'address', title: 'Address' },
      { key: 'city', title: 'City' },
      { key: 'state', title: 'State' },
      { key: 'zip', title: 'Zip Code' }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getCustomers();
  }

  getCustomers() {
    this.setState({ isLoading: true });
    mopedGET('/customers')
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  addCustomerForm() {
    this.props.history.push(`/customers/add`)
  }

  customerClick(customer) {
    this.props.history.push(`/customers/${customer.idCustomers}`)
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <div className={isLoading ? 'loading' : ''}>
        <SectionHeader title="Customers" button={{ action: () => this.addCustomerForm(), title: "Add Customer" }} />
        {data &&
          <MopedTable data={data} config={this.customerTableConfig} />
        }
      </div>
    );
  }

}
