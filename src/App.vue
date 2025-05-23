<template>
  <div class="app">
    <header>
      <h1><a href="#">news-homepage</a></h1>
      <nav aria-label="Main Navigation">
        <button class="mobile-only" aria-controls="nav-popup" @click="showPopup = true">open nav</button>
        <Popup id="nav-popup" v-model="showPopup" class="mobile-only">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </Popup>
        <ul class="desktop-only">
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article aria-labelledby="title">
        <img aria-hidden="true" src="./assets/images/image-web-3-mobile.jpg" alt="">
        <div class="msg">
          <h2 id="title">The Bright Future of Web 3.0?</h2>
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?
          </p>
          <button aria-label="Read more about Web 3.0">
            READ MORE
          </button>
        </div>
      </article>
      <section class="new">
        <h3>New</h3>
        <ul>
          <li v-for="(item, index) in newList" :key="index">
            <h4><a href="#">{{item.title}}</a></h4>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </section>
      <section class="hot">
          <ul>
            <li v-for="item in hotList" :key="item.id">
              <a href="#">
                <div class="pic"><img :src="require(`@/assets/images/${item.image}`)" alt="" aria-hidden="true"></div>
                <div class="msg">
                  <h3>{{item.id}}</h3>
                  <h4>{{item.title}}</h4>
                  <p>{{item.content}}</p>
                </div>
              </a>
            </li>
          </ul>
      </section>
    </main>
  </div>
</template>

<script>
import Popup from './components/Popup.vue'
import newsData from '@/assets/data/index.json'
export default {
  name: 'App',
  data () {
    return {
      hotList: [],
      newList: [],
      showPopup: false
    }
  },
  components: { Popup },
  methods: {
    getHotList () {
      this.hotList = newsData.hot
      console.log(this.hotList)
    },
    getNewList () {
      this.newList = newsData.new
      console.log(this.newList)
    }
  },
  created () {
    this.getHotList()
    this.getNewList()
  }
}
</script>

<style lang="less">
@import '@/styles/style.less';
</style>
