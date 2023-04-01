<template>
    <div class="coffeeMain">
      <h2>Edit your Coffee</h2>
      <div class="button">
      <form @submit.prevent="submitForm">
        <label for="name" class="text">Name:</label>
        <input type="text" id="name" v-model="coffee.name" /><br/>
        <label for="addOns" class="text">Add Ons:</label>
        <input type="text" id="addOns" v-model="coffee.addOns" /><br/>
        <label for="location" class="text">Location:</label>
        <input type="text" id="location" v-model="coffee.location" /><br/>
        <button type="submit">Edit Coffee</button>
      </form>
    </div>
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

<style>

body {
  background-color: #ddc8ba;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 3px solid #1a037e;
  text-align: center;
}

label {
  display: inline-block;
  width: 150px;
  text-align: right;
}

</style>