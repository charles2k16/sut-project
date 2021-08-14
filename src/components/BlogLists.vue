<template>
  <div class="blog_container">
    <div class="blog">
      <div>
        <img
          src="../assets/images/ret_about.webp"
          alt="alt"
          class="blog_image"
        />
      </div>
      <div class="p-10">
        <h3>‘Schools Under Trees’ Website Launched in Accra</h3>
        <p class="mt-15">
          Valco Trust Fund in partnership with the Ministry of Energy and Ghana
          Education Service...
        </p>
        <br />
        <el-button
          type="primary"
          size="small"
          class="animate__animated animate__backInLeft mt-15"
          >Read more
        </el-button>
      </div>
    </div>
    <div class="blog blog_content">
      <div>
        <img
          src="../assets/images/ret_about.webp"
          alt="alt"
          class="blog_image"
        />
      </div>
      <div class="p-10">
        <h3>‘Schools Under Trees’ Website Launched in Accra</h3>
        <p class="mt-15">
          Valco Trust Fund in partnership with the Ministry of Energy and Ghana
          Education Service...
        </p>
        <br />
        <el-button
          type="primary"
          size="small"
          class="animate__animated animate__backInLeft mt-15"
          >Read more
        </el-button>
      </div>
    </div>
    <div class="blog">
      <div>
        <img
          src="../assets/images/ret_about.webp"
          alt="alt"
          class="blog_image"
        />
      </div>
      <div class="p-10">
        <h3>‘Schools Under Trees’ Website Launched in Accra</h3>
        <p class="mt-15">
          Valco Trust Fund in partnership with the Ministry of Energy and Ghana
          Education Service...
        </p>
        <br />
        <el-button
          type="primary"
          size="small"
          class="animate__animated animate__backInLeft mt-15"
          >Read more
        </el-button>
      </div>
    </div>
    <div class="blog">
      <div>
        <img
          src="../assets/images/ret_about.webp"
          alt="alt"
          class="blog_image"
        />
      </div>
      <div class="p-10">
        <h3>‘Schools Under Trees’ Website Launched in Accra</h3>
        <p class="mt-15">
          Valco Trust Fund in partnership with the Ministry of Energy and Ghana
          Education Service...
        </p>
        <br />
        <el-button
          type="primary"
          size="small"
          class="animate__animated animate__backInLeft mt-15"
          >Read more
        </el-button>
      </div>
    </div>
    <div class="blog">
      <div>
        <img
          src="../assets/images/ret_about.webp"
          alt="alt"
          class="blog_image"
        />
      </div>
      <div class="p-10">
        <h3>‘Schools Under Trees’ Website Launched in Accra</h3>
        <p class="mt-15">
          Valco Trust Fund in partnership with the Ministry of Energy and Ghana
          Education Service...
        </p>
        <br />
        <el-button
          type="primary"
          size="small"
          class="animate__animated animate__backInLeft mt-15"
          >Read more
        </el-button>
      </div>
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
  margin-left: 5px;
  margin-bottom: 25px;
  margin-right: 5px;
  position: relative;
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;

  .blog {
    width: 300px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 8px 6px -4px rgb(168, 167, 167);
    border: 1px solid rgb(250, 250, 250);
    padding-bottom: 10px;

    h3 {
      color: #2c89df;
    }
  }
  .blog_content {
    background: #2d3748;

    h3 {
      color: white;
    }
    p {
      color: white;
    }
  }
}
.blog_image {
  width: 299px;
  height: 179px;
  border-radius: 5px;
}
::-webkit-scrollbar {
  display: none;
}
</style>
