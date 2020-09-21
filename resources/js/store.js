export default {
    state: {
        welcomeMessage: 'Welcome to my vue app'
    },
    mutations: {},
    getters: {
        welcome(state){
            return state.welcomeMessage;
        }
    },
    actions: {}
};
