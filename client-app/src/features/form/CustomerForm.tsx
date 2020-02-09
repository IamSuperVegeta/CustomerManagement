import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import CustomerStore from "../../app/stores/customerStore";
import { Form, Button, Divider, Segment } from "semantic-ui-react";

export const CustomerForm: React.FC = ()=>{
  const customerStore = useContext(CustomerStore);
  const{customer} = customerStore;

  return (
    <Segment clearing>
      <Form size="large" key={customer?.firstname}>
        <Form.Group widths="equal">
          <Form.Field
            label="First name"
            control="input"
            placeholder="First name"
            value={customer?.firstname}
          />
          <Form.Field
            label="Last name"
            control="input"
            placeholder="Last name"
            value={customer?.lastname}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            label="Date of Birth"
            type="datetime-local"
            control="input"
            placeholder="Date of Birth"
          />
          <Form.Field
            label="Phone Number"
            type="number"
            control="input"
            placeholder="Phone Number"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Divider hidden />
      </Form>
    </Segment>
  );
};

export default observer(CustomerForm);
