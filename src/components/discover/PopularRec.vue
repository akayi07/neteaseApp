<template>
<section class="popularR">
<header>
    <span class="iconfont iconbiaotiyuanquan">
        热门推荐
    </span>
    <div class="recmTop">
        <a href="javascript:void(0)">华语</a>
        <span>|</span>
        <a href="javascript:void(0)">流行</a>
        <span>|</span>
        <a href="javascript:void(0)">摇滚</a>
        <span>|</span>
        <a href="javascript:void(0)">民谣</a>
        <span>|</span>
        <a href="javascript:void(0)">电子</a>
    </div>
    <span class="iconfont iconjiantou">更多</span>
</header>

<div class="container">
    <div class="popuLists" v-for="popuList in popuLists" :key="popuList.id">
        <img :src="popuList.img">
        <a>{{popuList.name}}</a>
    </div>
</div>
</section>
</template>
<script>
export default {
    data(){
        return {
            popuLists: [
                {id: '0', img: require('../../assets/discover/PopularRec/yzfcns.jpg'), name: '优质的翻唱男声'},
                {id: '1', img: require('../../assets/discover/PopularRec/cglh33.png'), name: '【崇光的灵魂补习班】第 三 十 三 期丨每一个清晨日暮，有我。'},
                {id: '2', img: require('../../assets/discover/PopularRec/bwcn.png'), name: '卑微的承诺', },
                {id: '3', img: require('../../assets/discover/PopularRec/srwxbz.jpg'), name: '诗人篇 | 那些藏在音乐里的文学宝藏'},
                {id: '4', img: require('../../assets/discover/PopularRec/nvsc100.jpg'), name: '男说女唱 | 含糖度39%'},
                {id: '5', img: require('../../assets/discover/PopularRec/om35.png'), name: '[欧美私人订制] 最懂你的欧美推荐 每日更新35首'},
                {id: '6', img: require('../../assets/discover/PopularRec/nxhz.jpg'), name: '那个说爱你一辈子的人 现在还在你身边吗'},
                {id: '7', img: require('../../assets/discover/PopularRec/yswkt.png'), name: '【艺术微课堂】还记得《猫和老鼠》中的这段旋律吗？'}
            ]
        }
    }
}
</script>>
<style lang="less" scoped>
.popularR {
    header {
        border-bottom: 2px solid #C10D0C;
        padding-bottom: 8px;
        position: relative;
        .iconbiaotiyuanquan {
            font-size: 20px;
            font-weight: normal;
            display: inline-block;
            margin-left: 12px;
        }
        .recmTop {
            color: #666;
            display: inline-block;
            margin-left: 15px;
            font-size: 12px;
            a { 
                text-decoration: none;
                color: #666;
            }
            span {
                display: inline-block;
                margin: 0 12px 0 12px;
            }     
        }
        .iconjiantou {
            font-size: 12px;
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
        }
    }
    .container {
        margin-top: 18px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .popuLists {
            width: 140px;
            height: 205px;
            margin-bottom: 30px;
            img {
                width: 140px;
                height: 140px;
                margin-bottom: 5px;
            }
            a {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient:vertical;
                font-size: 14px;
                width: 100%;
                text-decoration: none;
            }
        }

     
    }
    
}
</style>

