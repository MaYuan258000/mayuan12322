<template>
	<div class="iconnt">
	<img class="icon" :src="imSrc">
	<input type="text" :placeholder="placeholder" class="inputt" >
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['placeholder','imSrc']
	}
</script>

<style lang="scss">

</style>