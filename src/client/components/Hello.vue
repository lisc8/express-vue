<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'lisc' }">Goto lisc</router-link>
    <h4 v-on:click="change">修改值</h4>
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
      msg: 'Hello World!'
    }
  },
  methods: {
    change: function(){
        console.log(999)
        this.msg = 'changed';
    }
  }
}
</script>
