<template>
  <el-container>
    <el-main>
      <header>
        <span class="activity">动态</span>
      </header>
      <section class="actiContent">
        <div class="user">
            <img src="../../assets/friend/activity/yy.jpg" class="avatar" />
            <p class="about">
                <span>PurpleBattery</span>
                <br>
                <span class="sideInfo">3月15日 13:46</span>
            </p>
            <div class="mainAcCon">
                <p>希望看到这只蜥蜴发朋友们都能获得它减肥的决心</p>
                <div>
                    <img src="../../assets/friend/activity/109951164804581406.jpg.gif">
                </div>
            </div>
        </div>
        <div class="user">
            <img src="../../assets/friend/activity/yhj.jpg" class="avatar" />
            <p class="about">
                <span>云音乐樱花酱</span>
                <br>
                <span class="sideInfo">3月16日 10:38</span>
            </p>
            <div class="mainAcCon">
                <p>
                    おはよう！小可爱樱花酱为米娜桑开启全新一周(〃'▽'〃)<br>
                    今天樱花想要分享日本人气乐队RADWIMPS的主唱野田洋次郎为鼓舞与疫情抗争的每个中国人而创作的新歌《Light The Light》！<br>
                    在这个特殊时期，樱花希望RADWIMPS的这首新歌也能为海外依然笼罩在疫情阴霾下的人们送去一点点心灵的慰藉吧~
                </p>
                <div class="song">
                    <a href="javascript:void(0)" @click="playmusic(0)">
                        <img :src="musicLists[0].imgsrc">
                    </a>
                    <p class="about">
                        <span>{{this.musicLists[0].name}}</span>
                        <br>
                        <span class="sideInfo">{{this.musicLists[0].artist}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="user">
            <img src="../../assets/friend/activity/wy.jpg" class="avatar" />
            <p class="about">
            <span>网易云音乐</span>
            <br>
            <span class="sideInfo">3月20日 17:21</span>
            </p>
            <div class="mainAcCon">
                <p>
                    每周欧美上新大赏准时开启！<br>
                    万众期待的The Weeknd新专辑正式上线打破各项流媒纪录；<br>
                    柯灰Conan Gray个人首专见证又一颗乐坛新星冉冉升起；<br>
                    小贾Justin Bieber新单"Intentions"吉他不插电版扣人心弦；<br>
                    张艺兴助阵潮爷Steve Aoki电子新单，又一破次元合作；<br>
                    老牌or新声？复古or流行？进歌单一听为快~
                </p>
                <div class="song">
                    <a href="javascript:void(0)" @click="playmusic(1)">
                        <img :src="musicLists[1].imgsrc">
                    </a>
                    <p class="about">
                        <span>[一周欧美上新] Steve Aoki联手张艺兴&will.i.am破元合作</span>
                        <br>
                        <span class="sideInfo">by 网易云音乐</span>
                    </p>
                </div>
            </div>
        </div>
      </section>
    </el-main>
    <!--侧边栏-->
    <el-aside width="253px">
      <section class="user">
        <img src="../../assets/avatar.png" class="avatar" />
        <p class="about">
          <span>Nickname</span>
          <br />
          <span class="sideInfo">About Myself</span>
        </p>
        <ul class="userInfo">
          <li class="info1">
            <p>3</p>
            <p>动态</p>
          </li>
          <li class="info2">
            <p>47</p>
            <p>关注</p>
          </li>
          <li class="info3">
            <p>6</p>
            <p>粉丝</p>
          </li>
        </ul>
      </section>
      <section class="asideSinger">
        <header>
          <span class="text">明星用户</span>
          <a href="javascript: void(0)">换一批</a>
        </header>
        <ul v-for="singer in singerList" :key="singer.id">
          <li>
            <a href="javascript: void(0)">
              <img :src="singer.img" />
              <div class="intro">
                <span>{{singer.name}}</span>
                <p>{{singer.int}}</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <section class="asideStreamer">
        <header>
          <span class="text">感兴趣的人</span>
          <a href="javascript: void(0)">换一批</a>
        </header>
        <ul v-for="streamer in streamerInfo" :key="streamer.id">
          <li>
            <a href="javascript: void(0)">
              <img :src="streamer.img" />
              <div class="intro">
                <span>{{streamer.name}}</span>
                <p>{{streamer.int}}</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </el-aside>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
    musicLists: [
        {name: 'Love You More', artist: 'RADWIMPS', imgsrc: require('../../assets/friend/activity/Light The Light.png'), songsrc: require('../../assets/music/Light The Light.mp3')},
        {name: 'Light The Light', artist: 'Steve Aoki / 张艺兴 / will.i.am', imgsrc: require('../../assets/friend/activity/yyyyz.jpg'), songsrc: require('../../assets/music/Love You More.mp3')}
    ],
    singerList: [
        {
          id: "0",
          img: require("../../assets/friend/hhq.jpg"),
          name: "胡海泉",
          int: "知名音乐人 羽泉组合成员"
        },
        {
          id: "1",
          img: require("../../assets/friend/qyy.jpg"),
          name: "祁又一",
          int: "知名乐评人、文化人、作家"
        },
        {
          id: "2",
          img: require("../../assets/friend/yd.jpg"),
          name: "有待",
          int: "INDIE DJ 独立电台主持人"
        }
      ],
      streamerInfo: [
        {
          id: "0",
          img: require("../../assets/friend/bb.jpg"),
          name: "亵渎神的大蒜",
          int: "手机联系人: 朋友1"
        },
        {
          id: "1",
          img: require("../../assets/friend/ks.jpg"),
          name: "青衫仗劍走江湖丶",
          int: "手机联系人: 朋友2"
        },
        {
          id: "2",
          img: require("../../assets/friend/mb.jpg"),
          name: "邦邦170821",
          int: "手机联系人: 朋友3"
        },
        {
          id: "3",
          img: require("../../assets/friend/qs.jpg"),
          name: "实伊",
          int: "手机联系人: 朋友4"
        },
        {
          id: "4",
          img: require("../../assets/friend/xd.jpg"),
          name: "卡尔盖什的黑夜",
          int: "手机联系人: 朋友5"
        }
      ]
    };
  },
  methods: {
    playmusic(index) {
      this.$root.autoplay = true;
      this.$root.imgSrc = this.musicLists[index].imgsrc;
      this.$root.songSrc = this.musicLists[index].songsrc;
      this.$root.name = this.musicLists[index].name;
      this.$root.artist = this.musicLists[index].artist;
    }
  }
  
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-main {
    padding-right: 40px;
    margin-right: 0;
    margin-left: 139.835px;
    width: 730px;
    border: 1px solid #d3d3d3;
    height: 100%;
    font-size: 12px;
    position: relative;
    header {
        border-bottom: 2px solid #C10D0C;
        padding-bottom: 8px;
        .activity {
            font-size: 20px;
            font-weight: normal;
            display: inline-block;
            margin-left: 12px;
        }
    }
    .actiContent {
        position: relative;
        .user {
            border-bottom: 1px solid;
            padding-bottom: 0px;
            .avatar {
                width: 45px;
                height: 45px;
                margin: 18px 15px 15px 0;
            }
            .about {
                display: inline-block;
                top: -24px;
                font-size: 14px;
                position: relative;
                color: #333;
                .sideInfo {
                    display: inline-block;
                    margin-top: 7px;
                    font-size: 12px;
                    color: #888;
                }
            }
            .mainAcCon {
                position: relative;
                top: -43px;
                font-size: 14px;
                margin-left: 60px;
                div.song {
                    height: 60px;
                    background: #f5f5f5;
                    a {
                        margin: 10px;
                        display: inline-block;
                    }
                    .about {
                        display: inline-block;
                        top: -8px;
                        font-size: 14px;
                        position: relative;
                        color: #333;
                        .sideInfo {
                            display: inline-block;
                            margin-top: 7px;
                            font-size: 12px;
                            color: #888;
                        }
                    }
                }
            }
        }
    }
  }
  .el-aside {
    margin-right: 139.835px;
    border: 1px solid #d3d3d3;
    position: relative;
    .user {
      border: 1px solid #fff;
      background-color: rgba(200, 200, 200, 0.2);
      .avatar {
        width: 62px;
        height: 62px;
        margin: 30px 15px 15px 30px;
      }
      .about {
        display: inline-block;
        position: absolute;
        margin: 0;
        font-size: 14px;
        top: 30px;
        color: #333;
        .sideInfo {
          display: inline-block;
          margin-top: 7px;
          font-size: 12px;
          color: #888;
        }
      }
      .userInfo {
        list-style: none;
        color: #666;
        margin: 0 0 10px;
        li {
          padding-right: 10px;
          display: inline-block;
          border-right: 1px solid;
          p {
            margin: 0;
          }
        }
        .info2,
        .info3 {
          padding-left: 10px;
        }
        .info3 {
          border-right: none;
        }
      }
    }
    .asideSinger {
      font-size: 12px;
      header {
        border-bottom: 1px solid #ccc;
        margin: 15px 15px auto 15px;
        padding-bottom: 8px;
        display: flex;
        justify-content: space-between;
        .text {
          color: #000;
          font-weight: 900;
        }
        a {
          color: #666;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      ul {
        padding: 0;
        margin: 15px 15px auto 15px;
        list-style: none;
        li {
          height: 45px;
          a {
            text-decoration: none;
            font-size: 12px;
            color: #666;
            height: 100%;
            img {
              float: left;
            }
            .intro {
              height: 100%;
              width: 133px;
              float: left;
              margin-left: 15px;
              span {
                margin: 8px 0 0;

                color: #000;
              }
              p {
                width: 100%;
                margin-top: 8px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
    .asideStreamer {
      font-size: 12px;
      header {
        border-bottom: 1px solid #ccc;
        margin: 15px 15px auto 15px;
        padding-bottom: 8px;
        display: flex;
        justify-content: space-between;
        .text {
          color: #000;
          font-weight: 900;
        }
        a {
          color: #666;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      }
      ul {
        padding: 0;
        margin: 15px 15px auto 15px;
        list-style: none;
        li {
          height: 40px;
          a {
            text-decoration: none;
            font-size: 12px;
            color: #666;
            height: 100%;
            img {
              float: left;
              height: 100%;
            }
            .intro {
              height: 100%;
              width: 160px;
              float: left;
              margin-left: 15px;
              span {
                display: inline-block;
                margin-top: 5px;
                color: #333;
              }
              p {
                width: 100%;
                margin-top: 5px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
}
</style>