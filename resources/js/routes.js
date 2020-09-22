import Home from "./components/Home";
import CustomersMain from "./components/customers/Main.vue";
import CustomersList from "./components/customers/List.vue";
import NewCustomer from "./components/customers/New.vue";
import Customer from "./components/customers/View.vue"

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/customers',
        component: CustomersMain,
        children: [
            {
                path: '/',
                component: CustomersList
            },
            /*{
                path: 'new',
                component: NewCustomer
            },
            {
                path: 'id',
                component: Customer
            }*/
        ]
    }
];
