<template>
  <div class="bg-page">
    <MainHeader />
    <div class="page_header py-40">
      <h1
        class="
          text-center
          head_txt
          color_white
          caps
          animate__animated animate__fadeInDown
        "
      >
        PROJECT BACKGROUND
      </h1>
    </div>

    <div class="page_wrap_others bg-grey mt-15">
      <div class="py-10 px-15">
        <p class="mt-15">
          <img
            src="../assets/images/hkj_home.webp"
            alt="img"
            class="image_float animate__animated animate__fadeInLeft"
          />

          Free, accessible, and basic compulsory education is a legal right that
          has been conferred on the Ghanaian child. This right is adequately
          provided for by the laws of the country with specific reference to
          Article 25(a) of the 1992 Constitution and also the Education Act
          (2008) and Free Compulsory Universal Basic Education (FCUBE)
          programme. The essence of this legal position in respect of education
          is to ensure every child has equal access to quality education
          irrespective of their geographical location.
        </p>
        <br />
        <p>
          In spite of this provision, there exist huge disparities between
          children from the urban areas and those from the less endowed
          communities. These disparities are broadly due to the challenges of
          adequate decent classrooms for all school children. Undoubtedly, with
          the introduction of some social interventions like capitation grant,
          school feeding and free text and exercise books, the gross enrollment
          rate at the basic education level has witnessed some improvement.
        </p>

        <p class="mt-15">
          The challenge has led many school teachers to manage with schools
          under trees for teaching and learning. This improvisation is referred
          to as “schools under trees”, and it is prevalent in some parts of the
          country. There are also old and very dilapidated school structures
          which pose challenges to the school children. These challenges which
          are very prevalent at the basic school level have led to many schools
          where infrastructure is lacking, in setting up classes under trees to
          provide teaching and learning for the children.
        </p>
        <p class="mt-15">
          Education, it is said, reduces inequalities, can break the cycle of
          poverty, foster tolerance, reach gender equality, and empower people
          to live more healthy lives and attain more productive livelihoods.
          Education is both a goal in itself and a means for attaining all the
          other Sustainable Development Goals (SDGs), especially the SDG 4,
          which calls for inclusive and equitable quality education.
        </p>
        <p class="mt-15">
          Indeed, most of our basic schools lack structure and learning
          materials to help the children in the learning process. The schools
          without structures are exposed to harsh weather conditions and classes
          are brought to abrupt end whenever it rains.
        </p>

        <p class="mt-15">
          External noise also interferes in the teaching and learning process
          because instructions are done in an open space and are subjected to
          the vagaries of the weather. The situation is seriously affecting
          effective education of children in the rural communities and the need
          for well-coordinated and consistent construction of all schools under
          trees in the country has been identified as very critical.
        </p>
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
  name: 'About',
  components: {
    MainHeader,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.page_header {
  background-image: linear-gradient(transparent, #060d11 96%),
    url(../assets/images/mmm.webp);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  // height: 110px;
}
p {
  line-height: 25px;
}
</style>
