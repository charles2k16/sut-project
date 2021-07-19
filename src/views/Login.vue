<template>
  <div>
    <div class="slider-form" data-animation="fadeInUpS" data-delay=".9s">
      <form>
        <input
          type="text"
          placeholder="Enter Password Here"
          v-model="password"
        />
        <button class="btn" @click.prevent="login" style="padding: 18px 20px">
          Login
        </button>
      </form>
      <div v-if="error" style="display: block">
        <p style="color: orange">
          {{ errorMessage }}
        </p>
      </div>
      <div class="spinner-border text-danger" role="status" v-if="loading">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<script>
import shipmentsApi from '@/api/shipments';

export default {
  name: 'Login',
  data() {
    return {
      password: '',
      loading: false,
      errorMessage: 'Error logging in',
      error: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      shipmentsApi
        .getUsers()
        .then(response => {
          console.log('server', response);

          this.loading = false;
        })
        .catch(error => {
          this.error = true;
          this.errorMessage = 'Error fetching user';
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>
