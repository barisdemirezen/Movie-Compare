<template>
    <div>
        <div class="film-detail-grid">
            <div draggable="false" @dragover.prevent @drop="dragFinish(0)" class="film-detail-grid-column">
                <img class="film-detail-grid-image" draggable="false" v-if="getLeftImage.length != 0" :src="'https://image.tmdb.org/t/p/w500' + getLeftImage.poster_path">
                <div class="average-points">{{getLeftImage.vote_average}}</div>
                <h1 v-if="getLeftImage.length == 0">Drop some poster to get details</h1>
                <h1 v-on:click.prevent.self >{{getLeftImage.original_title}}</h1>
                <div class="genre-container">
                    <div class="genre-badge" v-for="genres in getLeftImage.genres" :key="genres.id">{{genres.name}}</div>
                </div>
            </div>

            <div draggable="false" @dragover.prevent @drop="dragFinish(1)" class="film-detail-grid-column">                
                <img draggable="false" v-if="getRightImage.length != 0" :src="'https://image.tmdb.org/t/p/w500' + getRightImage.poster_path">
                <div class="average-points">{{getRightImage.vote_average}}</div>
                <h1 v-if="getRightImage.length == 0">Drop some poster to get details</h1>
                <h1>{{getRightImage.original_title}}</h1>    
                <div class="genre-container">
                    <div class="genre-badge" v-for="genres in getRightImage.genres" :key="genres.id">{{genres.name}}</div>
                </div>            
            </div>
        </div>

        <div class="details">
        <h1 class="details-heading">Details</h1>
            <div class="details-row" v-for="info in holder" :key="info.name">
                <div class="detail-name-column">{{info.name}}</div>
                <div class="detail-column">{{info.left}}</div>
                <div class="detail-column">{{info.right}}</div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
    name: "FilmDetailGrid",
    data() {
        return {
            holder : [],
            infoNames : [
                "Overview",
                "Release Date",
                "Length (in min.)",
                "Languages",
                "Budget",
                "Revenue",
                "Film Site",
                "Production companies",
                "Production Countries",
                "IMDB"
            ],
        }
    },
    mounted(){
        this.holder.push(
            {name: 'Overview', left: this.leftImage.overview, right: this.leftImage.overview},
            {name: 'Release Date', left: this.leftImage.release_date, right: this.leftImage.release_date},
            );
    },
    computed: {
        ...mapGetters(['getLeftImage','getRightImage']),
        ...mapState(['leftImage','rightImage'])
    },
    methods: {
        ...mapActions(["changeCompareImage"]),
        dragFinish(column){
            event.preventDefault();
            var id = event.dataTransfer.getData("id");
            if(id !== 'null'){
                if(column){                    
                    this.right = id;
                    this.changeCompareImage({id : id, option: "right"});
                }
                else if(!column){
                    this.left = id;
                    this.changeCompareImage({id : id, option: "left"});
                }
            }
        }
    },
}
</script>
<style>
.details-row {
    display: grid;
    grid-template-columns: 20% 40% 40%;
    gap: 5px;
}
.details-row div{
    border: 3px solid red;
    width: 100%;
}
.details-heading{
    text-align: center;
}
.details{
    margin-top: 10vh;
    margin-bottom: 10vh;
}
    .film-detail-grid{
        display: grid;
        justify-content: center;
        grid-template-columns: 30vw 30vw;
        grid-column-gap: 100px;
        place-items: center;
        align-items:start;
    }
    .film-detail-grid-column{
        display:grid;
        place-items:center;
        border: 3px solid rgba(47, 24, 132,0.3);
        border-radius: 25px;
        width: 100%;
        transition: .2s ease;
    }
    .film-detail-grid-column:hover{
        border: 3px solid rgb(47, 24, 132);
    }
    .film-detail-grid-column img{
        width: 100%;
        border-radius:25px 25px 0 0 ;
    }
    .genre-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        grid-row-gap: 10px;
    }
    .genre-badge {
        background: #cacaca;
        border-radius: 25px;
        padding: 5px 10px;
        color: white;
        margin: 0 10px;
    }
    .film-detail-grid-column{
        position: relative;
    }
    .average-points{
        position: absolute;
        top: -2vw;
        right: -2vw;
        width: 3vw;
        height: 3vw;
        background: #c0ff74;
        border-radius: 100%;
        padding: 15px;
        color:black;
        font-weight: 600;
        display:grid;
        place-items:center;
        font-size: 1.6rem;
        border: 3px solid black;
    }
</style>