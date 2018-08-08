<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: '/' }">Goto hello</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Lisc!'
    }
  }
}
</script>
