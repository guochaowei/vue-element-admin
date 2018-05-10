<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>HelloVue</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVue',
  data () {
    return {
      msg: 'hello Vue'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
