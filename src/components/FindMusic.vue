<template>
<div>
    <ul class="topMenu" >
        <li @click="toPage('/discover')" id="reco">推荐</li>
    </ul>
    <router-view></router-view>
</div> 
</template>
<script>
export default {
    methods: {
        toPage(receiver){
            this.$router.push(receiver);
            document.getElementsByClassName('active')[0].removeAttribute('class');
            event.currentTarget.setAttribute('class', 'active');
        }
    },
    mounted(){
         document.getElementById('reco').setAttribute('class', 'active');
    }
}
</script>
<style lang="less" scoped>
ul {
    margin: 0;
    background: #c20c0c;
    padding-left: 280px;
    
    li {
        vertical-align: middle;
        display: inline-block;
        border-radius: 25px;
        margin: 5px auto;
        padding: 3px 14px;
        margin-right: 70px;
        font-size: 12px;
        color: #fff;
    }
    li:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, .3);
    }
    li.active {
       background-color:rgba(0, 0, 0, .3);
    }
}
</style>