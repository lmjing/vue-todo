import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch() {
        let arr = [];
        if (localStorage.length > 0) {
            for (let i=0; i<localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key !== "loglevel:webpack-dev-server") {
                    let value = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    arr.push(value);
                }
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
    }
});