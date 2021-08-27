<template>
  <div>
    <div class="full_width d-flex-justify-between bg-white">
      <div class="header_donate animate__animated animate__backInLeft">
        <div>
          <img
            src="../assets/images/logos/logo_ret.webp"
            class="header_image_ret"
            alt="RET LOGO"
            @click="$router.push('/')"
          />
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
          <img
            src="../assets/images/logos/valco.webp"
            class="header_image_val mt--15"
            alt="VALCO LOGO"
            @click="$router.push('/partner')"
          />
        </div>

        <div class="hide-sm">
          <a href="https://moe.gov.gh/" target="_blank"
            ><img
              src="../assets/images/logos/moe.webp"
              class="header_image_moe mt--15"
              alt="MOE LOGO"
          /></a>
        </div>

        <div class="hide-sm">
          <a href="https://energymin.gov.gh/" target="_blank"
            ><img
              src="../assets/images/logos/energy.webp"
              class="header_image_ern mt--15"
              alt="eog"
          /></a>
        </div>
        <div class="hide-sm">
          <a href="https://ges.gov.gh/" target="_blank"
            ><img
              src="../assets/images/logos/ges_logo.webp.png"
              class="header_image_ges mt--15"
              alt="ges"
          /></a>
        </div>
      </div>
      <div class="d-flex-align-center">
        <a
          class="donate_btn"
          href="https://dashboard.flutterwave.com/donate/5yatezupvysx"
          target="_blank"
          >Donate</a
        >
      </div>
    </div>

    <div class="nav_bar" id="navbar">
      <div class="d-flex-center-between page_margin">
        <ul class="home_links hidden-sm-and-down">
          <li @click="$router.push('/')">
            <router-link to="/" exact-active-class="active-link"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/about" exact-active-class="active-link"
              >About Project</router-link
            >
          </li>
          <li>
            <router-link to="/partner" exact-active-class="active-link"
              >About Partner</router-link
            >
          </li>
          <li>
            <router-link to="/contact" exact-active-class="active-link"
              >Contact us</router-link
            >
          </li>
        </ul>
        <el-dropdown class="hidden-md-and-up">
          <span class="material-icons color_white"> menu </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/" exact-active-class="active-link"
                >Home</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item>
              <router-link to="/about" exact-active-class="active-link"
                >About Project</router-link
              >
            </el-dropdown-item>
            <el-dropdown-item
              ><router-link to="/partner" exact-active-class="active-link"
                >About Partner</router-link
              ></el-dropdown-item
            >
            <el-dropdown-item>
              <router-link to="/contact" exact-active-class="active-link"
                >Contact us</router-link
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>

        <div class="w-20">
          <el-select
            v-model="searchInput"
            filterable
            remote
            reserve-keyword
            placeholder="Search by school name"
            :remote-method="searchMethod"
            :loading="loading"
            class="header_search_input"
          >
            <el-option
              v-for="school in options"
              :key="school.id"
              :label="school.name"
              :value="school.district.region.name"
              @click="setLocalStorage(school)"
            >
              <span style="float: left" @click="setLocalStorage(school)">{{
                school.name
              }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                school.district.region.name
              }}</span>
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schoolsApi from '@/api/schools';

export default {
  name: 'MainHeader',
  data() {
    return {
      searchInput: [],
      loading: false,
      schoolRegions: [],
      options: [],
    };
  },
  created() {
    this.getSchools();
  },
  methods: {
    getSchools() {
      schoolsApi
        .getSchoolsList()
        .then(response => {
          this.schoolRegions = response;
        })
        .catch(error => console.log(error));
    },
    searchMethod(query) {
      if (query !== '') {
        this.loading = true;

        this.options = this.schoolRegions.filter(item => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });

        this.loading = false;
      } else {
        this.options = [];
      }
    },
    setLocalStorage(school) {
      localStorage.setItem('selectedSchool', JSON.stringify(school));
      this.$router.replace({ name: 'School', params: { name: school.name } });
    },
  },
};
</script>

<style lang="scss" scoped>
.header_donate {
  padding: 2px 10px 10px 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  img {
    margin-right: 20px;
  }
}
.donate_btn {
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  margin-right: 28px;
  height: 55px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #2d89df;
  border-color: #2d89df;
  border-radius: 5px;
}
.nav_bar {
  background: #2d89df;
  height: 55px;
  padding: 2px 0px 10px 6px;
  width: 100%;
  z-index: 1000;

  .home_links {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      float: left;
      color: rgb(238, 230, 230);
      margin-right: 20px;
      font-size: 16px;
      cursor: pointer;
    }
    li:hover {
      color: rgb(172, 172, 206);
    }
  }
}
.header_search_input {
  width: 100%;
}
</style>
