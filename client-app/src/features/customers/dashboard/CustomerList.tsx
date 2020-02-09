import React, { useContext } from "react";
import { Card, Image, Icon, Segment } from "semantic-ui-react";
import CustomerStore from "../../../app/stores/customerStore";
import {observer} from "mobx-react-lite";


export const CustomerList: React.FC = () => {
  const customerStore = useContext(CustomerStore);
  const { customerByDate , customers} = customerStore;
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
            <Card.Header>{customer.firstname}</Card.Header>
            <Card.Meta>
              <span className="date">DOB in {customer.dateOfBirth}</span>
            </Card.Meta>
            <Card.Description>
            {customer.firstname}  {customer.lastname} is a musician living in Nashville. 
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      ))}
    </Segment>
  );
};

export default observer(CustomerList);
