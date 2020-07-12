import axios from "axios";

export const initList = (context) => {
    console.log('데이터 호출');
    axios.get('https://gist.githubusercontent.com/lmjing/0370b7392cf67fb9e500ff2c231b819a/raw/dc58261437377981bed2663f81e0d0448125ce77/TodoItems.json')
        .then((response) => {
            if (response.status === 200) {
                context.commit('setList', response.data || []);
                console.log(response);
            } else {
                console.log('error');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};