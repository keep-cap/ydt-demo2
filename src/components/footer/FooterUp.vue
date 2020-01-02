<template>
    <div class="footerup">
        <div class="footerup-logo">
            <img src="../../../public/blackLogo.jpg" alt="">
        </div>
        <div class="footerup-right">
            <ul>
                <h1 class="title">关于</h1>
                <li>关于我们</li>
                <li>联系我们</li>
                <li>用户协议</li>
            </ul>
        </div>

        <div class="footerup-right">
            <ul>
                <h1 class="title">一兜糖使用指南</h1>
                <li>全屋记发帖指南</li>
                <li>文章撰写指南</li>
                <li>加入装修交流群</li>
            </ul>
        </div>

        <div class="footerup-right" style="margin-left:90px;">
            <ul class="attention">
                <h1 class="title">关注我们</h1>
                <li class="attention-wechat"></li>
                <li class="attention-newlang"></li>
                <li class="attention-download">下载APP</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'footerup',
}
</script>

<style lang="scss">
.footerup {
    width: 980px;
    height: 156px;
    margin: 0 auto;
    &-logo {
        float: left;
        margin-top: 26px;
        margin-right: 50px;
        img {
            cursor: pointer;
            width: 130px;
        }
    }
    &-right {
        margin-left: 25px;
        margin-right: 80px;
        margin-top: 32px;
        float: left;
        .title { 
            color: #808080;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 20px;
        }
        li {
            line-height: 20px;
        }
        li:hover {
            color: white;
        }
        .attention {
            li {
                height: 40px;
                float: left;
                -webkit-transition-duration: 0.4s; /* Safari */
                transition-duration: 0.8s;
                position: relative;
                margin-right: 20px;
            }
            &-wechat {
                width: 40px;
                background-color: #44c996;
                border-radius: 50%;
            }
            &-wechat:hover{
                background-color: #5de6b1;
            }
            &-wechat:before {
        		background: url('../../../public/wx.png') no-repeat;
            }
            &-newlang {
                width: 40px;
                background-color: #fd5562;
                border-radius: 50%;
            }
            &-newlang:hover {
                background: #fe6e79;
            }
            &-newlang:before {
        		background: url('../../../public/wb.png') no-repeat;
            }
            &-download {
                width: 130px;
                background-color: #f7b244;
                border-radius: 20px;
                color: white;
                line-height: 40px !important;
                text-align: center;
                font-size: 14px;
            }
            &-download:hover {
                background-color: #f6c06a;
                font-size: 16px;
            }
            li:before {
        		content: '';
        		position: absolute;
                width:25px;
		        height: 25px;
		        background-size: 25px;
                left: 7px;
                top: 8px;
            }
        }
    }
}   
</style>