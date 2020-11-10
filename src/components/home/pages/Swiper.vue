<template>
	<div class="header-swiper">
		  <swiper ref="mySwiper" :options="swiperOptions">
		    <swiper-slide v-for='item in swiperList' :key="item.id">
				<img :src="item.imgUrl">
			</swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
	</div>
</template>

<script>
	export default {
		props:['swiperList'],
	    name: 'carrousel',
	    data() {
	      return {
	        swiperOptions: {
	          pagination: {
	            el: '.swiper-pagination',
	          },
			  loop:true
	          // Some Swiper option/callback...
	        }
	      }
	    }
	}
</script>

<style style="text/css" scoped>
.header-swiper{
	/* 解决网速慢掉块问题填充底色 */
	background: #CCCCCC;
	height: 0;
	padding-bottom: 26.67%;
	/* width: 100%;
	height: 2rem; */
}
.header-swiper img {
	height: 2rem;
	width: 100%;
}
.header-swiper>>> .swiper-pagination-bullet-active{
	background: white;
}
</style>
