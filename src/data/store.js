import { reactive } from 'vue'

import axios from 'axios';

export const store = reactive({
    callApi1:"https://api.themoviedb.org/3/movie/?",
    callApi2:"https://api.themoviedb.org/3/search/movie?api_",

    keyApi:"key=987f78e31f79816590f58712bc4ff386",

    userText:"&query=Jack+Reacher",
    

    
    callApi() {
        axios.get(this.callApi2 + this.keyApi + this.userText)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error(error);
        })
    },
});