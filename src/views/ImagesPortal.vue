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
        Images Portal
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-25">
      <div class="_details_head">
        <h2 class="head_txt animate__animated animate__fadeIn">
          Add a new image here.
        </h2>
      </div>

      <div class="py-10 px-15 d-flex-algn-center">
        <div class="portal_div">
          <div>
            <label>Name of School</label> <br />
            <el-select
              v-model="school_id"
              placeholder="Select school"
              class="full_width d-block mt-15"
            >
              <el-option
                v-for="school in schools"
                :key="school.id"
                :label="school.name"
                :value="school.id"
              >
              </el-option>
            </el-select>
          </div>
          <br />
          <div class="mt-15">
            <label>Add before image(s)</label>
            <input
              class="d-block mt-15"
              name="files"
              type="file"
              accept=".webp"
              multiple
              @change="uploadImage($event, 'before')"
            />
          </div>
          <br />
          <hr />
          <div class="mt-15">
            <label>Add during image(s)</label>
            <input
              class="d-block mt-15"
              name="files"
              type="file"
              accept=".webp"
              multiple
              @change="uploadImage($event, 'during')"
            />
          </div>
          <br />
          <hr />
          <div class="mt-15">
            <label>Add After image(s)</label>
            <input
              class="d-block mt-15"
              name="files"
              type="file"
              accept=".webp"
              multiple
              @change="uploadImage($event, 'after')"
            />
          </div>

          <div class="mt-25 float-right">
            <el-button type="primary" @click.prevent="addSchoolImages"
              >Add Image(s)</el-button
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
  name: 'ImagesPortal',
  data() {
    return {
      school_id: null,
      school_images: [],
      schools: [],
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
          this.schools = response;
        })
        .catch(error => console.log(error));
    },
    uploadImage(e, type) {
      console.log(e.target.files);
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
              category:
                type == 'before'
                  ? 'before'
                  : type == 'after'
                  ? 'after'
                  : 'during',
            };
            this.school_images.push(url_payload);
          }
          console.log(this.school_images);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addSchoolImages() {
      let school_image_payload = {
        school_id: this.school_id,
        image_urls: this.school_images,
      };
      schoolsApi.addSchoolImages(school_image_payload).then(result => {
        console.log(result.data);
        this.$notify({
          title: 'Success',
          message: 'Images uploaded successfully',
          type: 'success',
        });
        // window.location.reload();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page_header {
  background-image: linear-gradient(transparent, #060d11 96%),
    url(../assets/images/vtf.webp);
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
