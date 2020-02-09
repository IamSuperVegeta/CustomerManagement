
import { observable, action, configure, runInAction, computed } from 'mobx';
import { ICustomer } from '../models/customer';
import agent from '../api/agent';
import { createContext } from 'react';

configure({ enforceActions: 'always' });

class CustomerStore {
    @observable customerRegistry = new Map();
    @observable customers: ICustomer[] = [];

    @computed get customerByDate() {
        return Array.from(this.customerRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }


    
    @action loadCustomers = async () => {
      
        try {
            const Customers = await agent.Customers.list();
            console.log(Customers);
            runInAction('loading Customers', () => {
                Customers.forEach(customer => {
                    customer.dateOfBirth = customer.dateOfBirth.split(".")[0];
                 
                    console.log(customer.firstname);
                    this.customerRegistry.set(customer.id, customer);
            
                });
          
            })
        } catch (error) {
            runInAction('load Customers error', () => {
            })
            console.log(error);
        }
    };

}
export default createContext(new CustomerStore());