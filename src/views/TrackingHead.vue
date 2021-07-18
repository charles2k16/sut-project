<template>
  <section class="slider-area">
    <div class="slider-active">
      <div class="single-slider slider-bg d-flex align-items-center">
        <div class="slider-overlay-bg"></div>
        <div class="slider-bg-shape"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-11">
              <div class="slider-content text-center">
                <h2 data-animation="fadeInUpS" data-delay=".3s">
                  Delivery Express
                </h2>
                <p data-animation="fadeInUpS" data-delay=".6s">
                  Explore ways to become more efficient, see printing offers and
                  solutions insights and inspiration for your small business.
                </p>
                <div
                  class="slider-form"
                  data-animation="fadeInUpS"
                  data-delay=".9s"
                >
                  <form>
                    <input
                      type="text"
                      placeholder="Tracking id"
                      v-model="trackingId"
                    />
                    <button
                      class="btn"
                      @click.prevent="trackShipment"
                      style="padding: 18px 20px"
                    >
                      Tracking
                    </button>
                  </form>
                  <div v-if="error" style="display: block">
                    <p style="color: orange">
                      {{ errorMessage }}
                    </p>
                  </div>
                  <div
                    class="spinner-border text-danger"
                    role="status"
                    v-if="loading"
                  >
                    <span class="sr-only"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import shipmentsApi from '@/api/shipments';

export default {
  name: 'TrackingHead',
  data() {
    return {
      loading: false,
      trackingId: '',
      errorMessage: 'The tracking ID is unrecognised or invalid',
      error: false,
    };
  },
  methods: {
    trackShipment() {
      let self = this;
      this.loading = true;
      console.log(this.trackingId);
      if (!this.trackingId || this.trackingId == '') {
        this.error = true;
        this.errorMessage = 'Tracking ID can not be empty';
        this.loading = false;
        return;
      } else {
        shipmentsApi
          .getShipmentsByTracking(this.trackingId)
          .then(response => {
            console.log('server', response);
            if (response.data.length > 0) {
              self.$router.push({
                name: 'TrackingShipments',
                query: { id: self.trackingId },
              });
            } else {
              self.error = true;
              self.errorMessage = 'The tracking ID is unrecognised or invalid';
            }
            this.loading = false;
          })
          .catch(error => {
            this.error = true;
            this.errorMessage = 'Error fetching tracking ID';
            this.loading = false;
            console.log(error);
          });
      }
    },
  },
};
</script>
