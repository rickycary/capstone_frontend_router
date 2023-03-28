<template>
    <div class="mainCoffee">
      <h1>Edit</h1>
      <form @submit.prevent="submitForm">
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

        <button type="submit">Edit</button>
      </form>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    name: "CoffeeEdit",
    created() {
        const id = this.$route.params.id;
        fetch(`https://coffee-backend.onrender.com/coffee/${id}`)
        .then((response) => response.json())
        .then((data) => { 
            this.coffee = data 
        })
    },
    methods: {
        submitForm() {
            const id = this.$route.params.id;
            const formData = {
                name: this.coffee.name,
                addOns: this.coffee.addOns,
                location: this.coffee.location
            };
            fetch(`https://coffee-backend.onrender.com/coffee/${id}`, {
                method: "PUT", 
                headers: { 
                    "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
            .then((response) => {
                if (response.ok) {
                    this.$router.push(`/coffee/`);
                } else {
                    throw new Error ("Error")
                }
            })
            .catch(error => {
                console.error('Error', error)
            })
        }
    }
}

</script>