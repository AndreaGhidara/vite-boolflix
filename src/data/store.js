import { reactive } from 'vue'

import axios from 'axios';


export const store = reactive({
    urlAPI: "https://api.themoviedb.org/3/",
    apiCallMovie: "https://api.themoviedb.org/3/search/movie",
    apiCallTvSeries: "https://api.themoviedb.org/3/search/tv",
    keyApi: "?api_key=987f78e31f79816590f58712bc4ff386",

    reserchApiWhitName: "&query=",
    textUserInput: "",

    imgApiPath: "https://image.tmdb.org/t/p/w500",

    popular: true,
    movie:false,
    searies:false,

    popularMovie:[],
    popularSeries:[],

    movieSearched: [],
    seriesSerched: [],


    callApi() {
        // let visti = []
        axios.get(this.apiCallMovie + this.keyApi + this.reserchApiWhitName + this.textUserInput)
            .then(response => {
                this.movieSearched = response.data.results
                console.log(this.movieSearched);
                this.popular = false;
                this.searies = false,
                this.movie = true;
            })
            .catch(error => {
                console.error(error);
            })


    },
    callSeriesTV() {
        axios.get(this.apiCallTvSeries + this.keyApi + this.reserchApiWhitName + this.textUserInput)
            .then(response => {
                // this.movieSearched = []
                this.seriesSerched = response.data.results
                console.log(this.seriesSerched);
                this.movie = false;
                this.popular = false;
                this.searies = true;
            })
            .catch(error => {
                console.error(error);
            })
    },

    specificSerched(){
        if (this.searies) {
            this.callSeriesTV()
        } else {
            this.callApi()
        }
        // this.textUserInput = ""; svuota campo input
    }
});