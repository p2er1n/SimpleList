<template>
	<view class="doneList">
		<view v-for="item in totalItems.filter((item)=>{return item.done;})" :key="item.id" class="doneItem">
			<uni-icons v-if="item.done" type="checkmarkempty" size="30" @click="checkmarkClick(item)"></uni-icons>
			<view v-else @click="checkboxClick(item)"></view>
			<input v-model="item.content" @input="inputChange"/>
			<uni-icons type="closeempty" size="30" @click="closeemptyClick(item)"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalItems: []
			}
		},
		onShow() {
			uni.getStorage({
				key: 'totalItems',
				success: (res) => {
					this.totalItems = res.data;
				}
			});

		},
		methods: {
			inputChange(){
				uni.setStorage({
					key: 'totalItems',
					data: this.totalItems
				})
			},
			checkmarkClick(item) {
				item.done = !item.done;
				uni.setStorage({
					key: 'totalItems',
					data: this.totalItems
				})
			},
			checkboxClick(item) {
				item.done = !item.done;
				uni.setStorage({
					key: 'totalItems',
					data: this.totalItems
				})
			},
			closeemptyClick(item) {
				let id = item.id;
				this.totalItems = this.totalItems.filter((i) => {
					if (i.id != id)
						return true;
					else
						return false;
				});
				uni.setStorage({
					key: 'totalItems',
					data: this.totalItems
				})
			}

		}
	}
</script>

<style>
	.doneList {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-end;
	}

	.doneItem {
		display: flex;
		flex-direction: row;
		margin-left: 20px;
		margin-bottom: 3%;
		justify-content: space-around;
		animation-name: slideIn;
		animation-duration: 0.7s;
	}

	.doneItem view {
		border-radius: 30%;
		width: 25px;
		border: 1px solid;
	}

	.doneItem input {
		border-bottom: 1px solid;
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
		}

		to {
			transform: translateX(0%);
		}

	}
</style>