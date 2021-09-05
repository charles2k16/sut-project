<template>
  <div>
    <div class="page_header py-40">
      <h1
        class="
          text-center
          head_txt
          color_white
          animate__animated animate__fadeInDown
        "
      >
        Districts Portal
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-25">
      <div class="_details_head">
        <h2 class="head_txt animate__animated animate__fadeIn">
          Add a new district here
        </h2>
      </div>

      <div class="py-10 px-15 d-flex-algn-center">
        <div class="portal_div">
          <div>
            <label>Region</label> <br />
            <el-select
              v-model="addDistrictForm.region_id"
              placeholder="Select region"
              class="full_width d-block mt-15"
            >
              <el-option
                v-for="region in regions"
                :key="region.id"
                :label="region.name"
                :value="region.id"
              >
              </el-option>
            </el-select>
          </div>

          <br />
          <hr />
          <div class="mt-15">
            <label>Name of District</label>
            <el-input
              v-model="addDistrictForm.name"
              class="d-block mt-15"
              type="text"
              placeholder="name of district"
            ></el-input>
          </div>
          <br />
          <hr />

          <div class="mt-25 float-right">
            <el-button :loading="btnLoading" type="primary" @click="addDistrict"
              >Add District</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schoolsApi from '@/api/schools';

export default {
  name: 'DistrictsPortal',
  data() {
    return {
      regions: [],
      btnLoading: false,
      addDistrictForm: {
        name: '',
        region_id: null,
      },
    };
  },
  created() {
    this.getRegions();
  },
  methods: {
    getRegions() {
      schoolsApi
        .getSchoolRegions()
        .then(response => {
          this.regions = response;
        })
        .catch(error => console.log(error));
    },
    addDistrict() {
      this.btnLoading = true;
      schoolsApi.addDistrict(this.addDistrictForm).then(result => {
        console.log(result);
        this.$notify({
          title: 'Success',
          message: 'District uploaded successfully',
          type: 'success',
        });
        this.btnLoading = false;
      });
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
label {
  font-size: 16px;
  font-weight: bold;
}
</style>
