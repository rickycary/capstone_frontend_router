<template>
    <div>
        <h1>The Show Page</h1>
        <div v-if="coffee">
            <h1>{{ coffee.name }}</h1>
            <h1>{{ coffee.addOns }}</h1>
            <h1>{{ coffee.location }}</h1>
        </div>
        <router-link to="/new">Edit this Coffee</router-link>
        <br>
        <button @click="deleteCoffee">Delete this Coffee</button>
    </div>
</template>

<script>
export default {
    name: 'coffeeShowPage',
    data() {
        return {
            coffee: null
        };
    },
    created() {
        const id = this.$route.params.id;
        fetch(`https://coffee-backend.onrender.com/coffee/${id}`)
        .then(response => response.json())
        .then(data => {
            this.coffee = data;
        })
        .catch(error => {
            console.error("Error", error);
        });
    },
    methods: {
        deleteCoffee() {
            const id = this.$route.params.id;
            if (confirm("Delete this Coffee from your list?")) {
                fetch(`https://coffee-backend.onrender.com/coffee/${id}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        this.$router.push("/coffee/");
                    } else {
                        throw new Error("Error");
                    }
                })
                .catch(error => {
                    console.log("Error", error)
                })
            }
        }
    }
}

</script>