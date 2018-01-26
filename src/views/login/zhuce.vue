<template>
	<div class="weapper flexBox flexCol">
		<div class="imgg topPic">
			<img src="../../../static/img/wee_02.jpg" style="width: 100%;" />
		</div>
		<div class="loginet flexBox">
			<div class="flex1 center">登录</div>
			<div class="flex1 center">注册</div>
		</div>
		<div class="container">
			<div class="weapper" v-show="show">
				<div class="xian3"></div>
				<div class="iconntt">
					<img class="iconn" src="../../../static/img/dddd_03.jpg">
					<input type="text" placeholder="请输入手机号码" class="inputt">
				</div>
				<div class="xian2"></div>
				<div class="iconntt" style="margin-top: 0rem;">
					<img class="iconn" src="../../../static/img/wee_05.jpg">
					<input type="text" placeholder="请输入验证码" class="inputt">
					<button class="btn_1">获取验证码</button>
				</div>
				<div class="xian2"></div>
				<div class="iconntt" style="margin-top: 0rem;">
					<img class="iconn" src="../../../static/img/d222_03.jpg">
					<input type="text" placeholder="请输入密码" class="inputt">
				</div>
					<div class="xian2"></div>
				<div class="iconntt" style="margin-top: 0rem;">
					<img class="iconn" src="../../../static/img/d222_03.jpg">
					<input type="text" placeholder="请再次输入密码" class="inputt">
				</div>
				<div><button class="btn center">注&nbsp册</button></div>
			</div>
			<!--	<div class="weapper bgm" v-show="!show"></div>-->
		</div>
	</div>
</template>

<script>
		import axios from 'axios'
	import { getList } from '../../set/data1'
	export default {

		data: function() {
			return {
				show: true
			}
		},
		created() {
			getList().then((res) => {
				console.log(res)
			});
			axios.post('http://114.55.249.153:8028/login/LoginByName', {
					username: 'Fred',
					password: 'Flintstone'
				})
				.then(function(response) {
					console.log(response);
				})
				.catch(function(error) {
					console.log(error);
				});
		}

	}
</script>

<style>
	.topPic {
		height: 12.5rem;
	}
	
	.loginet {
		height: 60px;
		background: #f3f3f3;
		color: #969696;
	}
	
	.container {
		flex: 1;
	}
</style>