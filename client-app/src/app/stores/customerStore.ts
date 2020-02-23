
import { observable, action, configure, runInAction, computed } from 'mobx';
import { ICustomer } from '../models/customer';
import agent from '../api/agent';
import { createContext } from 'react';

configure({ enforceActions: 'always' });

class CustomerStore {
    @observable customerRegistry = new Map();
    @observable customers: ICustomer[] = [];
    @observable selectedCustomer: ICustomer | undefined;
    @observable pageLoadingIndicator = false;
    @observable loadingIndicator = false;
    @observable editMode = false;


    @computed get customerByDate() {
        return Array.from(this.customerRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }



    @action loadCustomers = async () => {

        this.pageLoadingIndicator = true;
        try {
            const Customers = await agent.Customers.list();
            runInAction('loading Customers', () => {
                Customers.forEach(customer => {
                    customer.dateOfBirth = customer.dateOfBirth.split(".")[0];
                    this.customerRegistry.set(customer.id, customer);

                    this.pageLoadingIndicator = false;

                });

            })
        } catch (error) {
            runInAction('load Customers error', () => {
                this.pageLoadingIndicator = false;
            })
            console.log(error);
        }
    };



    @action createCustomer = async (activity: ICustomer) => {

        this.loadingIndicator = true;

        try {
            await agent.Customers.create(activity);
            runInAction('create activity', () => {
                this.customerRegistry.set(activity.id, activity);
                this.editMode = false;
                this.loadingIndicator = false;
            })
        }
        catch (error) {
            runInAction('create customer error', () => {
                this.loadingIndicator = false;
            })
            console.log(error);
        }

    };

    @action editCustomer = async (customer: ICustomer) => {
        this.loadingIndicator = true;

        try {
            await agent.Customers.update(customer);
            runInAction('edit customer', () => {
                this.customerRegistry.set(customer.id, customer);
                this.selectedCustomer = customer;
                this.editMode = false;
                this.loadingIndicator = false;
            })
        }
        catch (error) {
            runInAction('editing customer error', () => {
                this.loadingIndicator = false;
            })
            console.log(error);
        }

    }

    @action deleteCustomer = async (id: string) => {
        this.loadingIndicator = true;

        try {
            await agent.Customers.delete(id);
            runInAction('delete customer', () => {
                this.customerRegistry.delete(id);
                this.loadingIndicator = false;
            })

        }
        catch (error) {
            runInAction('delete customer error', () => {
                this.loadingIndicator = false;
            })
            console.log(error);
        }



    }

    @action openEditForm = () => {
        this.editMode = true;
    }

    @action cancelEditMode = () => {
        this.editMode = false;
    }

    @action loadCustomer = (id: string) => {
        this.selectedCustomer = this.customerRegistry.get(id);

    }

}
export default createContext(new CustomerStore());