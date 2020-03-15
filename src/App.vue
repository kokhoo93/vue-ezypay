<template>
  <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/create" v-on:click.native="back()" replace>Back</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "create" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            back() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
