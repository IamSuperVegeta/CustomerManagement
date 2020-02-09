import React, { Fragment, useContext, useEffect } from 'react';
import NavBar from "../../features/nav/NavBar";
import CustomerDashboard from '../../features/customers/dashboard/CustomerDashboard';
import CustomerStore from "../stores/customerStore";
import {observer} from "mobx-react-lite";

const App = () => {

const customerStore = useContext(CustomerStore)

useEffect(() => {
  customerStore.loadCustomers();
 }, [customerStore]); // the empty array means our useEffect runs only once (else it runs everytime it is rendered ), there for forcing it to be a componentDidMount


  return (
    <Fragment>
      <NavBar/>
      <CustomerDashboard/>
    </Fragment>
  );
}

export default observer(App);
