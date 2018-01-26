<template>
	<div class="header">
		<div class="top">
			<button class="back">返回</button>
			<h3 class="h">找回密码</h3>
		</div>
		<div class="main">
			<h3 class="center hello">请输入你的手机号码</h3>
			<div class="xian"></div>
			<div class="iconnt">
				<input type="text" placeholder="手机号" class="inputt" style="text-align: center; margin-left: 2rem;">
			</div>
			<div class="anniu mi">
			<div><router-link to="/mima2"><button class="btn center">下一步</button></router-link></div>
			<div><router-link to="/zhuce"><button class="btn center" style="margin-top: 1rem;background: none; border: 1px solid #ca3232; color: #ca3232;">联系客服</button></router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.h {
		margin-right: 6rem;
		padding-top: 0.5rem;
		color: white;
	}
	.hello{
		padding-top: 3rem;
		color: #737373;
	}
</style>