<template>
    <h1>The Coffee Page</h1>
    <div class="button">
    <router-link class="routerLink" to="/new"><button>Add a Coffee</button></router-link>
  </div>
    <div v-if="coffees.length">
        <ul  v-for="coffee in coffees" :key="coffee.id">
            <router-link :to="`/coffee/${coffee.id}`"><h1>{{ coffee.name }}</h1></router-link>
            <!-- <h2>{{ coffee.addOns }}</h2> -->
            <h2>{{ coffee.location }}</h2>
        </ul>
      </div>
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

a {
  text-align: center;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 3px solid #1a037e;
}

h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

</style>