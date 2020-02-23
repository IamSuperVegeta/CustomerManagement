import React, { useContext } from "react";
import { Input, Menu, Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import CustomerStore from "../../app/stores/customerStore";

export const NavBar: React.FC = () => {
  const customerStore = useContext(CustomerStore);
  const { openEditForm, loadCustomer } = customerStore;

  return (
    <Menu secondary>
      <Menu.Item
        name="home"
        // active={activeItem === 'home'}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="messages"
        //  active={activeItem === 'messages'}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="friends"
        // active={activeItem === 'friends'}
        // onClick={this.handleItemClick}
      />
      <Menu.Menu position="right">
        <Menu.Item name="addcustomer">
          <Button
            positive
            content="Add Customer"
            onClick={() => {
              openEditForm();
              loadCustomer('');
            }}
          />
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          name="logout"
          //  active={activeItem === 'logout'}
          // onClick={this.handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default observer(NavBar);
