<template>
    <div class="endbot">
        <div class="endbot-up">
            免责声明：本站部分内容由用户自行上传，如权利人发现误传内容的情形，请及时与本站联系。
        </div>
        <div class="endbot-down">
            <div class="left">
                <span>广州壹糖网络科技有限公司</span>
                <span class="line">|</span>
                <span>隐私政策</span>
            </div>
            <div class="source">
                <span class="need">yidoutang.com</span>
                <span>All Rights Reserved.</span>
                <span class="need">粤ICP备10232946号-3</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Endbot',
}
</script>

<style lang="scss">
.endbot {
    width: 980px;
    height: 86px;
    margin: 0 auto;
    line-height: 30px;
    .left {
        float: left;
        .line {
            margin: 0 20px;
        }
        span:hover {
            color: white;
            cursor: pointer;
            background-color: #525252!important;
        }
    }
    .source {
        float: right;
        .need:hover {
            color: white;
            cursor: pointer;
        }
    }
}
</style>