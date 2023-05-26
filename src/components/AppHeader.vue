<script >
import { store } from '../data/store';

export default {
    name: "AppHeader",
    components: {

    },
    data(){
        return {
            store
        }
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
                    <li class="btn text-white">Home</li>
                    <li @click="store.callSeriesTV()" class="btn text-white">Serie Tv</li>
                    <li class="btn text-white">Film</li>
                    <li class="btn text-white">Novita e Popolari</li>
                    <li class="btn text-white">La mia lista</li>
                </ul>
            </div>
            <!-- right -->
            <div class="d-flex">
                <div class="d-flex py-2" role="search">
                    <input @keyup.enter="store.callApi()" v-model="store.textUserInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button @click="store.callApi()" class="btn btn-outline-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 10rem;
}

ul {
    list-style: none;
}

li {
    padding: 0.5rem;
}
</style>
