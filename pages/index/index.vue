<template>
	<view class="todoList">
		<view v-for="item in totalItems.filter((item)=>{return !item.done;})" :key="item.id" class="todoItem">
			<uni-icons v-if="item.done" type="checkmarkempty" size="30" @click="checkmarkClick(item)"></uni-icons>
			<view v-else @click="checkboxClick(item)"></view>
			<input v-model="item.content" @input="inputChange"/>
			<uni-icons type="closeempty" size="30" @click="closeemptyClick(item)"></uni-icons>
		</view>
	</view>

	<view>
		<uni-fab @fabClick="uniFabClick" horizontal="right" :pattern="fabPattern" />
	</view>

</template>

<script>
	export default {
		data() {
			return {
				totalItems: [],
				newTodoContent: '',
				fabPattern: {
					buttonColor: "0xffffff"
				}
			}
		},
		onShow() {
			uni.getStorage({
				key: 'totalItems',
				success: (res) => {
					this.totalItems = res.data;
				},
			});
		},
		methods: {
			inputChange(){
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
				});
			},
			checkmarkClick(item) {
				item.done = !item.done;
				uni.setStorage({
					key: 'totalItems',
					data: this.totalItems
				})
			},
			uniFabClick() {
				let curId;
				if (this.totalItems.length == 0)
					curId = 0;
				else
					curId = this.totalItems[this.totalItems.length - 1].id + 1;
				this.totalItems.push({
					id: curId,
					done: false,
					content: '你想做的'
				});
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
	.todoList {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;
	}

	.todoItem {
		display: flex;
		flex-direction: row;
		margin-left: 20px;
		margin-bottom: 3%;
		justify-content: space-around;
		animation-name: slideIn;
		animation-duration: 0.7s;
	}

	.todoItem view {
		border-radius: 30%;
		width: 25px;
		border: 1px solid;
	}

	.todoItem input {
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