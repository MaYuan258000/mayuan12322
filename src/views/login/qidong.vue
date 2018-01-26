<template>
<div class="main" style="background: url(../../../static/img/de_01.jpg); no-repeat; background-size: 100% 100%; width: 100%;">
	<div class="main_1">
		<img src="../../../static/img/dddd_07.jpg" class="img">
	<div><router-link to="/qidong"><button class="btnt center">微信一键登录</button></router-link></div>
	</div>
	<div class="main_2">
		<button class="btntt center">登录</button>
		<button class="btnttt center">新用户</button>
	</div>
</div>
</template>

<script>
</script>

<style>
	.main{
		width: 100%;
		height: 100%;
		
	}
   .btnt{
   	width: 87%;
   	position: fixed;
   	bottom:7rem;
   	left: 1.5rem;
   	height: 2.5rem;
   	background: #00a80c;
   	border: none;
   	border-radius: 10px;
   	color: white;
   }
   .img{
   	position: relative;
   	top: 32.7rem;
   	z-index: 100;
   	width: 7%;
   	left: 7rem;
   }
   .btntt{
   	position: fixed;
     bottom:4rem;
     left: 1.5rem;
     width: 40%;
     height: 2.5rem;
     border: none;
     border-radius: 8px;
     color: #ca3232;
   }
   .btnttt{
   	   	position: fixed;
     bottom:4rem;
     left: 12.4rem;
     width: 40%;
     height: 2.5rem;
     border: none;
     border-radius: 8px;
     color: #ffffff;
     background: none;
     border: 1px solid #ffffff;
   }
</style>