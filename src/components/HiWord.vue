<template>
    <div id="HiWord">
        <h1>我是 ----HiWord </h1>
        <a>这里是嵌在HelloWorld里的|组件，且这个组件里还包含跳转one组件的连接{{author}}</a>
      <br>
      <br>
      <router-link to="/one">go to one</router-link>
    </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name:'HiWord',
    data () {
      return{
        author:'-------嵌套组件'
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
