<template>
<section class="rankinglist">
    <header>
        <span class="iconfont iconbiaotiyuanquan">
            榜单
        </span>
        <span class="iconfont iconjiantou">更多</span>
    </header>
    <div class="container">
        <dl class="hotRankList">
            <dt>
                <img src="../../assets/discover/hotRankList.png">
                <span>云音乐飙升榜</span>
            </dt>
            <dd>
                <ul>
                    <li v-for="item in hotRankList" :key="item.id"><span>{{item.index}}</span>{{item.name}}</li>
                    <li class="last"><span>9</span>迪士尼在逃公主</li>
                    <li class="more">查看全部></li>
                </ul>
            </dd>
            
        </dl>
        <dl class="newSong">
            <dt>
                <img src="../../assets/discover/newSong.png">
                <span>云音乐新歌榜</span>
            </dt>
            <dd>
                <ul>
                    <li v-for="item in newSong" :key="item.id"><span>{{item.index}}</span>{{item.name}}</li>
                    <li class="last"><span>9</span>月牙湾 (Live)</li>
                    <li class="more">查看全部></li>
                </ul>
            </dd>
    
        </dl>
        <dl class="original">
            <dt>
                <img src="../../assets/discover/original.png">
                <span>网易原创歌曲榜</span>
            </dt>
            <dd>
                <ul>
                    <li v-for="item in hotRankList" :key="item.id"><span>{{item.index}}</span>{{item.name}}</li>
                    <li class="last"><span>9</span>月牙湾 (Live)</li>
                    <li class="more">查看全部></li>
                </ul>
            </dd>
        </dl>
    </div>
        
</section>
</template>
<script>
export default {
    data(){
        return {
            RecLists: [
                {id: '0', img: require('../../assets/discover/asdSinImg/zhm.jpg'), name: '[欧美私人订制] 最懂你的欧美推荐 每日更新35首'},
                {id: '1', img: require('../../assets/discover/asdSinImg/fine.jpg'), name: '单身很惨吗 当然不'},
                {id: '2', img: require('../../assets/discover/asdSinImg/wxl.jpg'), name: '愿你简单快乐如小孩，坚强勇敢像大人', },
                {id: '3', img: require('../../assets/discover/asdSinImg/zl.jpg'), name: '音乐人赵雷'},
                {id: '4', img: require('../../assets/discover/asdSinImg/wsb.jpg'), name: '王三溥'}
            ],
            
            hotRankList: [
                {id: '0', name: 'Baby, До свидания (达尼亚) (Live)', index: '1'},
                {id: '1', name: '神树 (Live)', index: '2'},
                {id: '2', name: '月牙湾 (Live)', index: '3'},
                {id: '3', name: '张三的歌 (Live)', index: '4'},
                {id: '4', name: '不难 (Live)', index: '5'},
                {id: '5', name: '想见你想见你想见你', index: '6'},
                {id: '6', name: '与我无关', index: '7'},
                {id: '7', name: '我用所有报答爱 (Live)', index: '8'},
                
            ],
            newSong: [
                {id: '0', name: '神树 (Live)', index: '1'},
                {id: '1', name: '我们 (Live)', index: '2'},
                {id: '2', name: 'Baby, До свидания (达尼亚) (Live)', index: '3'},
                {id: '3', name: '平凡天使', index: '4'},
                {id: '4', name: '蓝', index: '5'},
                {id: '5', name: 'Monsters (Live)', index: '6'},
                {id: '6', name: '最后的外卖', index: '7'},
                {id: '7', name: '朋友请听好 (易烊千玺版)', index: '8'}
            ],
            original: [
                {id: '0', name: '春天怀疑 (from 王小苗诗集《邪恶的纯真》pp. 92-95.)', index: '1'},
                {id: '1', name: '天鹅', index: '2'},
                {id: '2', name: '弹雨', index: '3'},
                {id: '3', name: 'I‘m not a rapper', index: 4},
                {id: '4', name: '蓝', index: '5'},
                {id: '5', name: 'DAZE 宿醉', index: '6'},
                {id: '6', name: '我是我，但不仅仅是我', index: '7'},
                {id: '7', name: '太阳照常升起', index: '8'}
            ]
        }
    }
}
</script>>
<style lang="less" scoped>
.rankinglist{
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
        .iconjiantou {
            font-size: 12px;
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
        }
    }
    .container {
        background-color: #f5f5f5;
        display: flex;
        dl {
            flex: 1;
            border: 1px solid #d3d3d3;
            dt {
                margin: 20px 0 16px 19px;
                img {
                    width: 80px;
                    height: 80px;
                }
                span {
                    font-size: 14px;
                    font-weight: 700;
                    display: inline-block;
                    position: relative;
                    bottom: 55px;
                    left: 10px;
                }
            }
            dd {
                font-size: 12px;
                margin-left: 0;
                ul {
                    list-style: none;
                    padding-left: 0;
                    li {
                        overflow: hidden;
                        text-overflow: ellipsis;          
                        span {
                            margin: 8px 10px 8px 19px;
                            white-space: nowrap;
                            display: inline-block;
                            font-size: 15px;
                        }
                    }
                    li:nth-child(odd) { 
                        background-color: #d1d1d1;
                    }
                    li.class {
                        margin-bottom: 0;
                    }
                    li.more {
                        float: right;
                        margin: 10px 50px 10px auto; 
                    }
                }      
            }
        }
    }
}
</style>



