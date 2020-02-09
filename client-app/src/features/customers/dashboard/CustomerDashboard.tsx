import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import CustomerList from "./CustomerList";
import CustomerStore from "../../../app/stores/customerStore";
import {observer} from "mobx-react-lite";

export const CustomerDashboard: React.FC = () => {
  const customerStore = useContext(CustomerStore);

  return (
    <Grid>
      <Grid.Column width={10}>
        <CustomerList />
      </Grid.Column>
    </Grid>
  );
};

export default observer(CustomerDashboard);
