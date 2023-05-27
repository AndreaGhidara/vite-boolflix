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
            axios.get(this.store.urlAPI + "movie/popular" + store.keyApi + "&language=it_IT")
            .then(Response => {
                store.popularMovie = Response.data.results;
                console.log(store.popularMovie);
                store.movie = false
                store.searies = false,
                store.popular = true
            })
            .catch(error => {
                console.error(error);
            })
        },
        callPopularSeries(){
            axios.get(this.store.urlAPI + "tv/popular" + store.keyApi + "&language=it_IT")
            .then(Response => {
                store.popularSeries = Response.data.results;
                console.log(store.popularMovie);
            })
            .catch(error => {
                console.error(error);
            })
        }

    },
    mounted(){
        this.callPopularMovie(),
        this.callPopularSeries()
    }
}
</script>

<template>
    <div class="bg-black">
        <div class="container justify-content-between bg-black d-flex">
            <!-- left -->
            <div class="d-flex align-items-center">
                <img class="img_fluid" src="/public/Logonetflix.png" alt="">
                <ul class="m-0 text-white d-flex">
                    <li @click=" this.callPopularMovie(),this.callPopularSeries()" class="btn">
                        Home
                    </li>
                    <li @click="store.callSeriesTV()" :class="store.searies ? 'text-warning' : 'text-white'" class="btn">
                        Serie Tv
                    </li>
                    <li class="btn" @click="store.callApi()" :class="store.movie ? 'text-warning' : 'text-white'" >
                        Film
                    </li>
                    <li class="btn ">
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
</style>
