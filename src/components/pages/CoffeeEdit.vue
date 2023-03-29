<template>
    <div class="coffeeMain">
      <h2>Edit Coffee</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="coffee.name" /><br/>
        <label for="addOns">Add Ons:</label>
        <input type="text" id="addOns" v-model="coffee.addOns" /><br/>
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="coffee.location" /><br/>
        <button type="submit">Edit Coffee</button>
      </form>
    </div>
  </template>
<script>
    export default {
        name: "CoffeeEdit",
        data() {
            // Connects coffee data from the fetch call
            return {
                coffee: null,
            }
    },
    created() {
        const id = this.$route.params.id

        fetch(`https://coffee-backend.onrender.com/coffee/${id}`)
            .then(response => response.json())
            .then(data => {
                this.coffee = data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    methods: {
        submitForm() {
            const id = this.$route.params.id;
            const formData = {
                name: this.coffee.name,
                addOns: this.coffee.addOns,
                location: this.coffee.location,
            };
            fetch(`https://coffee-backend.onrender.com/coffee/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    this.$router.push(`/coffee/${id}`);
                } else {
                    throw new Error("Error updating Coffee")
                }
            })

        }
    }
}

</script>