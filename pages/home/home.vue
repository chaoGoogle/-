<template>
	<view>
		这里是首页
		<button type="warn" @click="goback">返回上一页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goback(){
				uni.reLaunch({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="less">
button{
	width: 300rpx;
}
</style>
