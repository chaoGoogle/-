<template>
	<view>
		<view class="bg">
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"bgPao",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.bg{
		width: 1000rpx;
		height: 1000rpx;
		animation: myPao 5s ease-in-out 0s infinite;
		position: absolute;
		top: 0%;
		left: 0%;
		box-sizing: border-box;
		opacity: 0.3;
		transition: 3s ease-in-out;
	}
	@keyframes myPao{
		0%{
			background-image: linear-gradient(to left,#ff0004,#ffaa00,#55aaff);
			transform: scale(10);
		}
		25%{
			background-image: linear-gradient(to right,#ffaaff,#55ff00,#980000);
			transform: scale(10)
		}50%{
			background-image: linear-gradient(to top, #5500ff,#ffff00,#aaaaff);
			transform: scale(10)
		}75%{
			background-image: linear-gradient(to bottom,#00ffff,#aa007f,#aaff7f);
			transform: scale(10)
		}100%{
			background-image: linear-gradient(to left,#ff0004,#ffaa00,#55aaff);
			transform: scale(10)
		}
	}
</style>