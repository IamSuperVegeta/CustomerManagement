import React, { useContext, useState, FormEvent } from "react";
import { observer } from "mobx-react-lite";
import CustomerStore from "../../app/stores/customerStore";
import { Form, Button, Divider, Segment } from "semantic-ui-react";
import { ICustomer } from "../../app/models/customer";
import { v4 as uuid } from "uuid";

interface IProps {
  customer: ICustomer;
  loadingIndicator:boolean;
}

export const CustomerForm: React.FC<IProps> = ({
  customer: intialFormState ,// adding the ':' means we are renaming it to intialFormState
  loadingIndicator
}) => {
  const customerStore = useContext(CustomerStore);
  const {
    createCustomer,
    editCustomer,
    cancelEditMode
  } = customerStore;
  const initializeForm = () => {
    if (intialFormState) {
      return intialFormState;
    } else {
      return {
        id: "",
        username: "",
        firstname: "",
        lastname: "",
        phoneNumber: "",
        dateOfBirth: ""
      };
    }
  };

  const [customer, setCustomer] = useState<ICustomer>(initializeForm);

  const handleSubmit = () => {
    if (customer.id.length === 0) {
      let newCustomer = {
        ...customer,
        id: uuid()
      };
      createCustomer(newCustomer);
    } else {
      editCustomer(customer);
    }
  };

  //so inputs are not read only view "Forms & Controlled Components in React" in word doc
  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget; // equivalent to "event.target.name " and "event.target.value"
    console.log("this place " + event.currentTarget.value);
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <Segment clearing>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleInputChange}
            name="username"
            label="Username"
            control="input"
            placeholder="Username"
            value={customer.username}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            onChange={handleInputChange}
            name="firstname"
            label="First name"
            control="input"
            placeholder="First name"
            value={customer.firstname}
          />
          <Form.Field
            onChange={handleInputChange}
            name="lastname"
            label="Last name"
            control="input"
            placeholder="Last name"
            value={customer.lastname}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleInputChange}
            name="dateOfBirth"
            label="Date of Birth"
            type="datetime-local"
            control="input"
            placeholder="Date of Birth"
            value={customer.dateOfBirth}
          />
          <Form.Field
            onChange={handleInputChange}
            name="phoneNumber"
            label="Phone Number"
            type="number"
            control="input"
            placeholder="Phone Number"
            value={customer.phoneNumber}
          />
        </Form.Group>

        <Button
          type="submit"
          className="ui primary button"
          loading={loadingIndicator}
          content="save"
        />
        <Button type="button" floated="right" onClick={cancelEditMode} content="cancel" />
        <Divider hidden />
      </Form>
    </Segment>
  );
};

export default observer(CustomerForm);
