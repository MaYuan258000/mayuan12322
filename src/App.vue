<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	import axios from 'axios'
	import {getList} from './set/data1'
export default {
  name: 'App',
		data(){
			return{
			}
		},
//created(){
//	axios.get('http://114.55.249.153:8028/shopping/listByPage')
//	.then((res)=>{
//		console.log(res)
//	})
//}
created(){
//	getList('http://114.55.249.153:8028/shopping/listByPage',{
//		page:1,
//		limit:10
//	}).then((res)=>{
//		console.log(res)
//	})

   this.$router.replace('/login')
}
}
</script>

<style lang="scss">
@import "./style/cont.scss"
</style>
