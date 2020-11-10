<template>
	<div class="header">

		<div class="header-left" >
			<router-link to='/'>
			<span class="iconfont">&#xe624;
			</span>
			</router-link>
		</div>
		<div class="header-title">
			城市选择
		</div>
	</div>
</template>

<script>
	export default{
		//第二种路由跳转法
		// <div class="header-left" @click='toHome'>
		// methods:{
		// 	toHome(){
		// 		this.$router.push('/')
		// 	}
		// }
	}
</script>

<style scoped>

.header{
	width: 100%;
  height: .88rem;
	line-height: .88rem;
	background: #00bcd4;
	font-size:.32rem;
	color: white;
	position: relative;
}
.header-left{
	width: .4rem;
	padding: 0 .2rem;
	text-align: center;
	font-weight: bold;
	position: absolute;
}
.header-title{
	text-align: center;
}
</style>
