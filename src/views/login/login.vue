<template>
	<div class="weapper flexBox flexCol">
		<div class="imgg topPic">
			<img src="../../../static/img/QQ图片20180125154427.jpg" style="width: 100%;" />
		</div>
		<div class="loginet flexBox">
			<div class="flex1 center">登录</div>
			<div class="flex1 center">注册</div>
		</div>
		<div class="container">
			<div class="weapper" v-show="show">
				<div class="xian"></div>
				<Input placeholder="请输入手机号" imSrc="../../static/img/dddd_03.jpg" v-model="userName"/>
				<div class="xian1"></div>
				<Input placeholder="请输入密码" imSrc="../../static/img/dddd_06.jpg" v-model="passWord"/>
				<!--<div class="iconnt">
					
					<img class="icon" src="../../../static/img/dddd_03.jpg">
					<input type="text" placeholder="请输入手机号码" class="inputt">
				</div>-->
				
				<!--<div class="iconnt" style="margin-top: 0rem;">
					<img class="icon" src="../../../static/img/dddd_06.jpg">
					<input type="text" placeholder="请输入密码" class="inputt">
				</div>-->
				<div class="mi" @click="deng"><button class="btn center">登&nbsp录</button></div>
				<div class="center mi">
					<router-link to="/mima">忘记密码？</router-link>
				</div>
			</div>
			<!--	<div class="weapper bgm" v-show="!show"></div>-->
				
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { getList } from '../../set/data1'
	import Input from '../../components/input'
	export default {

		data: function() {
			return {
				show: true,
				userName:'13717800979',
				passWord:'123456'
			}
		},
		created() {
//			getList().then((res) => {
//				console.log(res)
//			});
			axios.post('http://114.55.249.153:8028/login/regWithPhone', {
				   userName:this.userName,
				   passWord:this.passWord
				})
				.then(function(response) {
					this.$router.replace('/main')
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		components:{
			
			Input
		},
		methods:{
			deng(){
				
				
			}
		}

	}
</script>

<style lang="scss" scoped>
	.topPic {
		height: 12.5rem;
	}
	
	.loginet {
		height: 70px;
		background: #f3f3f3;
		color: #969696;
	}
	
	.container {
		flex: 1;
	}
	/*.bg{
	background: black;
}
.bgm{
	background: red;
}*/
</style>