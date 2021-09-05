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
        Schools Portal
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-25">
      <div class="_details_head">
        <h2 class="head_txt animate__animated animate__fadeIn">
          Add a new school here.
        </h2>
      </div>

      <div class="py-10 px-15 d-flex-algn-center">
        <div class="portal_div">
          <div>
            <label>Region</label> <br />
            <el-select
              v-model="selectedRegion"
              placeholder="Select region"
              class="full_width d-block mt-15"
            >
              <el-option
                v-for="region in regions"
                :key="region.id"
                :label="region.name"
                :value="region.district"
              >
              </el-option>
            </el-select>
          </div>
          <br />
          <div class="mt-15">
            <label>District</label>
            <el-select
              v-model="addSchoolForm.district_id"
              placeholder="Select district"
              class="full_width d-block mt-15"
            >
              <el-option
                v-for="district in selectedRegion"
                :key="district.id"
                :label="district.name"
                :value="district.id"
              >
              </el-option>
            </el-select>
          </div>
          <br />
          <hr />
          <div class="mt-15">
            <label>Name of school</label>
            <el-input
              v-model="addSchoolForm.name"
              class="d-block mt-15"
              type="text"
              placeholder="name of school"
            ></el-input>
          </div>
          <br />
          <hr />
          <div class="mt-15">
            <label>Embeded Google Map location</label>
            <el-input
              v-model="addSchoolForm.location"
              class="d-block mt-15"
              type="text"
              placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.42"
            ></el-input>
          </div>
          <br />
          <hr />
          <div class="mt-15">
            <label>Add before images</label>
            <input
              class="d-block mt-15"
              name="files"
              type="file"
              accept=".webp"
              multiple
              @change="uploadImage($event)"
            />
          </div>

          <div class="mt-25 float-right">
            <el-button :loading="btnLoading" type="primary" @click="addSchool"
              >Add School</el-button
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
  name: 'SchoolsPortal',
  data() {
    return {
      regions: [],
      btnLoading: false,
      selectedRegion: [],
      addSchoolForm: {
        name: '',
        district_id: null,
        location: '',
        school_images: [],
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
    uploadImage(e) {
      let images = e.target.files;
      let formData = new FormData();
      for (let image of images) {
        formData.append('images', image);
      }

      schoolsApi
        .uploadImages(formData)
        .then(result => {
          let data = result.data.image_urls;
          for (let image_url of data) {
            let url_payload = {
              image_url: image_url,
              category: 'before',
            };
            this.addSchoolForm.school_images.push(url_payload);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    addSchool() {
      this.btnLoading = true;
      schoolsApi.addSchool(this.addSchoolForm).then(result => {
        console.log(result);
        this.$notify({
          title: 'Success',
          message: 'School added successfully',
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
