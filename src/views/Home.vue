<template>
  <div>
    <MainHeader />

    <main></main>

    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    MainHeader,
    Footer,
  },
};
</script>
