<template>
    <div>
        <div class="film-detail-grid">
            <div @dragover.prevent @drop="dragFinish(0)" class="film-detail-grid-column">
                <h1>Drag a film here</h1>
                <img :src="leftImage">
            </div>
            <div @dragover.prevent @drop="dragFinish(1)" class="film-detail-grid-column">
                <h1>Drag a film here</h1>
                <img :src="rightImage">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FilmDetailGrid",
    data() {
        return {
            leftImage: '',
            rightImage: '',
        }
    },
    methods: {
        dragFinish(column){
            event.preventDefault();
            var data = event.dataTransfer.getData("imagepath");
            if(column){
                this.rightImage = data;
            }
            else if(!column){
                this.leftImage = data;
            }
            
        }
    },
}
</script>
<style>
    .film-detail-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        place-items: center;
    }
    .film-detail-grid-column{
        display:grid;
        place-items:center;
        border: 3px solid #2f1884;
        border-radius: 25px;
        width: 100%;
    }
</style>