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

        <div class="footerup-right left" style="margin-left:90px;">
            <ul>
                <h1 class="title">关注我们</h1>
                <li class="wechat"></li>
                <li class="newlang"></li>
                <li class="download">下载APP</li>
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
    }
    .wechat {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        background-color: #44c996;
        float: left;
        border-radius: 50%;
        transition-duration: 0.8s;
        position: relative;
    }
    .wechat:before {
		content: '';
		position: absolute;
		background: url('../../../public/wx.png') no-repeat;
		width:25px;
		height: 25px;
		background-size: 25px;
		left: 7px;
        top: 8px;
	}
    .more:hover {
        color: #f7b424
    }
    .wechat:hover {
        background-color: #5de6b1;
    }
    .newlang {
        width: 40px;
        height: 40px;
        background-color: #fd5562;
        float: left;
        border-radius: 50%;
        margin-right: 20px;
        transition-duration: 0.8s;
        position: relative;
    }
    .newlang:before {
		content: '';
		position: absolute;
		background: url('../../../public/wb.png') no-repeat;
		width:25px;
		height: 25px;
		background-size: 25px;
		left: 7px;
        top: 8px;
	}
    .newlang:hover {
        background: #fe6e79;
    }
    .download {
        width: 130px;
        height: 40px;
        float: left;
        background-color: #f7b244;
        border-radius: 20px;
        margin-right: 20px;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.8s;
        color: white;
        line-height: 40px !important;
        text-align: center;
        font-size: 14px;
    }
    .download:hover {
        background-color: #f6c06a;
        font-size: 16px;
    }
}   
</style>