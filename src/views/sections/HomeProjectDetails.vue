<template>
  <div>
    <el-row :gutter="5" class="home_projects">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="project_content">
          <h2 class="head_txt color_primary">OUR PROJECT OVERVIEW</h2>

          <p
            class="p_txt color_dark mt-15 animate__animated animate__backInLeft"
          >
            Free, accessible, and basic compulsory education is a legal right
            that has been conferred on the Ghanaian child. This right is
            adequately provided for by the laws of the country...
          </p>
          <br />
          <el-button
            type="primary"
            size="small"
            class="animate__animated animate__backInLeft mt-15"
            @click="$router.push('/about')"
            >Read more</el-button
          >
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <img
          src="../../assets/images/hkj_home.webp"
          alt="img"
          class="img_hkj animate__animated animate__backInRight"
        />
      </el-col>
    </el-row>

    <!-- About ret africa -->
    <el-row :gutter="5" class="home_projects hme_about mt-25">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="project_content">
          <h2 class="head_txt color_primary">ABOUT RET AFRICA</h2>

          <p
            class="
              p_txt
              color_white
              mt-15
              animate__animated animate__backInLeft
            "
          >
            Real Estate Times Africa is a continental media firm that is
            dedicated to providing credible, independent and responsible
            journalism for the broader real estate sector in Africa...
          </p>
          <br />
          <el-button
            type="primary"
            size="small"
            class="animate__animated animate__backInLeft mt-15"
            ><a
              href="https://realestatetimesafrica.com/about.html"
              target="_blank"
              >Read more</a
            >
          </el-button>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <img
          src="../../assets/images/ret_about.webp"
          alt="img"
          class="img_hkj animate__animated animate__backInRight"
        />
      </el-col>
    </el-row>

    <!-- School Models -->
    <el-row :gutter="10" class="home_projects mt-25">
      <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
        <div class="sch_model hidden-sm-and-down">
          <h2 class="head_txt color_primary">SCHOOL MODELS</h2>
        </div>
        <div class="sch_model_mobile hidden-md-and-up">
          <h2 class="head_txt color_primary">SCHOOL MODELS</h2>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
        <div>
          <el-carousel trigger="click" class="models_slide">
            <el-carousel-item>
              <img
                class="slide_responsive"
                src="../../assets/images/slider/3D.webp"
                alt="First slide"
              />
            </el-carousel-item>

            <el-carousel-item>
              <img
                class="slide_responsive"
                src="../../assets/images/slider/3D2.webp"
                alt="First slide"
              />
            </el-carousel-item>
            <el-carousel-item>
              <img
                class="slide_responsive"
                src="../../assets/images/slider/3D3.webp"
                alt="First slide"
              />
            </el-carousel-item>
            <el-carousel-item>
              <img
                class="slide_responsive"
                src="../../assets/images/slider/3D4.webp"
                alt="First slide"
              />
            </el-carousel-item>
            <el-carousel-item>
              <img
                class="slide_responsive"
                src="../../assets/images/slider/3D5.webp"
                alt="First slide"
              />
            </el-carousel-item>
            <el-carousel-item>
              <img
                class="slide_responsive"
                src="../../assets/images/slider/3D6.webp"
                alt="First slide"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.home_projects {
  border: 1px solid rgb(204, 203, 203);
  border-radius: 10px;
  padding: 0;

  .project_content {
    padding: 25px 20px 10px 25px;
  }

  .img_hkj {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin-right: -5px;
  }
}
.hme_about {
  background: #2d3748;
}
.sch_model {
  background: #2d3748;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: -5px;
}
.sch_model_mobile {
  background: #2d3748;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: -5px;
}
</style>
