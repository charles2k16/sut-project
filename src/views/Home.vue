<template>
  <div>
    <MainHeader />

    <el-carousel trigger="click" class="home_slide">
      <el-carousel-item>
        <div class="home_carousel_bg">
          <div class="div_opacity">
            <h3 class="animate__animated animate__fadeInDown slide_h">
              Valco Trust Fund To Build All Schools Under Trees
            </h3>
            <br />
            <p class="animate__animated animate__slideInRight slide_p">
              A launch of a campaign to rid the country of all schools under
              trees by real estate Africa is making major...
            </p>
            <br />
            <el-button
              type="primary"
              size="small"
              class="animate__animated animate__backInRight"
              >Read more</el-button
            >
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item>
        <img
          style="width: 100%"
          src="../assets/images/slider/web_donate.webp"
          alt="First slide"
        />
      </el-carousel-item>
    </el-carousel>
    <br />
    <div class="page_wrap">
      <div>
        <img
          src="../assets/images/donate_banner.jpg"
          alt="banner"
          width="100%"
          class="animate__animated animate__backInUp"
        />
      </div>

      <div class="mt-30">
        <el-row :gutter="50">
          <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
            <div class="hidden-sm-and-down">
              <div class="active_schl_head">
                <h1>Active Schools</h1>
              </div>

              <schools-list />
            </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17">
            <HomeProjectDetails />
          </el-col>
        </el-row>
      </div>
    </div>
    <br /><br />
    <div class="video_snippet">
      <iframe
        src="https://www.youtube.com/embed/BQqD0lEMnik"
        title="YouTube video player"
        framebgiorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="full_width"
        style="height: 400px"
      ></iframe>
    </div>
    <br /><br />
    <div class="page_wrap">
      <div>
        <h2 class="head_txt color_primary">Project News & Insights</h2>
        <BlogLists />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';
import SchoolsList from '@/components/SchoolsList.vue';
import HomeProjectDetails from './sections/HomeProjectDetails.vue';
import BlogLists from '@/components/BlogLists.vue';

export default {
  name: 'Home',
  components: {
    MainHeader,
    Footer,
    SchoolsList,
    HomeProjectDetails,
    BlogLists,
  },
};
</script>

<style lang="scss" scoped>
.home_carousel_bg {
  height: 500px;
  background-image: url('../assets/images/slider/BGB_carousel.webp');
  background-size: cover;
  position: relative;
  padding: 60px 0px 0px 60px;

  .div_opacity {
    position: absolute;
    left: 4.85%;
    right: 50.48%;
    top: 18.6%;
    bottom: 24.6%;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    padding: 25px 40px 0px 25px;

    h3 {
      color: #ffffff;
      font-size: 36px;
      line-height: 44px;
      mix-blend-mode: normal;
    }

    p {
      color: white;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
    }
  }
}
.active_schl_head {
  background: #2c89df;
  border-radius: 5px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-weight: bold;
    font-size: 24px;
    line-height: 132.52%;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
