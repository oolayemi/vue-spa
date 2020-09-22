export default {
    state: {
        welcomeMessage: 'Welcome to my vue app',
        customers: []
    },
    mutations: {
        updateCustomers(state, payload){
            state.customers = payload;
        }
    },
    getters: {
        welcome(state){
            return state.welcomeMessage;
        },
        customers(start){
            return start.customers
        }
    },
    actions: {
        getCustomers(context){
            axios.get('/api/customers').then((response) => {
                context.commit('updateCustomers', response.data.customers);
            })
        }
    }
};
