import { reactive } from 'vue'

import axios from 'axios';


export const store = reactive({
    // callApi1:"https://api.themoviedb.org/3/movie/?",
    apiCallMovie: "https://api.themoviedb.org/3/search/movie?api_",
    apiCallTvSeries: "https://api.themoviedb.org/3/search/tv?api_",
    keyApi: "key=987f78e31f79816590f58712bc4ff386",

    reserchApiWhitName: "&query=",
    textUserInput: "fast and furious",

    imgApiPath: "https://image.tmdb.org/t/p/w500",

    movieSearched: [],





    //if backdrop_path == null cosa faccio?
    //if lang en == bandiera


    callApi() {
        let visti = []

        axios.get(this.apiCallMovie + this.keyApi + this.reserchApiWhitName + this.textUserInput)
            .then(response => {
                // this.movieSearched = response.data.results
                visti = response.data.results
                // console.log(this.imgApiPath + this.movieSearched[14].poster_path);
                // console.log(this.movieSearched[0].original_language);
                
                axios.get(this.apiCallTvSeries + this.keyApi + this.reserchApiWhitName + this.textUserInput)
                    .then(response => {
                        // this.movieSearched = []
                        console.log(response.data.results.length);
                        for (let i = 0; i < response.data.results.length; i++) {
                            const element = response.data.results[i];
                            visti.push(element)
                        }
                        
                        console.log("========SI=============");
                        this.movieSearched = visti
                        console.log(visti);
                    })
                    .catch(error => {
                        console.error(error);
                    })
            })
            .catch(error => {
                console.error(error);
            })


    },
    callSeriesTV() {
        axios.get(this.apiCallTvSeries + this.keyApi + this.reserchApiWhitName + this.textUserInput)
            .then(response => {
                // this.movieSearched = []
                this.movieSearched = response.data.results
                console.log("========SI=============");
            })
            .catch(error => {
                console.error(error);
            })
    },
});