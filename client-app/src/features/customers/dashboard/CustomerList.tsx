import React, { useContext } from "react";
import { Card, Image, Icon, Segment } from "semantic-ui-react";
import CustomerStore from "../../../app/stores/customerStore";
import { observer } from "mobx-react-lite";
import Moment from "moment";

export const CustomerList: React.FC = () => {
  const customerStore = useContext(CustomerStore);
  const { customerByDate, openEditForm, loadCustomer,deleteCustomer, loadingIndicator } = customerStore;
  return (
    <Segment clearing>
      {customerByDate.map(customer => (
        <Card key={customer.id}>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>
              {customer.firstname} {customer.lastname}
            </Card.Header>
            <Card.Meta>
              <span className="date">Username: {customer.username} </span>
            </Card.Meta>
            <Card.Meta>
              <span className="date">
                DOB: {Moment(customer.dateOfBirth).format("MMMM Do YYYY")}{" "}
              </span>
            </Card.Meta>
            <Card.Description>
              {customer.firstname} is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
       
            <a onClick={() => { openEditForm(); loadCustomer(customer.id); }}>
              <Icon name="edit" /></a>
              <a onClick={() => {deleteCustomer(customer.id); }}>
              <Icon name="user delete" loading={loadingIndicator}  /></a>

          </Card.Content>
        </Card>
      ))}
    </Segment>
  );
};

export default observer(CustomerList);
