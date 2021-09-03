<template>
  <div class="bg-page">
    <MainHeader />
    <div class="page_header py-40">
      <h1
        class="
          text-center
          head_txt
          color_white
          animate__animated animate__fadeInDown
        "
      >
        CONTACT US
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-25">
      <div class="_details_head">
        <h2 class="head_txt animate__animated animate__fadeIn">
          Send us your questions, suggestions and reports.
        </h2>
      </div>
      <div class="py-10 px-15">
        <el-row :gutter="0" class="mt-25">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="contact_details">
              <div class="mt-30">
                <h2 class="head_txt color_primary">Postal Address</h2>
                <span class="d-block">REAL ESTATE TIMES LIMITED</span>
                <span class="d-block">P. O. Box SK 422</span>
                <span class="d-block">Sakumono, Tema.</span>
                <span class="d-block">Ghana, West Africa</span>
              </div>

              <div class="mt-30">
                <h2 class="head_txt color_primary">Telephone Numbers</h2>
                <span class="d-block">(+233) 0274206161</span>
                <span class="d-block">(+233) 03029816412</span>
              </div>

              <div class="mt-30">
                <h2 class="color_primary">Location</h2>
                <span class="d-block">First Floor, Century Plaza</span>
                <span class="d-block">Spintex Road, Accra</span>
              </div>

              <div class="mt-30">
                <h2 class="head_txt color_primary">Email Address</h2>
                <span class="d-block">info@realestatetimesafrica.com</span>
              </div>
            </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
            <div class="contact_form">
              <div>
                <h2 class="head_txt color_primary">Email us</h2>
                <p>You can also use the form below to send us an email.</p>

                <el-form
                  label-position="top"
                  label-width="100px"
                  :model="contactForm"
                  :rules="rules"
                  ref="contactForm"
                >
                  <el-form-item label="Full Name" prop="full_name">
                    <el-input
                      v-model="contactForm.full_name"
                      type="text"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="Email Address" prop="email">
                    <el-input
                      v-model="contactForm.email"
                      type="text"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="Mobile Number">
                    <el-input
                      v-model="contactForm.contact_number"
                      type="number"
                    ></el-input>
                  </el-form-item>

                  <el-form-item label="Message" prop="message">
                    <el-input
                      v-model="contactForm.message"
                      type="textarea"
                    ></el-input>
                  </el-form-item>
                </el-form>

                <div class="d-flex-align-center">
                  <el-button
                    type="primary"
                    size="small"
                    @click="submitForm('contactForm')"
                    >Submit</el-button
                  >
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <br /><br />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';
import schoolsApi from '@/api/schools';

export default {
  name: 'Contact',
  components: {
    MainHeader,
    Footer,
  },
  data() {
    return {
      contactForm: {
        full_name: '',
        email: '',
        contact_number: '',
        message: '',
      },
      rules: {
        full_name: [
          { required: true, message: 'Your name is required', trigger: 'blur' },
        ],
        email: [
          {
            required: true,
            message: 'Your email is required',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ],
        message: [
          {
            required: true,
            message: 'Enter a reason for contact',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          schoolsApi
            .sendEmail(this.contactForm)
            .then(response => {
              console.log(response);
              this.$notify({
                title: 'Success',
                message: 'Email sent successfully',
                type: 'success',
              });
            })
            .catch(error => {
              console.log(error);
              this.$notify.error({
                title: 'Error',
                message: 'Error sending message',
              });
            });
          alert('submit!');
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page_header {
  background-image: linear-gradient(transparent, #060d11 96%),
    url(../assets/images/contact-banner.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  // height: 110px;
}
p {
  line-height: 25px;
}
.contact_details {
  width: 300px;
  height: 513px;
  float: right;
  background-color: #2d3748;
  padding: 10px 10px 21px 20px;

  span {
    color: whitesmoke;
    margin-top: 5px;
  }
}
.contact_form {
  width: 315px;
  padding: 10px 10px 5px 15px;
  border: 1px solid rgb(233, 231, 231);
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
