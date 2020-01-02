<template>
    <div class="body">
        <bodyLeft></bodyLeft>
        <bodyRight></bodyRight>
    </div>
</template>

<script>
import BodyLeft from "./body/BodyLeft"
import BodyRight from "./body/BodyRight"
export default {
    name:"Bodying",
    components:{
        BodyLeft,
        BodyRight
    }
}
</script>

<style>
    .body {
        top: 22px;
        width: 980px;
        margin: 0 auto;
    }
</style>