<template>
  <body>
    <h1 class="title">The Coffee Page</h1>
    <div class="button">
    <router-link class="routerLink" to="/new"><button class="button">Add a Coffee</button></router-link>
  </div>
    <div v-if="coffees.length">
        <ul  v-for="coffee in coffees" :key="coffee.id">
            <router-link :to="`/coffee/${coffee.id}`"><h1>{{ coffee.name }}</h1></router-link>
            <!-- <h2>{{ coffee.addOns }}</h2> -->
            <!-- <h2>{{ coffee.location }}</h2> -->
        </ul>
      </div>
    </body>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      coffees: []
    }
  },

  // Axios Method
  // axios.post('https://coffee-backend.onrender.com/coffee', {
  //   name: coffee.name,
  //   addOns: coffee.addOns,
  //   locations: coffee.location,
  // })

  // Mounted loads the data onto the page
  mounted() {
    fetch('https://coffee-backend.onrender.com/coffee')
      .then(response => response.json())
      .then(data => {
        this.coffees = data.map(coffee => ({
          id: coffee._id,
          name: coffee.name,
          addOns: coffee.addOns,
          location: coffee.location,
        })
        );
      })
  }
}
</script>

<style scoped>

a, .title {
  color: #11005c;
  font-family: 'Courier New', Courier, monospace;
}

.button {
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/002/890/248/small/vintage-coffee-shop-banner-template-with-coffee-beans-drawing-in-line-art-style-isolated-coffee-branch-illustration-on-brown-background-panoramic-coffee-roasting-banner-organic-caffeine-free-vector.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 200px;
  border: none;
  padding: 15px 32px;
  font-size: 16px;
  color: #F3DEBA;
}

</style>