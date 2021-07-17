<template>
  <header>
    <div class="header-top-wrap purple-bg d-none d-md-block">
      <div class="container-fluid header-container-p">
        <div class="row">
          <div class="col-xl-6 col-lg-7 col-md-6">
            <div class="header-contact">
              <ul>
                <li><i class="fas fa-headphones"></i>Call us +654 3048 9658</li>
                <li>
                  <i class="far fa-envelope"></i
                  ><a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="bae9cedbc8cedbc9d1fad3d4dcd594d9d5d7"
                    >[email&#160;protected]</a
                  >
                </li>
                <li><i class="fas fa-map-marker"></i>W84 wokin Street Park</li>
              </ul>
            </div>
          </div>
          <div class="col-xl-6 col-lg-5 col-md-6">
            <div
              class="
                header-top-right
                d-flex
                justify-content-end
                align-items-center
              "
            >
              <div class="header-country">
                <form action="#">
                  <select name="name" class="selected">
                    <option value="">New York</option>
                    <option value="">Washington</option>
                    <option value="">Lake</option>
                    <option value="">Seventh</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="header-sticky" class="main-header">
      <div class="container-fluid header-container-p">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6">
            <div class="logo">
              <a href="index.html"
                ><img
                  src="../assets/img/logo.png"
                  class="mobile-logo"
                  alt="Logo"
              /></a>
            </div>
          </div>
          <div class="col-lg-9 col-md-6 d-none d-md-block">
            <div class="menu-area">
              <div class="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">Company</a></li>
                    <li><a href="tracking.html">Tracking</a></li>
                    <li><a href="support.html">Support</a></li>
                  </ul>
                </nav>
              </div>

              <div class="header-btn">
                <a
                  href="#"
                  class="btn"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                  ><img
                    src="../assets/img/calculator-symbols.png"
                    alt="icon"
                  />Get Fare Rate</a
                >
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="mobile-menu"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
