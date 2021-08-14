<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeEnter: () => {
    window.onscroll = function () {
      scrollFix();
    };
    // Get the header
    var header = document.getElementById('navbar');

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function scrollFix() {
      console.log('scrolled');
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  },

  mounted() {
    window.onscroll = function () {
      scrollFix();
    };
    // Get the header
    var header = document.getElementById('navbar');

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function scrollFix() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }
  },
};
</script>
