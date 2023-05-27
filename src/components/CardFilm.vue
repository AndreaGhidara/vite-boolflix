<script >
import { store } from '../data/store';
import CountryFlag from 'vue-country-flag-next'


export default {
    name: "CardFilm",
    props: {
        imgPath: String,
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        description: String,
    },
    components: {
        CountryFlag
    },
    data() {
        return {
            store,
            
        }
    },
    methods: {

    }
}
</script>

<template>
    <div>
        <div class="card m-1" style="width: 18rem;">
            <!-- <img :src="imgPath" class=" img-fluid" alt="..."> -->
            <img v-if="imgPath" :src="store.imgApiPath + imgPath" class="img-fluid">
            <img v-else src="https://m.media-amazon.com/images/I/617m4SsVIzL._AC_SX425_.jpg" class="img-fluid">
            <div class=" m-1 info" style="width: 18rem;">
                <h4>-{{ title }} </h4>
                <h4>
                    Titolo originale: {{ originalTitle }}
                </h4>
                <div>
                    <div v-if="language == 'en'">
                        <country-flag country='gb' size='medium'/>
                    </div>
                    <div v-if="language == 'he'">
                        <country-flag country='je' size='medium'/>
                    </div>
                    <div v-if="language == 'ja'">
                        <country-flag country='jp' size='medium'/>
                    </div>
                    <div v-if="language == 'ko'">
                        <country-flag country='kp' size='medium'/>
                    </div>
                    <div v-if="language == 'zh'">
                        <country-flag country='cl' size='medium'/>
                    </div>
                    <div v-else>
                        <country-flag :country="language"  size='medium'/>
                    </div>
                </div>
                <p> Voto:{{ Math.round(vote / 2) }}
                    <i v-for="index in Math.round(vote / 2)" :key="index" class="fa-solid fa-star"></i>
                </p>
                <p class="description">
                    Overview: {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card {
    height: 30rem;
    overflow: hidden;
    background-color: rgba(196, 150, 24, 0.911);
    &:hover {
        cursor: pointer;

        img {
            display: none;
        }
        .info {
            display: block;
        }
    }

    .info {
        display: none; 
    }
}

.description {
    height: 40%;
    font-size: 15px;
}
</style>
