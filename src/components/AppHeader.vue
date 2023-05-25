<script >


export default {
    name: "AppHeader",
    components: {

    }
}
</script>

<template>
    <div class="container justify-content-between bg-black d-flex">
        <!-- left -->
        <div class="d-flex align-items-center">
            <img class="img_fluid" src="/public/Logonetflix.png" alt="">
            <ul class="m-0 text-white d-flex">
                <li>Home</li>
                <li>Serie Tv</li>
                <li>Film</li>
                <li>Novita e Popolari</li>
                <li>La mia lista</li>
            </ul>
        </div>
        <!-- right -->
        <div class="d-flex">
            <form class="d-flex py-2" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
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
