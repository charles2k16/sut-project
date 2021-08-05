<template>
  <div>
    <div class="full_width d-flex-justify-between">
      <div class="header_donate">
        <div>
          <a href="/"
            ><img
              src="../assets/images/logos/logo_ret.webp"
              class="header_image_ret"
              alt="RET LOGO"
          /></a>
        </div>

        <div>
          <a href="https://realestatetimesafrica.com/" target="_blank"
            ><img
              src="../assets/images/logos/ret_text.webp"
              class="header_image_rel"
              alt="LINE"
          /></a>
        </div>

        <div>
          <a href="/about-valco" target="_blank"
            ><img
              src="../assets/images/logos/valco.webp"
              class="header_image_val mt--15"
              alt="VALCO LOGO"
          /></a>
        </div>

        <div>
          <a href="https://moe.gov.gh/" target="_blank"
            ><img
              src="../assets/images/logos/moe.webp"
              class="header_image_moe mt--15"
              alt="MOE LOGO"
          /></a>
        </div>

        <div>
          <a href="https://ges.gov.gh/" target="_blank"
            ><img
              src="../assets/images/logos/ges_logo.webp"
              class="header_image_ges mt--15"
              alt="ges"
          /></a>
        </div>

        <div>
          <a href="https://energymin.gov.gh/" target="_blank"
            ><img
              src="../assets/images/logos/energy.webp"
              class="header_image_ern mt--15"
              alt="eog"
          /></a>
        </div>
      </div>
      <div class="d-flex-align-center">
        <el-button type="primary" class="donate_btn">Donate</el-button>
      </div>
    </div>

    <div class="nav_bar">
      <div class="d-flex-center-between page_margin">
        <ul class="home_links">
          <li>Home</li>
          <li>About Project</li>
          <li>About Partner</li>
          <li>Contact us</li>
        </ul>

        <div class="w-20">
          <el-input
            placeholder="Type something"
            prefix-icon="el-icon-search"
            v-model="searchInput"
            class="header_search_input"
          >
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      searchInput: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.header_donate {
  padding: 2px 10px 10px 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-right: 20px;
  }
  img.header_image_ret {
    height: 90px;
  }
  img.header_image_rel {
    height: 90px;
  }
  img.header_image_val {
    height: 110px;
  }
  img.header_image_moe {
    height: 120px;
  }
  img.header_image_ges {
    height: 150px;
  }
  img.header_image_ern {
    height: 130px;
  }
}
.donate_btn {
  font-size: 20px;
  margin-right: 28px;
  height: 55px;
  width: 120px;
}
.nav_bar {
  background: #2d89df;
  height: 55px;
  padding: 2px 0px 10px 6px;

  .home_links {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      float: left;
      color: rgb(238, 230, 230);
      margin-right: 20px;
      font-size: 18px;
    }
  }
}
.header_search_input {
  width: 100%;
}
</style>
