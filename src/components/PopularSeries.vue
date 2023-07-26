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
    <div class="containerCustom bg-black p-4">
        <h1 class="text-white">Popular Series</h1>
        <div class="filmHome d-flex py-5 ContentBox">
            <template v-for="film in store.popularSeries" :key="film">
                <CardFilm :imgPath="film.poster_path" :title="film.name"
                :originalTitle="film.original_title" :cast="store.getCast(film.credits.cast)" :language="film.original_language" :vote="film.vote_average"
                :description="film.overview" />
            </template>
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
