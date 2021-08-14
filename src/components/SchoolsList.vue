<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      v-loading="loading"
    >
      <el-submenu
        v-for="(school, index) in schoolRegions"
        :key="index"
        :index="toString(index++)"
      >
        <template slot="title">
          <span>{{ school.district.region.name }}</span>
        </template>
        <el-menu-item-group title="District">
          <el-submenu>
            <template slot="title">{{ school.district.name }}</template>
            <el-menu-item @click="setLocalStorage(school)">{{
              school.name
            }}</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import schoolsApi from '@/api/schools';

export default {
  name: 'SchoolsList',
  data() {
    return {
      loading: true,
      schoolRegions: [],
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
          this.loading = false;
        })
        .catch(error => console.log(error));
    },
    setLocalStorage(school) {
      localStorage.setItem('selectedSchool', JSON.stringify(school));
      this.$router.replace({ name: 'School', params: { name: school.name } });
    },
    toString(num) {
      return num.toString();
    },
  },
};
</script>
