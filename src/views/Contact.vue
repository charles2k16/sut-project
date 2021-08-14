<template>
  <div class="bg-page">
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
        CONTACT US
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-15">
      <div class="_details_head">
        <h2 class="head_txt animate__animated animate__fadeIn">
          School Details
        </h2>
      </div>
      <div class="py-10 px-15">
        <el-row :gutter="20" class="mt-15">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14"> </el-col>

          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10"> </el-col>
        </el-row>
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
  name: 'Contact',
  components: {
    MainHeader,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.page_header {
  background-image: linear-gradient(transparent, #060d11 96%),
    url(../assets/images/contact-banner.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  // height: 110px;
}
p {
  line-height: 25px;
}
</style>
