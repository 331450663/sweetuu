<template>
  <div id="one">
    <h1>我是 one</h1>
    <a>这个组件需要跳转回 HelloWord组件--------{{content}}</a>
    <br>
    <br>
    <router-link to="/">go to HelloWorld</router-link>
  </div>
</template>

<script type='text/ecmascript-6'>

  export default {
    name:'one',
    data(){
      return{
        name:'--------------跳转到HelloWorld',
        content:null,
      }
    },
    mounted(){
      var _this = this;
      this.$http.get('http://localhost:8080/static/person.json')
        .then(function (response) {
          _this.content = response.data.age;
        });
    }
  }



</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
