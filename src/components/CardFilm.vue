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
        cast: String,

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
    <!-- <div>
        <div class="card m-1" style="width: 18rem;">
            <img v-if="imgPath" :src="store.imgApiPath + imgPath" class="img-fluid">
            <img v-else src="https://m.media-amazon.com/images/I/617m4SsVIzL._AC_SX425_.jpg" class="img-fluid">
            <div class=" m-1 info" style="width: 18rem;">
                <div class="titleBox">
                    <h4>{{ title }} </h4>
                    <h5>
                        <strong>
                            Original Title:
                        </strong>
                        {{ originalTitle }}
                    </h5>
                </div>
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
                    <div v-if="language == 'hi'">
                        <country-flag country='in' size='medium'/>
                    </div>
                    <div v-if="language == 'cs'">
                        <country-flag country='cz' size='medium'/>
                    </div>
                    <div v-else>
                        <country-flag :country="language"  size='medium'/>
                    </div>
                </div>
                <p> Score:{{ Math.round(vote / 2) }}
                    <i v-for="index in Math.round(vote / 2)" :key="index" class="fa-solid fa-star"></i>
                    <i v-for="index in (5 - (Math.round(vote / 2)))" :key="index" class="fa-regular fa-star"></i>
                </p>
                <div class="bg-warning">
                    Cast : {{cast}}
                </div>
                <p class="description">
                    Genere: {{ description }}
                </p>
            </div>
        </div>
    </div> -->
    <div class="container">
        <div class="card p-2 bg-black">
            <div class="card-inner">
                <div class="card-front">
                    <img v-if="imgPath" :src="store.imgApiPath + imgPath" class="img-fluid rounded">
                    <img v-else src="https://m.media-amazon.com/images/I/617m4SsVIzL._AC_SX425_.jpg" class="img-fluid">
                </div>
                <div class="card-back rounded">
                    <div class="d-flex flex-column">
                        <div class="titleBox">
                            <h5 class="title">{{ title }} </h5>
                            <hr>
                            <h5 class="originalTitle">
                                <strong class="text-danger">
                                    Original Title
                                </strong>:
                                {{ originalTitle }}
                            </h5>
                        </div>
                        <div class="ps-1 d-flex">
                            <div v-if="language == 'en'">
                                <country-flag country='gb' size='medium' />
                            </div>
                            <div v-if="language == 'he'">
                                <country-flag country='je' size='medium' />
                            </div>
                            <div v-if="language == 'ja'">
                                <country-flag country='jp' size='medium' />
                            </div>
                            <div v-if="language == 'ko'">
                                <country-flag country='kp' size='medium' />
                            </div>
                            <div v-if="language == 'zh'">
                                <country-flag country='cl' size='medium' />
                            </div>
                            <div v-if="language == 'hi'">
                                <country-flag country='in' size='medium' />
                            </div>
                            <div v-if="language == 'cs'">
                                <country-flag country='cz' size='medium' />
                            </div>
                            <div v-else>
                                <country-flag :country="language" size='medium' />
                            </div>
                        </div>
                        <hr>
                        <p class="score"> Score:
                            <span class="text-warning">
                                <i v-for="index in Math.round(vote / 2)" :key="index" class="fa-solid fa-star "></i>
                                <i v-for="index in (5 - (Math.round(vote / 2)))" :key="index" class="fa-regular fa-star"></i>
                            </span>
                        </p>
                        <hr>
                        <div class="cast py-2">
                            Cast :
                            <span class="text-success">
                                {{ cast }}
                            </span>
                        </div>
                        <p class="description m-0">
                            {{ description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 300px;
    height: 450px;
    perspective: 1000px;
}

.card-inner {
    width: 300px;
    height: 450px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 300px;
    height: 450px;
    backface-visibility: hidden;
}

.card-front {
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
}

.card-back {
    background-color: rgb(211, 36, 36);
    padding: 1rem;
    color: white;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20%);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    .title {
        font-size: 18px;
        font-weight: 700;
    }

    .originalTitle {
        font-size: 16px;
        font-weight: 500;
    }

    .score {
        font-size: 18px;
    }

    .cast {
        font-size: 14px;
    }

    .description {
        font-size: 14px;
        max-height: 350px;
        white-space: wrap;
        overflow-y: scroll;
    }
}

// img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// }

// .card {
//     height: 30rem;
//     overflow: hidden;
//     background-color: rgba(196, 150, 24, 0.911);
//     &:hover {
//         cursor: pointer;

//         img {
//             display: none;
//         }
//         .info {
//             display: block;
//         }
//     }


//     .info {
//         display: none; 
//     }
// }

// .description {
//     height: 40%;
//     font-size: 15px;
// }
</style>
