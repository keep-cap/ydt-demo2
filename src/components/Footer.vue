<template>
    <div class="footer">
        <footerUp></footerUp>
        <footerMiddle></footerMiddle>
        <footerBottom></footerBottom>
    </div>
</template>

<script>
import FooterBottom from "./footer/FooterBottom"
import FooterMiddle from "./footer/FooterMiddle"
import FooterUp from "./footer/FooterUp"
export default {
    name: "Engding",
    components: {
        FooterBottom,
        FooterMiddle,
        FooterUp
    }
}
</script>

<style>
    .footer {
        margin-top: 20px;
        width: 100%;
        height: 366px;
        background-color: #1a1a1a;
        float: left;
        color: #525252;
        font-size: 12px;
    }
    ul {
        list-style: none;
    }
    li:hover {
        cursor: pointer;
    }
</style>