<template>
    <div>
        <div class="film-outer-container" v-if="getBasketLength">
            <div class="film-container">
                <div id="done" draggable @dragstart="startDrag()" v-for="film in getBasket" :key="film.id" :value="film.id">
                    <img class="film-item" :src="film.image">
                </div>
            </div>
        </div>
        <div v-else>
            <h1>There is nothing in basket</h1>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "FilmPreview",
    computed: {
        ...mapGetters(['getBasket','getBasketLength']),
    },
    methods: {
        startDrag(){
            event.dataTransfer.setData("imagepath", event.target.src);
        }
    },
}
</script>
<style>
    .film-outer-container{
        overflow: auto;
        width: 80vw;
    }
    .film-container{
        display:flex;
        flex-direction: row;
        padding-bottom: 25px;
    }
    .film-item{
        margin: 0px 10px;
        border-radius: 25px;
    }
</style>