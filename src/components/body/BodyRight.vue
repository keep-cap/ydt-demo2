<template>
    <div class="side">
        <!-- 登录块 -->
        <div class="login-block">
            <img src="login.png" alt="">
            <div class="login-message"> 
                <p>请登录</p>
                <p>跟发烧学友学家装</p>
            </div>
        </div>
        <div class="login-btns">
                <Button class="login" type="primary">登录/注册</Button>
                <Button class="publish" type="primary">发布</Button>
            </div>
        
        <!-- 公告 -->
        <div class="notice">
            <span class="notice-head">公告: </span>
            <span class="notice-text">装修难？这里有组织</span>
        </div>
        <!-- 筛选 -->
        <div class="filter">
            <div class="filter-type">
                <div class="name">热门筛选</div>
            </div>
            <div class="filter-content">
                阿说斯 · 蒂芬 · 撒旦大 · 法士 · 大夫 · 蒂夫 · 阿打到斯 · 蒂芬 · 阿斯 · 蒂芬 · 阿萨
            </div>
        </div>

        <div class="filter">
            <div class="filter-type">
                <div class="name">热门筛选</div>
            </div>
            <div class="filter-content">
                阿说斯 · 蒂芬 · 撒旦大 · 法士 · 大夫 · 蒂夫 · 阿打到斯 · 蒂芬
            </div>
        </div>
        <!-- 发布 -->
        <div class="publish">
            <div class="filter">
                <div class="filter-type">
                    <div class="name">热门筛选</div>
                </div>
                <div class="filter-content">
                    <img src="../../../public/pct2.jpg" width="198" height="128" alt="">
                    <div class="notice-text">你好</div>
                </div>
            </div>

            <div class="publish-list" v-for="(good,index) in goods" :key="index">
                <div class="publish-list-left">
                    <img src="../../../public/smo3.jpg" width="68" height="68" alt="">
                </div>
                <div class="publish-list-right">
                    {{good.title}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "BodyRight",
    data(){
        return {
            goods:[
                {id:0,img:'',title:'氨基酸代理费卡接收到开了'},
                {id:1,img:'',title:'氨基酸代理费卡接收到开了'},
                {id:2,img:'',title:'氨基酸代理费卡接收到开了'},
                {id:3,img:'',title:'氨基酸代理费卡接收到开了'},
                {id:3,img:'',title:'氨基酸代理费卡接收到开了'},
                {id:3,img:'',title:'氨基酸代理费卡接收到开了'},
                {id:3,img:'',title:'氨基酸代理费卡接收到开了'}
            ],
            selects:[
                '你好','你好','你好','你好','你好'
            ]
        }
    }
}
</script>
<style lang="scss">
.side {
    float: right;
    width: 220px;
    height: 1000px;
    margin-top: 22px;
    .login {
        &-block {
            width: 220px;
            height: 60px;
            position: relative;
            img {
                width: 62px;
                height: 60px;
                float: left;
                position: absolute;
                top: 0;
                left: 0;
            }
            .login-message {
                color: #8e8e8e;
                font-size: 13px;
                position: absolute;
                left: 75px;
                top: 15px;
            }
        }
        &-btns {
            margin-top: 15px;
            button {
                cursor: pointer;
            	height: 34px;
            	border: 0;
            	color: #fff;
            	border-radius: 3px;
            	line-height: 34px;
            	font-size: 12px;
            }
            .login {
                background-color: #ff9200;
                width: 117px;
                margin-right:7px;
            }
            .login:hover{
                background-color: #ee9200;
            }
            .publish {
                width: 95px;
                background-color: #61A7DB;
            }
        }
    }
    .notice {
        margin-top: 20px;
        width: 218px;
        height: 32px;
        background-color: #EEE;
        font-size: 12px;
        padding-left: 40px;
        line-height: 32px;
        &-head {
            color: #818181;
            margin-right: 5px;
            position: relative;
        }
        &-head:before {
        	content:'';
        	position: absolute;
        	background: url('../../../public/laba.png') no-repeat;
        	width: 16px;
        	height: 16px;
        	background-size:16px;
        	left: -24px;
            top:0;
        }
        &-text {
            color: #666;
            cursor: pointer;
        }
        &-text:hover{
            color: #ff9200;
        }
    }
    .filter {
        width: 218px;
        margin-top: 20px;
        font-size: 13px;
        border: 1px solid #dadada;
        &-type {
            width: 218px;
            height: 38px;
            border-bottom: 2px solid #dadada;
            line-height: 36px;
            div {
                border-bottom: 2px solid #ff9200;
                width: 75px;
                padding: 0 10px; 
            }
        }
        &-content {
            line-height: 25px;
            width: 198px;
            padding: 10px;
            color: #525252;
            li{
                float: left;
            }
        }
    }
    .publish-list {
        width: 218px;
        height: 85px;
        border: 1px solid #dadada;
        border-top: 0;
        padding: 8px;
        &-left img {
            float: left;
            margin-right: 10px;
        }
        &-right {
            float: left;
            width: 110px;
            color: #525252;
            font-size: 12px;
            line-height: 20px;
        }
    }
}   
</style>




