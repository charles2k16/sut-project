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
        VALCO TRUST FUND
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-15">
      <div class="py-10 px-15">
        <h1 class="head_txt color_primary mt-15">INSTITUTIONAL PROFILE</h1>

        <el-row :gutter="20" class="mt-15">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
            <p>
              <b>VALCO Trust Fund</b> is a charitable organization that was set
              up by the Volta Aluminum Company <b>(VALCO)</b> in October 23,
              1971. The Edgar Kaiser, owner of Kaiser Corporation of United
              State of America who established the Volta Aluminum Company
              <b>(VALCO)</b>, set it up.
            </p>

            <p class="mt-15">
              The creation of the <b>VALCO TRUST FUND</b> was the outcome of an
              understanding between Kaiser Corporation of the U.S.A and the
              Government of Ghana. This arrangement constituted a novel
              relationship between big international company like
              <b>VALCO</b> and a developing country like Ghana.
            </p>
            <p>
              It was novel because in addition to the annual payment of
              legitimate corporate taxes by <b>VALCO</b> as a company operating
              in Ghana, the company was obliged to make annual payment from
              their net earnings to the fund, which shall be used for education
              and science and for charitable purposes or projects of direct
              benefits to the sovereign people of Ghana.
            </p>
            <p class="mt-15">
              It was initially set up as a private charity organization because
              VALCO was a private company until June 2008, when Government of
              Ghana assumed absolute ownership and control of Volta Aluminum
              Company <b>(VALCO)</b> and all its assets.
            </p>
          </el-col>

          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
            <img
              src="../assets/images/vtf.webp"
              alt="vtf"
              class="full_width radius-5"
            />
          </el-col>
        </el-row>

        <div class="mt-15 objective">
          <h1 class="head_txt color_primary">OBJECTIVE OF THE FUND</h1>
          <p class="mt-15">
            The advancement of education and science for the benefit of
            Ghanaians. The carrying out of such social and development projects
            that are charitable in purpose and shall be beneficial to the people
            of Ghana.
          </p>
        </div>
        <br />
        <div class="mt-15">
          <h1 class="head_txt color_primary">CHARITY WORKS/PROJECTS</h1>
          <p class="mt-15">
            Some of the charity works/projects done by the VALCO Trust Fund
            include the following:
          </p>
          <div class="mt-15 projects radius-5">
            <p>
              <span> » Schools And Colleges Transportation Project:</span> It
              started in 1981 with the aim of assisting with the transportation
              needs of the schools and colleges. It was suspended in 1992 to
              allow a re-allocation of the trust funds resources to other
              important areas.
            </p>
          </div>

          <div class="mt-15 projects radius-5">
            <p>
              <span> » Elective Awards Projects: -</span> Since 1986, the fund
              has been assisting selected students of the school of medical
              sciences at both KNUST and University of Ghana for their elective
              attachment to other institutions abroad. The assistance in each
              case covers a return air ticket and all-inclusive allowances.
            </p>
          </div>

          <div class="mt-15 projects radius-5">
            <p>
              <span> » Science Equipment For Schools And Colleges: -</span> A
              project to assist all public second cycle institutions with basic
              science equipment and related teaching materials by the fund in
              1979.
            </p>
          </div>

          <div class="mt-15 projects radius-5">
            <p>
              <span> » District Hospital Projects: -</span> It started in 1991
              with a total number of 86 hospitals benefiting from medial
              equipment.
            </p>
          </div>

          <div class="mt-15 projects radius-5">
            <p>
              <span> » Regional Hospitals: -</span> A project to supply all
              regional hospitals with urgently needed drugs and equipment was
              started in 1995. Building of the VALCO Trust Fund Hostels for
              Kwame Nkrumah University of Science and Technology (KNUST) in
              Kumasi, University of Ghana in Accra and University of Cape Coast.
              In 1983, the fund bore the cost of establishing a tailoring school
              for the handicapped and also donated a mini bus to the YMCA in
              Takoradi. Between 1983 and 1986, the Red Cross society of Ghana
              received various sums of cash donations from the VALCO trust fund
              to assist the society with its operations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <br /><br />
    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Parner',
  components: {
    MainHeader,
    Footer,
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
p {
  line-height: 25px;
}
.objective {
  width: 100%;
  padding: 15px 10px;
  background: #2d3748;
  color: white;
}
.projects {
  width: 100%;
  padding: 15px 10px;
  background: #f3f4f6;

  span {
    font-weight: bold;
    color: #2c89df;
  }
}
</style>
