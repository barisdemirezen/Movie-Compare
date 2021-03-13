<template>
  <div>
    <Navbar/>
        <div class="container">
      <router-view @addtolist="addtolist" :movies="listItems"></router-view>
    </div>
  </div>
</template>
<script>
import  Navbar  from "./components/Navbar.vue";
export default {
  components: {Navbar},
  data(){
    return {
      listItems : [],
    }
  },
  methods: {
    addtolist (value) {
      console.log("App vue: " + value);
      for(let i = 0; i <= this.listItems.length; i++)
      {
        if(!this.listItems.includes(value))
        {
          this.listItems.push(value);
        }
      }
    }
  },
}
</script>
<style>
  body, html{
    margin: 0;
    overflow-x: hidden;
  }
  div{
    font-family: 'Poppins';
    margin: 0;

  }
  .navbar {
    background: #2f1884;
    width: 100vw;
    margin-bottom: 2vh;
  }
  .navbar ul{
    display: flex;
    align-items: center;
    list-style: none;
    padding: 20px 0px;
    margin: 0;
  }
  .link{
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0 20px;
  }
  .container{
    width: 80vw;
    margin: auto;
  }
  .basket {
    margin-left: auto;
    margin-right: 3vw;
    
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .basket div{
    font-size: 1.5rem;
    padding: 0 15px;
  }
  .basket svg{
    width: 2vw;
  }
  .basket:hover{
    cursor: pointer;
  }
  * {
  scrollbar-width: thin;
  scrollbar-color: #2f1884 transparent;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #2f1884;
  border-radius: 20px;
}
</style>