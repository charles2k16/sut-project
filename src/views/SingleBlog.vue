<template>
  <div>
    <MainHeader />
    <div class="page_header py-40">
      <h1
        class="
          text-center
          head_txt
          color_white
          animate__animated animate__fadeInDown
        "
      >
        {{ blog.title }}
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-15">
      <div class="py-10 px-15">
        <img :src="blog.image.url" alt="" width="100%" />
        <p class="mt-15" v-html="blog.content"></p>
      </div>
    </div>

    <br /><br />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'SingleBlog',
  components: {
    MainHeader,
    Footer,
  },
  data() {
    return {
      blog: {},
    };
  },
  created() {
    this.blog = JSON.parse(sessionStorage.getItem('blog'));
  },
};
</script>

<style lang="scss" scoped>
.page_header {
  background-image: linear-gradient(transparent, #060d11 96%),
    url(../assets/images/mmm.webp);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  // height: 110px;
}
p {
  line-height: 25px;
}
</style>
