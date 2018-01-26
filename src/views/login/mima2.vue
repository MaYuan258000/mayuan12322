<template>
	<div class="header">
		<div class="top">
			<button class="back">返回</button>
			<h3 class="h">找回密码</h3>
		</div>
		<div class="main">
			<h3 class="center hello">短信验证码已发送，请输入验证码</h3>
			<div class="xian"></div>
			<div class="iconnt">
				<input type="text" placeholder="验证码" class="inputt" style="text-align: center; margin-left: 2rem;">
			</div>
			<div class="anniu mi">
			<div><router-link to="/mima3"><button class="btn center">下一步</button></router-link></div>
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