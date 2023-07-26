<script>

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "AppHeader",
    components: {

    },
    data(){
        return {
            store
        }
    },
    methods:{
        callPopularMovie(){
            store.popularMovie = []
            axios.get(this.store.urlAPI + "movie/popular" + store.keyApi)
            .then(Response => {
                for (let i = 0; i < Response.data.results.length; i++) {
                    store.creditsCall(Response.data.results[i].id, store.popularMovie, "movie");

                }
                // console.log(store.popularMovie);
                store.movie = false
                store.searies = false,
                store.popular = true
            })
            .catch(error => {
                console.error(error);
            })
        },
        callPopularSeries(){
            store.popularSeries = []
            axios.get(this.store.urlAPI + "tv/popular" + store.keyApi)
            .then(Response => {
                // console.log(Response.data.results);
                for (let i = 0; i < Response.data.results.length; i++) {
                    store.creditsCall(Response.data.results[i].id, store.popularSeries, "tv");
                }
                console.log(store.popularSeries);
            })
            .catch(error => {
                console.error(error);
            })
        }

    },
    mounted(){
        this.callPopularMovie();
        this.callPopularSeries();
    }
}
</script>

<template>
    <div class="bg-black py-3">
        <div class="container justify-content-between bg-black d-flex">
            <!-- left -->
            <div class="d-flex align-items-center">
                <img @click=" this.callPopularMovie(),this.callPopularSeries()" class="img_fluid cursor" src="/public/logo.png" alt="">
                <ul class="m-0 text-white d-flex">
                    <li @click=" this.callPopularMovie(),this.callPopularSeries()" class="btn" :class="store.popular ? 'text-danger' : 'text-white'">
                        Home
                    </li>
                    <li @click="store.callSeriesTV()" :class="store.searies ? 'text-warning' : 'text-white'" class="btn">
                        Serie Tv
                    </li>
                    <li class="btn" @click="store.CallMovie()" :class="store.movie ? 'text-warning' : 'text-white'" >
                        Film
                    </li>
                    <li class="btn">
                        Novita e Popolari
                    </li>
                    <li class="btn ">
                        La mia lista
                    </li>
                </ul>
            </div>
            <!-- right -->
            <div class="d-flex">
                <div class="d-flex py-2" role="search">
                    <input @keyup.enter="store.specificSerched()" v-model="store.textUserInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button @click="store.specificSerched()" class="btn btn-outline-success">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- <div>
        <video width="320" height="240" controls>
            <source src="https://api.themoviedb.org/3/movie/605692/videos?language=en-US" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div> -->
</template>

<style lang="scss" scoped>
img {
    width: 10rem;
}

ul {
    list-style: none;
}

li {
    padding: 0.5rem;
    color: white;
    &:hover{
        color: red;
    }
}

.cursor{
    cursor: pointer;
}
</style>
