import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import CustomerList from "./CustomerList";
import CustomerStore from "../../../app/stores/customerStore";
import { observer } from "mobx-react-lite";
import { CustomerForm } from "../../form/CustomerForm";

export const CustomerDashboard: React.FC = () => {
  const customerStore = useContext(CustomerStore);
  const { editMode, selectedCustomer,loadingIndicator } = customerStore;

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <CustomerList />
        </Grid.Column>
        {editMode && (
          <Grid.Column>
            <CustomerForm
              key={(selectedCustomer && selectedCustomer.id) || 0}
              customer = {selectedCustomer!}
              loadingIndicator = {loadingIndicator}
            />
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default observer(CustomerDashboard);
