<template>
	<div ref='container' class='container'>
		<div class="content">
			<!-- hot -->
			<div class="hot">
				<div class="hot-title">
					热门城市
				</div>
				<ul class="hot-list">
					<li class="hot-item"
					v-for='item in hotCities'
					:key='item.id'
					@click="changeCityName(item.name)"
					>
						{{item.name}}
					</li>
				</ul>
			</div>
		<!-- sort -->
			<div class="sort">
				<div class="sort-title">字母排序</div>
				<ul class="sort-list">
					
					<li class="sort-item"
					v-for='(val,key) in cities'
					@click="changeSort(key)"
					>
						{{key}}
					</li>
				</ul>
			</div>
		<!-- list -->
			<div class="list">
			<div v-for='(val,key) in cities'
			:ref='key'
			>
				<div class="list-title">{{key}}</div>
					<ul class="list-msg">
						<li class="list-item"
						v-for='item in val'
						:key='item.id'
						@click="changeCityName(item.name)"
						>
							{{item.name}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default{
		props:['hotCities','cities'],
		data(){
			return{
				scroll:''
			}
		},
		mounted() {	
		let container = this.$refs.container;
		
		this.scroll = new BScroll('.container')
		// this.scroll = new BScroll('.container', {
		//   mouseWheel: true,//开启鼠标滚轮
		//   disableMouse: false,//启用鼠标拖动
		//   disableTouch: false//启用手指触摸
		// })
		},
		methods:{
			changeSort(sortName){
				this.scroll.scrollToElement(this.$refs[sortName][0])
				
			},
			changeCityName(cityName){
				
				this.changeCity(cityName);
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		}
	}
</script>

<style scoped>
.container{
	/* touch-action: none; */
	position:absolute;
	overflow: hidden;
	left: 0;
	right: 0;
	bottom: 0;
	top:44px;
	height: 100%;
	background: #f5f5f5;
	
}
	
/* hot */
.hot-title{
	font-size:.26rem;
	color: #212121;
	padding: .2rem .3rem;
}	
.hot-list{
	position: relative;
	overflow: hidden;
	background: #fff;
	font-size: .28rem;
	color: #212121;
}
.hot-list:before{
	content: "";
	position: absolute;
	height: 100%;
	width:33.333%;
	left:33.333%;
	border-left: .02rem solid #ddd;
	border-right: .02rem solid #ddd;
}
.hot-item{
	position: relative;
	width: 33.333%;
	text-align: center;
	height: .9rem;
	line-height: .9rem;
	float: left;
	border-bottom: .02rem solid #ddd;
}
/* sort */
.sort-title{
	font-size:.26rem;
	color: #212121;
	padding: .2rem .3rem;
}	
.sort-list{
	position: relative;
	overflow: hidden;
	background: #fff;
	font-size: .28rem;
	color: #212121;
}
.sort-item{
	width: 16.666666%;
	text-align: center;
	height: .9rem;
	line-height: .9rem;
	float: left;
}	
/* list */
.list-title{
	font-size:.26rem;
	color: #212121;
	padding: .2rem .3rem;
}
.list-msg{
	position: relative;
	overflow: hidden;
	background: #fff;
}
.list-msg:before{
	content: "";
	position: absolute;
	width: 25%;
	left: 25%;
	height: 100%;
	border-left: .02rem solid #ddd;
	border-right: .02rem solid #ddd;
}
.list-msg:after{
	content: "";
	position: absolute;
	width: 0;
	left: 75%;
	height: 100%;
	border-left: .02rem solid #ddd;
}
.list-item{
	position: relative;
	width:25%;
	font-size: .28rem;
	text-align: center;	
	line-height: .9rem;
	float: left;
	border-bottom: .02rem solid #ddd;
	white-space: nowrap;/* 字体过长超出框显示... */
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>

