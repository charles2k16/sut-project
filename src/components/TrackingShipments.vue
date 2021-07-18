<template>
  <div>
    <Header />
    <div class="breadcrumb-bg s-breadcrumb-bg">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2>Track your Express Shipments</h2>
              <p style="color: white">
                Check your shipments history and trackings in real time with all
                information needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="shipments">
            <h5 style="font-size: 14px">
              Summary for {{ shipments[0].customer }}({{ this.id }})
            </h5>
          </div>
          <div class="summary">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <ul class="listing">
                  <li>
                    <span><b>Waybill: </b> </span><span>{{ this.id }}</span>
                  </li>

                  <li style="color: red">
                    <span>{{ new Date() }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-sm-12">
                <ul class="listing">
                  <li>
                    <span><b>Destination Service Area: </b> </span
                    ><span> 7310 208th St Sw C302 Edmonds Wa98026 USA</span>
                  </li>

                  <li>
                    <span><b>Origin Service Area: </b> </span
                    ><span> Wa98026 USA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <div class="ship_table">
            <div class="table-responsive">
              <table class="table table-striped" style="font-size: 11px">
                <thead>
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Location</th>

                    <th scope="col">Item Details</th>
                    <th scope="col">Customer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(shipment, index) in shipments" :key="index">
                    <td>
                      <span class="status_date d-block">
                        {{ shipment.status_date }}
                      </span>

                      <span
                        :class="
                          shipment.status == 'DEPARTURE'
                            ? 'status_dep'
                            : shipment.status == 'WITHHELD'
                            ? 'status_held'
                            : shipment.status == 'IN-TRANSIT'
                            ? 'status_transit'
                            : 'status_ship'
                        "
                      >
                        {{ shipment.status }}
                      </span>
                    </td>
                    <td>{{ shipment.current_loc }}</td>

                    <td>
                      <span>{{ shipment.description }}</span>
                      <span class="d-block"
                        >Weight:
                        <span class="infooo">{{
                          shipment.quantity
                        }}</span></span
                      >
                    </td>
                    <td>
                      <span
                        ><b>{{ shipment.customer }}</b></span
                      >
                      <span class="d-block"
                        >Shiped Date: <span>{{ shipment.shipDate }}</span></span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import shipmentsApi from '@/api/shipments';
import Header from '@/views/Header.vue';
import Footer from '@/views/Footer.vue';

export default {
  name: 'TrackingShipments',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      shipments: [],
      id: '',
    };
  },
  created() {
    this.id = this.$route.query.id;
    let self = this;
    shipmentsApi
      .getShipmentsByTracking(this.$route.query.id)
      .then(response => {
        if (response.data.length > 0) {
          self.shipments = response.data;
        } else {
          self.$router.push('/');
        }
      })
      .catch(error => {
        self.$router.push('/');
        console.log(error);
      });
  },
};
</script>

<style>
.shipments {
  margin-top: -520px;
}
.summary {
  background: rgb(212, 211, 211);
  padding: 15px 20px;
}
.listing li {
  font-size: 12px;
  font-weight: 600px;
}
</style>
