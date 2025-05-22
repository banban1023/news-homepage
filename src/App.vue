<template>
  <div class="app">
    <header>
      <h1><a href="#">news-homepage</a></h1>
      <nav>
        <button @click="showPopup = true">打开弹窗</button>
        <Popup v-model="showPopup">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Popup>
      </nav>
    </header>
    <main>
      <article>
        <img src="./assets/images/image-web-3-mobile.jpg" alt="">
        <h2>The Bright Future of Web 3.0?</h2>
        <p>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
          But is it really fulfilling its promise?
        </p>
        <button>
          READ MORE
        </button>
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
              <img :src="require(`@/assets/images/${item.image}`)" alt="">
              <div class="msg">
                <h3>{{item.id}}</h3>
                <h4><a href="#">{{item.title}}</a></h4>
                <p>{{item.content}}</p>
              </div>
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
