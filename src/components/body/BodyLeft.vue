<template>
    <div class="main">
        <!-- 今日屋主 -->
        <div class="block">
            <div class="block-list" v-for="(list,index) in lists" :key="index">
                <img :src="`${publicPath}${list.img}`" width="96" height="122" alt="">
                <div class="content">
                    <div class="title">{{list.title}}</div>
                    <div class="text">{{list.text}}</div>
                </div>
            </div>
        </div>
        <!-- 精选 -->
        <div class="selection">
            <div class="selection-left"></div>
            <div class="selection-right">精选</div>
        </div>
        <!-- 内容 -->
        <div class="article" v-for="(com,index) in coms" :key="index">
            <div class="article-picture" >
                <img :src="`${publicPath}${com.img}`" alt="">
            </div>
            <div class="article-right">
                <h1>{{com.title}}</h1>
                <p>{{com.text}}</p>
                <div class="user">
                    <img class="user-icon" src="../../../public/user.png" alt="">
                    <span class="user-by">by</span>
                    <span class="user-name">{{com.userName}}</span>
                    <div class="record">
                        <div class="record-view">{{com.see}}</div>
                        <div class="record-comment">{{com.pinNum}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 更多 -->
        <div class="more">查看更多全屋记</div>
    </div>
</template>

<script>
export default {
    name: "BodyLeft",
    data() {
        return {
            lists:[
                { id: 0,img: "pct1.jpg",title: '今日屋主',text: '上课的荆防颗粒大闪击飞' },
                { id: 1,img: 'pct2.jpg',title: '礼品兑换',text: '攒糖豆换官方周边' },
                { id: 2,img: 'pct3.jpg',title: '新手指南',text: '装修小白必修指南' },
                
            ],
            coms:[
                { id: 0,img: "smo3.jpg",title: '顶层两小乎',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see: '123',pinNum: '123' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 543',pinNum: '123' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 123',pinNum: '123' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 1235',pinNum: '4545' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 3454',pinNum: '123' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 123',pinNum: '455' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 1235',pinNum: '343' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 123',pinNum: '123' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 123',pinNum: '123' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 123',pinNum: '123' },
                { id: 0,img: "smo3.jpg",title:'123',text: '这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon: '',userName: '张飞',see:' 123',pinNum: '123' },
                // {id:0,img:"../../../public/smo3.jpg",title:'123',text:'这是一对年轻小夫妻的新家，位于史蒂夫开始多久分双抗加地方是考砥砺奋进杀戮空间',userIcon:'',userName:'张飞',see:'454',pinNum:'756'},
            ],
            publicPath: '/',
        }
    }
}
</script>

<style lang="scss">
.main {
    width: 740px;
    float: left;
    //今日屋主
    .block {
        display: flex;
        justify-content: space-between;
        width: 740px;
        &-list {
            cursor: pointer;
            float: left;
            margin-top: 22px;
            width: 240px;
            height: 124px;
            border: 1px solid #e6e6e6;
            background-color: #fcfcfc;
            .content {
                width: 220px;
            }
            img {
                float: left;
            }
            .title {
                margin-top: 27px;
                margin-bottom: 13px;
                font-size: 15px;
                color: #212121;
            }
            .text {
                font-size: 14px;
                color: #666;
            }
        }
    }
    //精选
    .selection {
        position: relative;
        top: 10px;
        display: block;
        width: 740px;
        height: 33px;
        border-bottom: 2px solid #d0d0d0;
        margin-bottom: 30px;
        &-left {
            position: absolute;
            width: 4px;
            height: 16px;
            top: 4px;
            border-radius: 10px;
            background-color: #ff9200;
            float: left;
        }
        &-right {
            margin-top: 2px;
            font-size: 16px;
            float: left;
            margin-left: 15px;
        }
    }
    .article {
        width: 740px;
        height: 244px;
        margin-top: 20px;
        border: 1px solid #dadada;
        &-picture img {
            width: 320px;
            height: 218px;
            margin: 11px;
            float: left;
        }
        &-right {
            float: left;
            margin-top: 10px;
            margin-left: 2px;
            width: 370px;
            h1 {
                font-size: 17px;
                font-weight: 400;
                cursor: pointer;
                color: #525252;
            }
            h1:hover {
                color: #ff9200;
            }
            p {
                font-size: 13px;
                line-height: 20px;
                padding-top: 12px;
                color: #666;
                height: 143px;
            }
            .user {
                height: 44px;  
                font-size: 12px;
                &-by {
                    color: #b1b1b1;
                }
                span {
                    vertical-align: 15px;
                    margin-left: 3px;
                    font-size: 13px;
                }
                &-icon {
                    width: 42px;
                    border: 1px solid #ccc;
                    border-radius: 42px;
                }
                &-name {
                    cursor: pointer;
                }
                &-name:hover {
                    color: #ff9200;
                }
                .record {
                    float: right;
                    line-height: 44px;
                    margin-left: 40px;
                    &-view,&-comment{
                        color: #a0a0a0;
                        margin-left: 20px;
                        position: relative;
                        float: right;
                        line-height: 44px;
                        margin-left: 40px;
                    }
                    &-view:before {
                        content: '';
                        display: block;
                        background: url('../../../public/pinlun.png')no-repeat left;
                        position: absolute;
                        top: 12px;
                        right:18px;
                        width: 13px;
                        height: 20px;
                        background-size: 12px;
                        margin-right:10px;
                    }
                    &-comment:before {
                        content: '';
                        display: block;
                        background: url('../../../public/see.png')no-repeat left;;
                        position: absolute;
                        top: 11px;
                        right:23px;
                        width: 15px;
                        height: 20px;
                        background-size: 16px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    .more {
        margin-top: 20px;
        width: 740px;
        height: 38px;
        color: #333;
        border-radius: 4px;
        background-color: #f9f9f9;
        line-height: 38px;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        transition-duration: 0.2s;
    }
}    
</style>


