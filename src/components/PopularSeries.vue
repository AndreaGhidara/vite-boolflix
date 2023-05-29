<script>
import { store } from '../data/store';
import CardFilm from './CardFilm.vue';

export default {
    name: "PopularSeries",
    components: {
        CardFilm
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="bg-black p-4 ContentBox">
        <h1 class="text-white">Popular Series</h1>
        <div class="filmHome d-flex">
            <CardFilm v-for="film in store.popularSeries" :imgPath="film.poster_path" :title="film.name"
            :originalTitle="film.original_title" :cast="store.getCast(film.credits.cast)" :language="film.original_language" :vote="film.vote_average"
            :description="film.overview" />
        </div>
    </div>
    <!-- :cast="store.getCast(film.credits.cast)" -->
</template>

<style scoped>
.ContentBox{
    width: 100vw;
    overflow-x: auto;
}


</style>
