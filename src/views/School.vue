<template>
  <div>
    <MainHeader />
    <div class="page_header py-40">
      <h1
        class="
          text-center
          head_txt
          color_white
          caps
          animate__animated animate__fadeInDown
        "
      >
        {{ school.name }}
      </h1>
    </div>

    <br />
    <div class="page_wrap">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <div class="school_details">
            <div class="sch_info">
              <div class="_details_head">
                <h2 class="head_txt">School Details</h2>
              </div>
              <div class="mt-15 animate__animated animate__fadeInLeft">
                <span class="sch_label">Name of School: </span>
                <span>{{ school.name }}</span>
              </div>
              <div class="mt-15 animate__animated animate__fadeInLeft">
                <span class="sch_label">District Location: </span>
                <span>{{ school.district.name }}</span>
              </div>

              <div class="mt-15 animate__animated animate__fadeInLeft">
                <span class="sch_label">Region Location: </span>
                <span>{{ school.district.region.name }}</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="_details_head">
            <h2 class="head_txt">Map Location Address</h2>
          </div>
          <iframe
            :src="school.location"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </el-col>
      </el-row>
      <br /><br />
      <div class="_details_head">
        <h2 class="head_txt">Project Status</h2>
      </div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="22">
          <div class="mt-15">
            <el-tabs type="card" stretch>
              <el-tab-pane label="Before Project">
                <div class="bg-grey">
                  <el-carousel
                    :interval="4000"
                    type="card"
                    v-if="beforeProjectImages.length > 0"
                    class="school_slide"
                  >
                    <el-carousel-item
                      v-for="image in beforeProjectImages"
                      :key="image.id"
                    >
                      <img
                        :src="image.image_url"
                        alt="image"
                        style="width: 100%"
                      />
                    </el-carousel-item>
                  </el-carousel>

                  <h2 v-else class="mt-15">No Images yet</h2>
                </div>
              </el-tab-pane>
              <el-tab-pane label="During Project">
                <div class="bg-grey">
                  <el-carousel
                    :interval="4000"
                    type="card"
                    v-if="duringProjectImages.length > 0"
                    class="school_slide"
                  >
                    <el-carousel-item
                      v-for="image in duringProjectImages"
                      :key="image.id"
                    >
                      <img
                        :src="image.image_url"
                        alt="image"
                        style="width: 100%"
                      />
                    </el-carousel-item>
                  </el-carousel>

                  <h2 v-else class="mt-15">No Images yet</h2>
                </div>
              </el-tab-pane>
              <el-tab-pane label="After Project">
                <div class="bg-grey">
                  <el-carousel
                    :interval="4000"
                    type="card"
                    class="school_slide"
                    v-if="afterProjectImages.length > 0"
                  >
                    <el-carousel-item
                      v-for="image in afterProjectImages"
                      :key="image.id"
                    >
                      <img
                        :src="image.image_url"
                        alt="image"
                        style="width: 100%"
                      />
                    </el-carousel-item>
                  </el-carousel>

                  <h2 v-else class="mt-15">No Images yet</h2>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
    <br /><br />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'School',
  components: {
    MainHeader,
    Footer,
  },
  data() {
    return {
      school: {},
      beforeProjectImages: [],
      duringProjectImages: [],
      afterProjectImages: [],
    };
  },
  created() {
    this.school = JSON.parse(localStorage.getItem('selectedSchool'));
    this.getProjectImages();
  },
  methods: {
    getProjectImages() {
      // before project images
      const beforeProject = this.school.school_images.filter(
        image => image.category == 'before'
      );
      this.beforeProjectImages = beforeProject;

      // during project
      const duringProject = this.school.school_images.filter(
        image => image.category == 'during'
      );
      this.duringProjectImages = duringProject;

      // after project
      const afterProject = this.school.school_images.filter(
        image => image.category == 'after'
      );
      this.afterProjectImages = afterProject;
    },
  },
};
</script>

<style lang="scss" scoped>
.page_header {
  background-image: linear-gradient(transparent, #060d11 96%),
    url(../assets/images/bbn.webp);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  // height: 110px;
}
.school_details {
  display: flex;
  justify-content: flex-end;

  .sch_info {
    background-color: #f9fafb;
    width: 450px;
    height: 505px;
  }

  .sch_label {
    color: #2c89df;
    font-weight: bold;
    margin-left: 10px;
  }
  span {
    font-size: 21px;
  }
}
</style>
