<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      v-loading="loading"
    >
      <el-submenu
        v-for="(schools, index) in schoolRegions"
        :key="index"
        :index="index + 1"
      >
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>{{ schools.district.region.name }}</span>
        </template>
        <el-menu-item-group title="District">
          <el-menu-item>{{ schools.district.name }}</el-menu-item>
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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
