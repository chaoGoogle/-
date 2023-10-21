<template>
	<view class="content">
		<view class="bg">
			<!-- <bgPao></bgPao> -->
			<view class="userPass">
				<view class="title">
					你好
				</view>
				<view class="user">
					<image src="../../static/ico/user.png" mode=""></image>
					<input type="text" placeholder="请输入账号">
				</view>
				<view class="pass">
					<image src="../../static/ico/pwd.png" mode=""></image>
					<input type="password" placeholder="请输入密码">
				</view>
				<button type="primary" @click="gotoHome">登录</button>
			</view>
			<view class="time">
				{{yeartime}}
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				yeartime:""
			}
		},
		methods:{
			showTime(){
				let time = new Date()
				let year = time.getFullYear()
				let mounth = time.getMonth()
				let days = time.getDay()
				let hour = time.getHours()
				let sec = time.getSeconds()
				let min = time.getMinutes()
				console.log(`${year}/${mounth}/${days}\n${hour}:${min}:${sec}`);
				this.yeartime = `${year}/${mounth}/${days}\n${hour}:${min}:${sec}`
			},
			gotoHome(){
				uni.reLaunch({
					url:"/pages/home/home"
				})
			}
		},
		onLoad() {
			setInterval(()=>{
				this.showTime()
			},1000)
		}
	}
</script>
<style lang="less" scoped>
	@font-face {
		font-family: "my";
		src: url("@/static/fontlib/HarmonyOS_Sans.ttf");
	}
	*{
		font-family: "my" sans-serif;
	}
	.time{
		// background-color: #fff;
		height: 200rpx;
		width: 800rpx;
		position: absolute;
		bottom: 0%;
		right: 3%;
		font-size: 80rpx;
		font-family: "宋体";
		color: #fff;
		text-shadow: 3rpx 3rpx 3rpx #00ffff;
		text-align: center;
	}
	.content{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
		.bg{
			width: 110vw;
			height: 120vh;
			background-image: url("../../static/imags/IMG_20231014_183145.jpg");
			background-position: center;
			background-size: cover;
		}
		view image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
		.userPass{
			background: linear-gradient(to right bottom,#aaffff,#ffebfe,#ffbbff);
			transition: 3s;
			display: flex;
			width: 1000rpx;
			height: 800rpx;
			border-radius: 15rpx;
			position: fixed;
			right: 200rpx;
			top: 30%;
			bottom: 25%;
			opacity: 0.9;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			border-radius: 15rpx;
			box-shadow: 5rpx 5rpx 50rpx #aaffff;
		}
		.title{
			font-size: 80rpx;
			height: 50rpx;
			text-shadow: 5rpx 5rpx 3rpx #00ffff;
			color: #fff;
		}
		.user{
			width: 800rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			border-radius: 15rpx;
			box-shadow:0rpx 0rpx 15rpx #f0f;
			animation: myPao 5s linear 0s infinite;
			input{	
				margin-left: 50rpx;
			}
		}
		.pass{
			width: 800rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			border-radius: 15rpx;
			box-shadow: 0rpx 0rpx 15rpx #f0f;
			animation: myPao 5s linear 0s infinite;
			input{
				margin-left: 50rpx;
			}
		}
		button{
			width: 300rpx;
		}
	@keyframes myPao{
		0%{
			// background-image: linear-gradient(to left,#ff0004,#ffaa00,#55aaff);
			border-top: 5rpx solid #ffbbff;
			border-left:5rpx solid #00ffff;
			border-right: 5rpx solid #00ff00;
			border-bottom:5rpx solid #aa00ff;
			// transform: rotate(0deg);
			// box-shadow: 0rpx 0rpx 15rpx #ffbbff;
		}
		25%{
			// background-image: linear-gradient(to right,#ffaaff,#55ff00,#980000);
			// border: 5rpx solid #aaffff;
			// box-shadow: 0rpx 0rpx 15rpx #aa557f;
			// transform: rotate(80deg);
		}50%{
			// background-image: linear-gradient(to top, #5500ff,#ffff00,#aaaaff);
			// border: 5 solid #efbaba;
			// transform: rotate(160deg);
			// box-shadow: 0rpx 0rpx 15rpx #ffa6a0;
		}75%{
			// background-image: linear-gradient(to bottom,#00ffff,#aa007f,#aaff7f);
			// border: 5rpx solid #aa007f;
			// transform: rotate(260deg);
			// box-shadow: 0rpx 0rpx 15rpx #aa007f;
		}100%{
			// background-image: linear-gradient(to left,#ff0004,#ffaa00,#55aaff);
			// border: #ff00ff;
			// transform: rotate(360deg);
			// box-shadow: 0rpx 0rpx 15rpx #f0f;
		}
	}
</style>
