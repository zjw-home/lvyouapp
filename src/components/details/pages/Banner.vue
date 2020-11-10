<template>
	<div class="banner">
		<div
		@click="showSwiper"
		>
			<div class="banner-img">
				<img src="/api/img/jingdian1.jpg">
			</div>
			<div class="banner-title">
				八达岭长城(AAAA景区)
			</div>
		</div>
		<div class="img-swiper"
		v-show="imgSwiper"
		@click="hideSwiper"
		>
			<swiper ref="mySwiper" :options="swiperOptions">
			  <swiper-slide v-for='item in bannerList' :key="item.id">
							<img :src="item.imgUrl">
						</swiper-slide>
			  
			</swiper>
			<div class="swiper-pagination" slot="pagination"></div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			swiperOptions:{
				pagination: {
				  el: '.swiper-pagination',
				  type:"fraction"
				  }
			},
			bannerList:[
				{
					id:"01",
					imgUrl:"https://imgs.qunarzz.com/sight/p0/20"+
					"05/39/3979f1867defec4ea3.water.jpg_1190x550_f29011fd.jpg"
				},
				{
					id:"02",
					imgUrl:"https://imgs.qunarzz.com/sight/p0/20"+
					"05/39/3979f1867defec4ea3.water.jpg_1190x550_f29011fd.jpg"
				},
				{
					id:"03",
					imgUrl:"https://imgs.qunarzz.com/sight/p0/20"+
					"05/39/3979f1867defec4ea3.water.jpg_1190x550_f29011fd.jpg"
				}
			],
			imgSwiper:false
		}
	},
	methods:{
		showSwiper(){
			this.imgSwiper = true;
		},
		hideSwiper(){
			this.imgSwiper = false;
		}
	}
}
</script>

<style scoped>
.banner{
	position: relative;
}
.banner-img{
	width: 100%;
	overflow: hidden;
	height: 0;
	padding-bottom: 55%;
}
.banner-title{
	position: absolute;
	bottom: .4rem;
	left: .3rem;
	font-size: .36rem;
	color: #fff;
}
.img-swiper{
	background: #000;
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.img-swiper img{
	width: 100%;
}
.swiper-pagination-fraction,.swiper-pagination-custom,
	.swiper-container-horizontal>.swiper-pagination-bullets{
		bottom: .6rem;
		font-size: .32rem;
		color: #fff;
}
</style>
