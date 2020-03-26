<template>
    <section class="myvideo">
        <header>
            <span class="videos">
                我的视频(2) 
            </span>
        </header>
        <ul class="videolists">
        <li>
        
            <img @click="playvideo('/vincent')" src="../../assets/myvideo/Vincent.jpg">  
            <p>
                <span class="videoname" title="Vincent">
                    Vincent
                </span><br>
                <span class="artist"> Don McLean </span>
            </p>
        </li>
        <li class="nextli">
            
            <img @click="playvideo('/planet')" src="../../assets/myvideo/planetラムジ日语教学版，绝对是网易云最全版本.jpg">
      
            <p>
                <span class="videoname" title="【行星】planetラムジ日语教学版，绝对是网易云最全版本">
                    【行星】planetラムジ日语教学版，绝对是网易云最全版本
                </span><br>
                <span class="fixedword">by</span><span class="artist">叮咚日语歌</span>
            </p>
        </li>
    </ul>
        
    </section>
</template>
<script>
export default {
    
    methods: {
        playvideo(key){
            this.$router.push(key);
        }
    }
}
</script>
<style lang="less" scoped>
.myvideo {
    margin-bottom: 200px;
    header {
        border-bottom: 2px solid #C10D0C;
        padding-bottom: 8px;
        .videos {
            font-size: 24px;
        }
    }
    .videolists {
        padding: 0;
        margin: 0;
        list-style: none;
        
        li {
            padding: 10px 0;
            position: relative;
            display: inline-block;
            img {
                width: 159px;
                height: 90px;
                cursor: pointer;
            }
            p {
                margin: 0;
                width: 159px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                color: #000;
                .videoname {
                    font-size: 14px;
                    color: #000;
                }
                .fixedword {
                    display: inline-block;
                    margin-right: 10px;
                }
                .artist {
                    color: #666;
                    font-size: 12px;
                }
            }
                
        }
        li.nextli {
            margin-left: 10px;
        }
    }
}
</style>>