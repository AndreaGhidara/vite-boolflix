<script>

import axios from 'axios';
import { store } from '../data/store';

export default {
    name: "Jumbotron",
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
    <div class="w-100">
        <img class="img-fluid" src="https://www.smartworld.it/wp-content/uploads/2021/07/the-witcher-seconda-stagione.jpg" alt="">
    </div>
        
</template>

<style lang="scss" scoped>

img{
    width: 100%;
    height:35rem;
    object-fit: cover;
    position: relative;
}
</style>
