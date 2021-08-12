<template>
  <div class="blog_container">
    <div class="blog">
      <div>
        <img src="" alt="alt" class="blog_image" />
      </div>
      <div class="p-10">
        <h3>‘Schools Under Trees’ Website Launched in Accra</h3>
        <p>
          Valco Trust Fund in partnership with the Ministry of Energy and Ghana
          Education Service...
        </p>
      </div>
      <el-button
        type="primary"
        size="small"
        class="animate__animated animate__backInLeft"
        >Read more
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLists',
};
</script>

<style lang="scss" scoped>
.blog_container {
  display: grid;
  grid-row-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(300px, 1fr);
  grid-gap: 2rem;
  margin-top: 25px;
  margin-left: 40px;
  margin-bottom: 25px;
  margin-right: 40px;
  position: relative;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  .blog {
    width: 300px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 8px 6px -4px grey;

    .blog_image {
      width: 300px;
      height: 179px;
      border-radius: 5px;
    }
  }
}
</style>
