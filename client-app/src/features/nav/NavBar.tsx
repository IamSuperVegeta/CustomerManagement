import React from 'react';
import { Input, Menu, Button } from 'semantic-ui-react'
import { observer } from "mobx-react-lite";

const NavBar: React.FC = () => {


    return (
        <Menu secondary>
          <Menu.Item
            name='home'
           // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
          //  active={activeItem === 'messages'}
           // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
           // active={activeItem === 'friends'}
           // onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
              
          <Menu.Item name='addcustomer'>
               <Button positive content='Add Customer'/>
            </Menu.Item>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
            //  active={activeItem === 'logout'}
             // onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )
};

export default observer(NavBar);
