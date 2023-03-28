<template>
    <div class="mainCoffee">
      <h1>Add a New Coffee</h1>
      <form @submit.prevent="createCoffee">
          <label for="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            v-model="coffeeName"><br/>

          <label for="addOns">Add Ons:</label>
          <input 
            type="text" 
            name="addOns" 
            v-model="coffeeAddOns"><br/>

          <label for="location">Location:</label>
          <input 
            type="text" 
            name="location" 
            v-model="coffeeLocation"><br/>

        <button type="submit">Create</button>
      </form>
    </div>
</template>
  
<script>
// import axios from 'axios'

  export default {
  data() {
    return {
      coffeeName: '', coffeeAddOns: '', coffeeLocation: '', coffees: []
    }
  },
  methods: {
    createCoffee() {
      fetch('https://coffee-backend.onrender.com/coffee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.coffeeName,
          addOns: this.coffeeAddOns,
          location: this.coffeeLocation,
        })
      })
      .then(response => response.json())
      .then(data => {
        // Clear the form fields
        this.coffeeName = '';
        this.coffeeAddOns = '';
        this.coffeeLocation = '';
        
        this.coffees.push(data);
        // redirect to coffee
        this.$router.push('/coffee/');
      })
      .then((response) => {
          if (response.ok) {
            // Takes you back to the main coffee page
            this.$router.push(`/coffee/`);
          } else {
            throw new Error("Error creating coffee.");
          }
        })
      .catch(error => {
        console.error('Error creating new entry:', error);
      });
    }
  }
}
</script>

<style>

</style>