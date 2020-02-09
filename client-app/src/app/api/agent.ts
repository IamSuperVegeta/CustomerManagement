import axios, { AxiosResponse } from 'axios';
import { ICustomer } from '../models/customer';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

//Below is called currying (funtion then function)
const sleep = (ms: number) => (response: AxiosResponse) =>
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

    const requests = {
        get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody).catch(e=>console.log(e)),
        post: (url: string, body: object) => axios.post(url, body).then(sleep(1000)).then(responseBody),
        put: (url: string, body: object) => axios.put(url, body).then(sleep(1000)).then(responseBody),
        del: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody)
    }
    
    const Customers = {
        list: (): Promise<ICustomer[]> => requests.get('/customer'),
        details: (id: string) => requests.get(`$/customer/${id}`),
        create: (activity: ICustomer) => requests.post('/customer', activity),
        update: (activity: ICustomer) => requests.put(`/customer/${activity.id}`, activity),
        delete: (id: string) => requests.del(`/customer/${id}`),
    }

    
export default {
    Customers
}