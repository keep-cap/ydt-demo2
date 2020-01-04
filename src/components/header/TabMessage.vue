<template>
    <div class="tab">
        <div class="tab-message">
            <ul class="tab-message-list">
                <li v-for="(item,index) in tabTitle"
                    :key="index"
                    class="mate" 
                    :class="{ first:changeColor == index}"
                    @click="change(index)">{{item.name}}</li>
                <li class="last">下载客户端</li> 
            </ul>
        </div>
	</div>
</template>

<script>
export default {
    name: 'TabMessage',
    data() {
        return {
            tabTitle: [
                { 'name': '首页',src: '' },
                { 'name': '看图', src: 'photo'},
                { 'name': '全屋记', src: 'case'},
                { 'name': '文章', src: 'guide'},
                { 'name': '众测', src: 'mtest'}
            ],
            changeColor: 0
        }
    },
    methods:{
        change(index){
            this.changeColor = index;
            this.$router.push(`/${this.tabTitle[index].src}`);
            // console.log(this.tabTitle[index].src)
            //
        },
    }
}
</script>

<style lang="scss">
    .tab {
        height: 43px;
        line-height: 40px;
        border-top: 2px solid #ff9200;
        border-bottom: 1px solid silver;
        width: 100%;
        font-size: 14px;
        box-shadow: 0 1px 1px #ccc;  
        &-message {
            width: 980px;
            margin: 0 auto;
            &-list {
                list-style: none;
                position: relative;
                li {
                    cursor: pointer;
                    float: left;
                    line-height: 41px;
                    padding: 0 38px;
                    margin-right: 3px;
                    font-size: 13px;
                }
                .mate:hover{
                    height: 41px;
                    border-bottom: 4px solid #f7b244;
                }
                .last {
                    position: relative;
                    color: #ff9200;
                }
                .last:after {
	            	content: '';
	            	position: absolute;
	            	background: url('../../../public/ophone.png') no-repeat;
	            	width: 15px;
	            	height: 15px;
	            	background-size: 15px;
	            	left: 110px;
	            	top: 12px;
	            }
                .last:hover {
                    background-color: #ff9200;
                    color: #fff;
                    margin-left: 0;
                    cursor: pointer;
                    &:after {
                        background: url('../../../public/wphone.png')no-repeat;
                        background-size: 15px;
                    }
                }
            }
            .first {
                color: #fff;
                background-color: #f7b244;
            }
            .last {
                float: right;
                position: relative;
            }
        }
    }
</style>