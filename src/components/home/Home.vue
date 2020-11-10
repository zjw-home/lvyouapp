<template>
	<div class="home">
		<home-header></home-header>
		<home-swiper :swiperList='swiperList'></home-swiper>
		<home-icons :iconsList='iconsList'></home-icons>
		<home-location></home-location>
		<home-activity></home-activity>
		<home-hot :hotList='hotList'></home-hot>
		<home-like :likeList='likeList'></home-like>
		<home-vacation :vacationList='vacationList'></home-vacation>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/like'
import HomeVacation from './pages/Vacation'
export default {
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeLocation,
		HomeActivity,
		HomeHot,
		HomeLike,
		HomeVacation
	},
	data(){
		return{
			swiperList:[],
			iconsList:[],
			hotList:[],
			likeList:[],
			vacationList:[],
			changeCity:[]
		}
	},
	//计算属性
	computed:{
		...mapState(['city'])
	},
	methods:{
		getHttp(){
			this.$http.get("/api/dataHome.json")
			.then((res)=>{
				const data = res.data.data;
				data.forEach((item,index)=>{
					if(item.city == this.city){
						this.swiperList = item.swiperList;
						this.iconsList = item.iconsList;
						this.hotList = item.hotList;
						this.likeList = item.likeList;
						this.vacationList = item.vacationList;
					}
					
				})
				  
			})
		}
	},
	mounted() {
		this.changeCity = this.city
		this.getHttp();
	},
	// 生命周期
	activated() {
		if(this.city != this.changeCity){
			this.getHttp();
			this.changeCity = this.city;
		}
	}
}
</script>

<style>
.home{
	background: #f5f5f5;
}
</style>
