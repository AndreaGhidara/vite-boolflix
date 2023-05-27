<script >
import { store } from '../data/store';
import CardFilm from './CardFilm.vue';

export default {
    name: "SeriesHome",
    components: {
        CardFilm
    },
    data() {
        return {
            store
        }
    },
    mounted(){
        store.callSeriesTV()
    }
}
</script>

<template>
    <div class="bg-black p-4 test">
        <h1 class="text-white">Searched-Series : {{ store.textUserInput }}</h1>
        <div class="filmHome d-flex">
            <CardFilm v-for="film in store.seriesSerched" :imgPath="film.poster_path" :title="film.name"
                :language="film.original_language" :vote="film.vote_average"
                :description="film.overview" />
        </div>
    </div>
</template>

<style scoped>
.test{
    width: 100vw;
    overflow-x: auto;
}

</style>
