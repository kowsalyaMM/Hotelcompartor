body {
  font-family: 'Open Sans', sans-serif;
}

/*header style start*/
@media (min-width:768px) {
  .sidenav .closebtn {
    display: none;
  }

  .header-section {
    z-index: 10;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 70px;
    left: 50%;
  }

  #mySidenav {
    width: auto !important;
  }

  .login a {
    width: 70px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    border-radius: 50px;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #274988 !important;
    justify-content: center;
    cursor: pointer;
  }

  .header-section li.nav-item {
    margin-left: 1rem;
  }
}

@media (max-width:767px) {
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    box-shadow: 3px 0 5px -2px #888;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  ul.navbar-nav {
    padding: 15px;
  }

  .header-section li.nav-item {
    padding: 1rem 0rem;
    border-bottom: 1px solid #e5e3e3;
  }

  .login a {
    color: #274988 !important;
    font-weight: 600;
    padding: 0px;
  }
}

@media (max-width:450px) {
  .navbar-brand img {
    width: 200px;
  }

  .navbar-toggler {
    font-size: 1rem;
  }
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}

@media (max-width: 300px) {
  .navbar-brand img {
    width: 130px;
  }

  .navbar-toggler {
    font-size: 0.8rem;
    padding: 4px 6px;
  }
}

/*header style end*/

/* common style start */
:focus-visible {
  outline: 0px;
}

:focus {
  box-shadow: none !important;
}

@media (min-width:768px) {

  .header-section,
  .footer-section,
  .banner-inner,
  .home-page .section-1,
  .home-page .section-3,
  .home-page .section-4 {
    justify-content: space-between;
    width: 730px;
    margin: auto;
  }
}

@media (min-width:992px) {

  .header-section,
  .footer-section,
  .banner-inner,
  .home-page .section-1,
  .home-page .section-3,
  .home-page .section-4 {
    width: 950px;
  }
}

@media (min-width:1200px) {

  .header-section,
  .footer-section,
  .banner-inner,
  .home-page .section-1,
  .home-page .section-3,
  .home-page .section-4 {
    width: 1177px;
  }
}

@media (min-width:1400px) {

  .header-section,
  .footer-section,
  .banner-inner,
  .home-page .section-1,
  .home-page .section-3,
  .home-page .section-4 {
    width: 1400px;
  }
}

@media (min-width:1600px) {

  .header-section,
  .footer-section,
  .banner-inner,
  .home-page .section-3,
  .home-page .section-4 {
    width: 1500px;
  }

  .home-page .section-1 {
    width: 1464px;
  }
}

/* common style end */

/* footer style start */
.footer {
  background: #F5F6FB;
}

.footer-section p {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #4D4D66;
  height: 50px;
}

.footer-section ul {
  padding: 0px;
  list-style: none;
  margin: 0px;
}

.footer-section ul li {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 15px;
  color: #4D4D66;
  font-family: 'Inter', sans-serif;
}

.footer-section ul li img {
  margin-right: 1rem;
  vertical-align: middle;
}

.contact-us input {
  font-family: 'Inter', sans-serif;
  background: #FFFFFF;
  border-radius: 10px;
  border: 0px;
  height: 48px;
  margin-bottom: 15px;
  padding: 1rem;
}

.contact-us input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #b1b1bc;
  opacity: 1;
  /* Firefox */
}

.contact-us input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #b1b1bc;
}

.contact-us input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #b1b1bc;
}

.contact-us button {
  font-family: 'Poppins', sans-serif;
}

.site-explore {
  margin-bottom: 6px;
}

.footer-section {
  align-items: self-start;
  padding: 5rem 1rem;
}

.scanner {
  border-top: 1px solid #dfe0e7;
  text-align: center;
  padding: 1rem;
  color: #a1a1b0;
  font-weight: 300;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
}

@media (max-width:1199px) {
  .footer-logo {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
}

@media (max-width:767px) {
  .footer-logo {
    margin-bottom: 1rem;
  }

  .footer-section {
    padding: 2rem 1rem;
  }

  .sites,
  .Explore,
  .Contact {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }

  .footer-section p {
    font-size: 18px;
    height: auto;
    margin-bottom: 1rem;
  }

  .footer-section ul li {
    font-size: 16px;
  }

  .social-img img {
    width: 40px;
  }

  .foot-logo img {
    width: 200px;
  }
}

@media (max-width:320px) {
  .contact-us input {
    width: 100%;
  }
}

/* footer style end */


/* home style start */
.banner-section {
  background-image: url('../../images/banner.png');
  height: 627px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-inner {
  padding: 0.5rem 1rem;
}

.banner-inner p {
  color: #234280;
  padding: 0rem 1rem;
}

.banner-inner mark {
  color: #0770E3;
  background-color: #ffffff;
  padding: 0.5rem 1rem 0.8rem;
}

.banner-inner p,
.banner-inner mark {
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 0.315393px;
}

@media (max-width:1199px) {
  .banner-section {
    height: 450px;
  }

  .banner-inner p,
  .banner-inner mark {
    font-size: 30px;
  }
}

@media (max-width:767px) {
  .banner-section {
    height: 250px;
  }

  .banner-inner p,
  .banner-inner mark {
    font-size: 20px;
  }
}

/* section 1 style start */
.home-page .section-1 {
  position: absolute;
  min-height: initial !important;
  z-index: 9;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0px 21.5041px 33.01px rgb(27 93 192 / 5%);
  border-radius: 20px;
  padding: 2rem 4rem 1.3rem;
}

.home-page .section-1 .form-group label {
  display: block;
  height: 24px;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.315393px;
  color: #484848;
  white-space: nowrap;
}

.home-page .section-1 .form-group input {
  padding: 15px;
}

.home-page .section-1 .form-group input,
.home-page .section-1 .form-group select {
  background: rgba(25, 29, 35, 0.05);
  border-radius: 50px;
  border: 0px;
  height: 43px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 35px;
  font-weight: 600;
  font-size: 16px;
  color: #252525;
}

.home-page .section-1 .form-group input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #adadad;
  opacity: 1;
  /* Firefox */
}

.home-page .section-1 .form-group input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #adadad;
}

.home-page .section-1 .form-group input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #adadad;
}

.home-page .section-1 .form-group input.search-stay {
  background-image: url('../../images/search.svg');
  background-repeat: no-repeat;
  background-position: right 5% top 53%;
}

.home-page .section-1 .form-group input.calender-sec {
  background-image: url('../../images/calender.svg');
  background-repeat: no-repeat;
  background-position: right 5% top 53%;
  font-size: 14px;
}

.home-page .section-1 .form-group select {
  background-image: url('../../images/gray-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 13% top 53%;
}

.home-page .section-1 button {
  background: #0770E3;
  border-radius: 50px;
  height: 43px;
  letter-spacing: 0.167254px;
  color: #FDF1F2;
  width: 100%;
}

@media (min-width:1200px) {
  .home-page .section-1 .form-group {
    padding: 0px;
  }
}

@media (max-width:1199px) {
  .home-page .section-1 {
    padding: 1rem 1rem;
  }

  .home-page .section-1 .Search-Hotels label {
    height: auto;
    display: none;
  }

  .home-page .section-1 button {
    width: 200px;
  }

  .Search-Hotels {
    margin: 0px;
  }
}

@media (max-width:767px) {
  .home-page .section-1 {
    width: 100%;
    position: relative;
    transform: inherit;
    left: 0%;
  }
}

/* section 1 style end */

/* section 2 style start */
.home-page .section-2 {
  background: #ecf5ff;
  padding: 8rem 4rem 1rem;
  background-image: url('../../images/all-bg-left.svg'), url('../../images/all-bg-right.svg');
  background-position: left -6% bottom -10%, right top -5%;
  background-repeat: no-repeat, no-repeat;
}

.Plan-Your {
  font-weight: 400;
  font-size: 50px;
  color: #222222;
  padding: 15px;
  margin-bottom: 3rem;
}

.Plan-Your span {
  color: #0770E3;
  font-weight: 700;
}

.home-page .section-2 .nav-pills.tabs-home .nav-link {
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #222222;
  word-break: break-word;
}

.home-page .section-2 .nav-pills.tabs-home .nav-link.active {
  background: #0770E3;
  color: #fff;
}

.inner-carousel {
  background: #FEFCFB;
  border: 1px solid rgba(102, 102, 102, 0.08);
  border-radius: 10px;
}

.place-star,
.place-per {
  display: flex;
  justify-content: space-between;
}

.star-per {
  padding: 1rem;
}

.star-right {
  display: flex;
  align-items: center;
}

.loc-left {
  display: flex;
}

.place-left {
  font-weight: 600;
  font-size: 25px;
  color: #222222;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 1rem;
}

.star-right img {
  margin-right: 0.5rem;
  height: 19px;
}

.star-right div {
  font-weight: 400;
  font-size: 18px;
  color: #666666;
  font-family: 'Poppins', sans-serif;
}

.loc-left img {
  height: 22px;
}

.loc-left div {
  font-weight: 400;
  font-size: 16px;
  color: #666666;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  margin-left: 10px;
}

.per-right p {
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #656B74;
  margin: 0rem;
}

.per-right div {
  background: #EDF0F3;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #234280;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
}

.main-img img {
  object-fit: cover;
  border-radius: 10px;
}

.home-page .section-2 .owl-nav {
  float: left;
  display: flex;
}

.home-page .section-2 .owl-nav span {
  display: none;
}

.home-page .section-2 .owl-nav .owl-prev,
.home-page .section-2 .owl-nav .owl-next {
  height: 40px;
  width: 40px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-page .section-2 .owl-nav .owl-prev:hover,
.home-page .section-2 .owl-nav .owl-next:hover {
  background: transparent;
}

.home-page .section-2 .owl-nav .owl-prev {
  background-image: url('../../images/prv.svg') !important;
}

.home-page .section-2 .owl-nav .owl-next {
  background-image: url('../../images/next.svg') !important;
}

.view-more {
  position: absolute;
  bottom: 0.5rem;
  left: 9rem;
  font-weight: 400;
  font-size: 20px;
  text-decoration-line: underline;
  color: #0770E3;
}

@media (min-width:768px) and (max-width:991px) {
  .home-page .section-2 {
    padding: 8rem 2rem;
  }

  .home-page .section-2 .col-xl-2 {
    -ms-flex: 0 0 25.666667%;
    flex: 0 0 25.666667%;
    max-width: 25.666667%;
  }

  .home-page .section-2 .col-xl-10 {
    -ms-flex: 0 0 74.333333%;
    flex: 0 0 74.333333%;
    max-width: 74.333333%;
  }
}

@media (min-width:992px) and (max-width:1199px) {
  .home-page .section-2 {
    padding: 8rem 2rem;
  }

  .home-page .section-2 .col-xl-2 {
    -ms-flex: 0 0 21.666667%;
    flex: 0 0 21.666667%;
    max-width: 21.666667%;
  }

  .home-page .section-2 .col-xl-10 {
    -ms-flex: 0 0 78.333333%;
    flex: 0 0 78.333333%;
    max-width: 78.333333%;
  }
}

@media (min-width:768px) and (max-width:1199px) {
  .Plan-Your {
    font-size: 40px;
    margin-bottom: 2rem;
  }
}

@media (min-width:1200px) and (max-width:1600px) {
  .home-page .section-2 .col-xl-2 {
    -ms-flex: 0 0 17.666667%;
    flex: 0 0 17.666667%;
    max-width: 17.666667%;
  }

  .home-page .section-2 .col-xl-10 {
    -ms-flex: 0 0 82.333333%;
    flex: 0 0 82.333333%;
    max-width: 82.333333%;
  }
}

@media (min-width:768px) {
  .home-page .section-2 ul.nav.tabs-home {
    display: block;
  }

  .home-page .section-2 ul.nav.tabs-home li.nav-item {
    margin-left: 0px;
    display: flex;
    margin-bottom: 1rem;
  }
}

@media (min-width:1601px) {
  .home-page .section-2 .col-xl-2 {
    -ms-flex: 0 0 12.666667%;
    flex: 0 0 12.666667%;
    max-width: 12.666667%;
  }

  .home-page .section-2 .col-xl-10 {
    -ms-flex: 0 0 87.333333%;
    flex: 0 0 87.333333%;
    max-width: 87.333333%;
  }
}

@media (min-width:500px) {
  .place-left {
    font-size: 16px;
    margin-right: 0rem;
  }

  .star-per {
    padding: 0.5rem;
  }

  .star-right img,
  .loc-left img {
    width: auto !important;
  }

  .loc-left {
    margin-bottom: 1rem;
  }

  .per-right {
    text-align: center;
  }

  .per-right div {
    display: inline-block;
    padding: 2px 13px;
  }

  .star-right div {
    font-size: 16px;
  }

  .loc-left div {
    font-size: 12px;
    margin-left: 7px;
  }

  .per-right div {
    font-size: 14px;
  }

  .per-right p {
    font-size: 10px;
  }
}

@media (max-width:767px) {
  .home-page .section-2 {
    padding: 1rem;
  }

  .Plan-Your {
    font-size: 30px;
    margin-bottom: 0rem;
  }

  .home-page .section-2 .nav-pills.tabs-home li.nav-item {
    border: 0px;
    margin-right: 1rem;
    padding: 4px;
  }

  .star-per {
    padding: 0.8rem;
  }

  .home-page .section-2 .nav-pills.tabs-home .nav-link {
    font-size: 14px;
  }

  .home-page .section-2 .nav-pills.tabs-home {
    margin-bottom: 2rem;
  }

  .loc-left div {
    font-size: 12px;
    margin-left: 7px;
  }

  .per-right div {
    font-size: 14px;
  }
}

@media (max-width:499px) {

  .place-left,
  .star-right div,
  .per-right div {
    font-size: 16px;
  }
}

/* section 2 style end */


/* section 3 style start */
.home-page .sec3-inner {
  background-image: url('../../images/all-bg-right.svg');
  background-repeat: no-repeat;
  background-position: right bottom -73%;
}

.home-page .section-3 {
  background-image: url('../../images/sec3-bg.svg');
  background-repeat: no-repeat;
  background-position: right;
  padding: 3rem 0rem 4rem;
}

.best-price p {
  font-weight: 400;
  font-size: 50px;
  color: #222222;
  margin: 0px;
  line-height: 66px;
}

.best-price p:last-child {
  font-weight: 700;
}

.best-price {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width:1600px) {
  .best-price p {
    font-size: 35px;
    line-height: 48px;
  }

  .exp-img img {
    width: 400px;
  }
}

@media (max-width:1199px) {
  .best-price p {
    font-size: 30px;
    line-height: 40px;
  }

  .exp-img img {
    width: 300px;
  }
}

@media (max-width:991px) {
  .best-price p {
    font-size: 22px;
    line-height: normal;
  }

  .home-page .section-3 {
    padding: 3rem 0rem 2rem;
    text-align: center;
  }

  .exp-img img {
    width: 280px;
  }
}

/* section 3 style end */

/* section 4 style start  */
.home-page .sec4-inner {
  background: #F4F9FF;
  padding: 5rem 0rem;
  background-image: url('../../images/all-bg-left.svg'), url('../../images/all-bg-right.svg');
  background-position: left bottom -28%, right top -5%;
  background-repeat: no-repeat, no-repeat;
}

.see-inner {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 3rem;
  height: 100%;
}

.see-inner div {
  font-weight: 600;
  font-size: 30px;
  color: #222222;
  font-family: 'Poppins', sans-serif;
}

.see-inner p {
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  font-family: 'Poppins', sans-serif;
  margin: 1rem 0rem 0rem;
}

.see-img img {
  margin-bottom: 2rem;
  width: 100%;
}

.see-inner.left-right {
  background-image: url('../../images/line.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

.see-inner.center {
  background-image: url('../../images/line-blue.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}

@media (max-width:1599px) {
  .see-inner div {
    font-size: 20px;
  }

  .see-inner p {
    font-size: 16px;
  }
}

@media (max-width:1199px) {
  .see-inner div {
    font-size: 16px;
  }

  .see-inner p {
    font-size: 14px;
  }

  .see-inner {
    padding: 1rem;
  }
}

@media (max-width:767px) {
  .home-page .section-4 .col-xl-4 {
    margin-bottom: 1rem;
  }
}

/* section 4 style start  */

/* section 5 style start */
.home-page .section-5 {
  padding: 6rem 0rem;
  background-image: url('../../images/all-bg-left.svg');
  background-position: left top -22%;
  background-repeat: no-repeat;
}

.need-inspiration span {
  color: #0770E3;
}

.need-inspiration {
  font-weight: 700;
  font-size: 50px;
  line-height: 54px;
  color: #222222;
  text-align: center;
  background-image: url('../../images/sec5-bg.svg');
  background-size: auto;
  background-repeat: no-repeat;
  background-position: 70% 50%;
  margin-bottom: 4rem;
}

.need-inspiration p:last-child {
  font-weight: 400;
  font-size: 23px;
  line-height: 32px;
  color: #666666;
}

.sec5-inner div {
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 16px;
  font-weight: 700;
  font-size: 48px;
  line-height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sec5-inner.America-img div {
  background-image: url('../../images/sec5-img1.svg');
  color: #fff;
}

.sec5-inner.France-img div {
  background-image: url('../../images/sec5-img4.svg');
}

.sec5-inner.India-img div {
  background-image: url('../../images/sec5-img2.svg');
}

.sec5-inner.london-img div {
  background-image: url('../../images/sec5-img3.svg');
  color: #fff;
}

#sec5-carousel .owl-dot span {
  background: #EDEDED;
}

#sec5-carousel .owl-dot.active span,
#sec5-carousel .owl-dot:hover span {
  background: #0770E3 !important;
  width: 12px;
  height: 12px;
}

#sec5-carousel .owl-dots {
  margin-top: 3rem;
}

@media (min-width:1200px) and ((max-width:1600px)) {
  .sec5-inner div {
    height: 350px;
    font-size: 30px;
  }
}

@media (min-width:992px) and ((max-width:1199px)) {
  .sec5-inner div {
    height: 250px;
    font-size: 30px;
  }
}

@media (min-width:768px) and ((max-width:991px)) {
  .sec5-inner div {
    height: 200px;
    font-size: 30px;
  }
}

@media (min-width:500px) {
  #sec5-carousel .owl-stage {
    padding-left: 15px !important;
  }
}

@media (max-width:767px) {
  .sec5-inner div {
    height: 230px;
    font-size: 30px;
  }
}

@media (max-width:499px) {
  div#sec5-carousel {
    padding: 1rem;
  }
}

/* section 5 style end */

/* home style end */



/* After Login style start */
.afterlogin .banner-section {
  height: 250px;
}

.afterlogin .section-2 {
  background-image: none;
  padding: 8rem 1rem 1rem;
}

.afterlogin .footer-section {
  display: none;
}

/* left side style start */
.filter-outer {
  background: #FFFFFF;
  box-shadow: 0px 21.5041px 33.01px rgb(27 93 192 / 5%);
  border-radius: 11px;
}

.filter-sec {
  background: #F9F9F9;
  padding: 1rem;
  border-radius: 11px 11px 0px 0px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #191D23;
}

.filter-inner {
  padding: 2rem 1rem 1rem;
}

.filter-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #191D23;
  opacity: 0.7;
  margin-bottom: 1.5rem;
}

.custom-control-label::before,
.custom-control-label::after {
  width: 24px;
  height: 24px;
  border: 2px solid #878B91;
  border-radius: 8px !important;
  top: 0px;
}

.custom-control-input:focus~.custom-control-label::before {
  box-shadow: none;
}

.custom-control-label {
  font-weight: 400;
  font-size: 15px;
  color: #5e6165;
  display: flex;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  border-color: #0A6ADA;
  background-color: #0A6ADA;
  border: 2px solid #0A6ADA;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  border: 2px solid #0A6ADA;
  background-image: url('../../images/tick.svg');
  background-size: 68%;
  background-repeat: no-repeat;
  background-position: center;
}

.custom-control-input:checked~.custom-control-label {
  font-weight: 600;
  color: #000;
}

.book-right {
  font-weight: 400;
  font-size: 15px;
  text-align: right;
  color: #191D23;
  opacity: 0.4;
}

.filter-tabs .nav-pills .nav-link {
  border: 1px solid #E1E1E1;
  border-radius: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  color: #9B9B9B;
}

.filter-tabs .nav-pills .nav-link.active {
  background: #0770E3;
  color: #FFFFFF;
}

.filter-tabs .nav-pills li {
  margin-bottom: 0.5rem;
}

.filter-tabs .nav-pills li:first-child {
  margin-right: 1rem;
}

.filter-input input {
  border: 1px solid #878B91;
  border-radius: 7.0047px;
}

.filter-tabs .tab-content>.tab-pane {
  max-width: 100%;
}

.filter-input input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #d1d2d3;
  opacity: 1;
  /* Firefox */
}

.filter-input input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #d1d2d3;
}

.filter-input input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #d1d2d3;
}

.SeeMore {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #0770E3;
  opacity: 0.7;
  text-align: center;
}

/* left side style end */

/* center style start */
.hotel-found {
  font-weight: 600;
  font-size: 14px;
  color: #177CFD;
}

.sort-by {
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #191D23;
  opacity: 0.7;
  white-space: nowrap;
  margin-right: 0.5rem;
}

.sort-select {
  width: 100%;
}

.sort-select select {
  background: #FFFFFF;
  border: 1px solid #E4E4E4;
  border-radius: 10px;
  background-image: url('../../images/gray-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 13% top 53%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: 600;
  font-size: 16px;
  color: #112441;
}

.select-sort {
  background: #F9F9F9;
  border-radius: 8.40564px;
  padding: 1rem 0rem;
  margin: 2rem 0rem;
}

.hotel-loc {
  display: flex;
  align-items: center;
}

.hotel-loc img {
  height: 18px;
  margin-right: 12px;
}

.hotel-loc p {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #191D23;
  opacity: 0.7;
}

.breakfast {
  display: flex;
  align-items: center;
  margin: 2rem 0rem;
}

.breakfast p {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #0B973A;
}

.breakfast img {
  height: 20px;
  margin-right: 6px;
}

.Night-price {
  font-weight: 400;
  font-size: 16px;
  color: #191D23;
}

.Rating {
  font-weight: 400;
  font-size: 16px;
  color: #191D23;
  opacity: 0.7;
  margin-top: 8px;
}

.bor-bottom {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px 0px;
}

.Agoda {
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: #0066FE;
  opacity: 0.7;
}

.num-price {
  font-weight: 600;
  font-size: 21px;
  color: #191D23;
}

.bor-bottom:last-child {
  border: 0px;
}

.hotel-list {
  background: #FFFFFF;
  border-radius: 22px;
  border: 1px solid #F2F2F2;
  margin-bottom: 1rem !important;
}

.hotel-list:hover {
  box-shadow: 0px 10.11px 20px rgb(32 99 200 / 25%);
  border: 1px solid transparent;
}

.hotel-img img {
  object-fit: cover;
  height: 100%;
  border-radius: 22px;
}

.exp-price {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #e6f1fc;
  border-radius: 0px 0px 0px 22px;
  justify-content: space-between;
  height: 100%;
}

.value-price {
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  color: #191D23;
}

.exp-view {
  background: #042759;
  border-radius: 0px 0px 22px 0px;
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
  padding: 1rem;
  height: 100%;
  text-align: center;
}

.hotel-title {
  font-weight: 600;
  font-size: 19px;
  color: #191D23;
}

.hotel-leftside:after {
  content: '';
  background: url('../../images/line-gray.svg') no-repeat center center/cover;
  position: absolute;
  top: 23px;
  right: 4px;
  width: 1%;
  height: 80%;
}

.gmap_iframe {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin-top: 1rem;
}

.simple-pagination li span {
  margin: 0px 4px;
}

.simple-pagination li a:after,
.simple-pagination li span:after {
  content: '';
  background: url('../../images/line-gray.svg') no-repeat center center/cover;
  position: absolute;
  top: 4px;
  right: -7px;
  width: 1%;
  height: 80%;
}

.select-multi select,
.select-multi select:focus {
  background: rgba(124, 130, 155, 0.1);
  border-radius: 50px;
  border: 0px;
  margin-right: 1rem;
  background-image: url('../../images/gray-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 13% top 53%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: 600;
  font-size: 16px;
  color: #191D23;
  padding: 0.375rem 3rem 0.375rem 2.5rem;
}

.select-multi {
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  float: left;
  margin-left: auto;
  margin-bottom: 0.8rem;
}

.cross-red {
  position: absolute;
  left: 6px;
}

@media (min-width: 768px) and (max-width: 991px) {
  .afterlogin .section-2 {
    padding: 10rem 1rem 1rem;
  }
}

@media (max-width:1600px) {
  .value-price {
    font-size: 18px;
  }

  .exp-price,
  .exp-view {
    padding: 0.5rem;
    font-size: 16px;
    line-height: 30px;
  }
}

@media (max-width:1500px) {
  .hotel-title {
    font-size: 14px;
  }

  .breakfast p,
  .hotel-loc p,
  .Night-price {
    font-size: 14px;
  }

  .num-price {
    font-size: 16px;
  }

  .exp-price img {
    width: 60px;
  }
}

@media (max-width:991px) {
  .gmap_iframe {
    height: 320px;
  }
}

@media (max-width:767px) {

  .breakfast {
    margin: 1.5rem 0rem;
  }

  .bor-bottom {
    padding: 5px 0px;
  }

  .hotel-found {
    margin-top: 2rem;
  }

  .afterlogin .section-2 {
    padding: 1rem 1rem 1rem;
  }

  .sort-select {
    width: auto;
  }

  .sort-select select {
    width: 150px;
  }

  .select-multi {
    margin-bottom: 1rem;
  }

}

@media (max-width:575px) {
  .hotel-img {
    height: 250px;
  }
}

@media (max-width:400px) {

  .exp-price,
  .exp-view {
    border-radius: 0px;
  }

  .hotel-leftside:after {
    display: none;
  }

  .w-sm-400 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

/* center style end */

/* pagination style start */

.list-wrapper {
  overflow: hidden;
}

.simple-pagination ul {
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  text-align: right;
}

.simple-pagination li {
  display: inline-block;
  margin: 0px 5px;
  position: relative;
}

.simple-pagination li a,
.simple-pagination li span {
  color: #646464;
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  background-color: transparent;
  border: 0px;
  display: block;
  text-align: center;
  border-radius: 5.08696px;
  width: 33px;
  height: 33px;
  line-height: 30px;
}

.simple-pagination .current {
  color: #FFF;
  border-color: #0770E3;
  background: #0770E3;
  margin-left: 7px;
}

.page-link:hover {
  z-index: 2;
  color: #fff;
  text-decoration: none;
  border-color: #0770E3;
  background: #0770E3;
  padding: 0px;
}

.simple-pagination li a {
  line-height: 30px;
  padding: 0px;
  margin-left: 4px
}

.simple-pagination .prev,
.simple-pagination .next {
  position: relative;
  color: #646464;
  margin: 0px;
}

.simple-pagination .prev.current,
.simple-pagination .next.current {
  background: transparent;
  color: #b1b1b1;
}

.simple-pagination .prev:hover,
.simple-pagination .next:hover {
  background: transparent;
  color: #646464;
}

.simple-pagination .prev:before {
  content: '';
  background: url('../../images/gray-arrow.svg') no-repeat center center;
  position: absolute;
  top: 8px;
  left: -8px;
  width: 14px;
  height: 14px;
  transform: rotate(90deg);
}

.simple-pagination .prev {
  width: 60px;
  padding: 0px;
}

.simple-pagination .next:before {
  content: '';
  background: url('../../images/gray-arrow.svg') no-repeat center center;
  position: absolute;
  top: 9px;
  right: -8px;
  width: 14px;
  height: 14px;
  transform: rotate(270deg);
}

.simple-pagination .next {
  width: 70px;
  padding: 0px;
}

.simple-pagination .prev.current:after,
.simple-pagination .next.current:after {
  display: none;
}

/* pagination style end */


/* login style start */
.login {
  position: relative;
}

.login-section {
  background: #fff;
  border-radius: 30px;
  background-image: url('../../images/login-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 380px;
  text-align: center;
  padding-bottom: 1rem;
}

.login-link {
  position: absolute;
  right: 0px;
}

.login-section .w-full {
  background-color: transparent !important;
}

.login-text {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  margin-bottom: 1rem;
  text-align: left;
}

.login-inner input {
  border: 1px solid #887E7E;
  border-radius: 5px;
  box-shadow: none !important;
  margin-bottom: 1rem;
  height: 50px;
  padding: 0.5rem !important;
  width: 100%;
}

a.forgot-pass {
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  color: #635C5C !important;
  border: 0px;
  border-radius: 0px;
  background: transparent;
  justify-content: flex-end;
}

.log-in button {
  background: #0B6EFE;
  border-radius: 50px;
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  border: 0px;
  color: #fff;
  height: 50px;
}

.google-fb {
  display: flex;
  justify-content: center;
}

.google-fb #btn-fblogin {
  border: 0px;
  border-radius: 0px;
  background: transparent;
  width: auto;
  height: auto;
  margin: 0px 8px;
}

.log-in {
  margin: 1rem 0rem;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
}

.hr-text:before {
  content: "";
  background: linear-gradient(to right, transparent, #0B6EFE, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}

.hr-text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  padding: 0 0.5em;
  background-color: #fcfcfa;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #555252;
}

/* login style end */

/* logout style start */
.login-after button,
.login-after button:hover,
.login-after .btn-primary:not(:disabled):not(.disabled).active,
.login-after .btn-primary:not(:disabled):not(.disabled):active,
.login-after .show>.btn-primary.dropdown-toggle {
  background-color: transparent;
  border-color: transparent;
  padding: 0px;
}

.login-after button:after {
  display: none;
}

.email-logout,
.log-out {
  display: flex;
  align-items: center;
  padding: 12px;
}

.logout-sec p {
  margin: 0rem;
  font-weight: 600;
  font-size: 16px;
  color: #33344F;
}

.login-after .dropdown-menu {
  background: #FFFFFF;
  box-shadow: 0px 4px 9px rgb(0 0 0 / 9%);
  border-radius: 15px;
  padding: 0px;
  margin: 0px;
  right: 0px;
  left: auto;
  margin-top: 1px;
}

.email-logout p {
  font-weight: 400;
  font-size: 14px;
  line-height: 36px;
  color: #33344F;
}

.logout-sec img {
  width: 35px;
  height: 35px;
  margin-right: 0.8rem;
}

.email-logout:hover {
  background: #ecf0fd;
  border-radius: 15px 15px 0px 0px;
}

.log-out:hover {
  background: #ecf0fd;
  border-radius: 0px 0px 15px 15px;
}

/* logout style end */

/* After Login style end */

/* guestrooms styles */

.home-page .section-1 .form-group .guestrooms .guest-input {
  background: rgba(25, 29, 35, 0.05);
  border-radius: 50px;
  border: 0px;
  height: 43px;
  width: 100%;
  padding: 0px 35px 0px 15px;
  font-weight: 600;
  font-size: 16px;
  color: #252525;
  background-image: url('../../images/gray-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 13% top 53%;
  display: flex;
  justify-content: left;
  align-items: center;
}

.members {
  position: absolute;
  top: 47px;
  left: auto;
  right: 0px;
  background: #FFFFFF;
  box-shadow: 0px 4px 14px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 1rem;
  z-index: 999;
}

.list-room {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.list-guest {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  font-weight: 700;
  font-size: 16px;
  color: #2E3758;
  opacity: 0.9;
}

.handle-counter {
  display: flex;
  align-items: center;
}

.list-guest img {
  margin-right: 2rem;
}

.home-page .section-1 .handle-counter button {
  background: #177CFD;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  color: #fff;
}

.home-page .section-1 .handle-counter input {
  padding: 20px;
  border-radius: 0px;
  width: 50px;
  background: #F5F5F5;
}

.reset-ok {
  display: flex;
  justify-content: space-between;
}

.home-page .section-1 .reset-ok #guests_ok {
  border: 0px;
  width: 100px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.167254px;
  color: #FDF1F2;
}

.home-page .section-1 .reset-ok #reset {
  border: 1px solid #979797;
  background: transparent;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.167254px;
  color: #4D4D66;
  width: 100px;
}

.list-guest p {
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 87px;
}

.guestrooms.arrowcheck .guest-input {
  background-image: url('../../images/up-arrow.svg') !important;
}

button.counter-plus img {
  transform: rotate(180deg);
}

@media (max-width:991px) {
  .members {
    left: 0px;
    right: auto;
  }

  .list-guest,
  .list-guest img {
    margin-right: 1rem;
  }
}

@media (max-width:500px) {
  .members {
    width: 100%;
  }

  .list-room {
    display: block;
  }

  .list-guest {
    margin-bottom: 1rem;
  }

  .home-page .section-1 .handle-counter input {
    width: 100%;
  }
}

/* guestrooms styles end*/

/* datapicker style start */

.drp-calendar.right {
  display: none !important;
}

.daterangepicker.date_picker {
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 8%);
  border-radius: 16px;
  border: 0px;
  width: auto;
}

.daterangepicker.date_picker:before,
.daterangepicker.date_picker:after {
  display: none;
}

.daterangepicker.date_picker .drp-calendar {
  max-width: 100%;
  width: 100%;
}

.daterangepicker.date_picker .drp-calendar.left {
  padding: 6px 38px;
}

th.prev.available,
th.next.available,
th.prev.available:hover,
th.next.available:hover {
  position: absolute;
  height: 80% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important;
}

th.prev.available {
  left: 10px;
}

th.next.available {
  right: 10px;
}

.daterangepicker.date_picker .calendar-table .next span,
.daterangepicker.date_picker .calendar-table .prev span {
  border-color: #6E7491;
  padding: 6px;
}

td.in-range.available:hover {
  background-color: #d6e8ff !important;
  border-color: transparent !important;
  color: #000 !important;
  border-radius: 100% !important;
}

.daterangepicker.date_picker th.month {
  width: auto;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  padding-bottom: 0.5rem;
}

.date-day {
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #33344F;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 1rem;
}

.daterangepicker.date_picker .drp-selected {
  font-size: 14px;
}

.daterangepicker.date_picker .drp-buttons {
  margin: 0rem 1rem;
  padding: 15px;
}

#no_of_days {
  font-weight: 600;
}

.clear-apply {
  display: flex;
  justify-content: space-evenly;
}

.clear-apply .cancelBtn {
  background: #F0F0F0;
  border-radius: 50px;
  font-weight: 400 !important;
  font-size: 15px !important;
  text-transform: capitalize;
  color: #727274;
  width: 100%;
}

.clear-apply .applyBtn {
  background: #328CFF;
  border-radius: 50px;
  font-weight: 600 !important;
  font-size: 15px !important;
  text-transform: capitalize;
  color: #FFFFFF;
  width: 100%;
}

.daterangepicker.date_picker td.active,
.daterangepicker.date_picker td.active:hover,
td.available:hover {
  background-color: #328cff !important;
  border-color: transparent !important;
  color: #fff !important;
  border-radius: 100% !important;
}

.daterangepicker.date_picker td.in-range.available {
  background-color: #d6e8ff;
  border-radius: 100% !important;
}

.daterangepicker.date_picker td.start-date.end-date {
  border-radius: 100% !important;
}

td.available {
  padding: 3px;
  border-radius: 100% !important;
}

/* datapicker style end */

/* filter style start */

.auto_suggest {
  background: #FFFFFF;
  box-shadow: 0px 4px 14px rgb(0 0 0 / 10%);
  border-radius: 10px;
  position: absolute;
  z-index: 9;
}
.auto_suggest #list_show {
  list-style: none;
  padding: 0rem 1rem;
  height: 235px;
  overflow-y: auto;
  margin: 0rem;
  overflow-x: hidden;
}
.auto_suggest #list_show li {
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0rem;
}
.city-place p {
  margin: 0px;
  margin-left: 1rem;
  word-break: break-word;
}
.city-place .city {
  font-weight: 700;
  font-size: 16px;
  color: #2E3758;
}
.city-place .cityplace {
  font-weight: 400;
  font-size: 14px;
  color: #2E3758;
}
/* width */
.auto_suggest #list_show::-webkit-scrollbar {
  width: 6px;
}

/* Track */
.auto_suggest #list_show::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
/* Handle */
.auto_suggest #list_show::-webkit-scrollbar-thumb {
  background: #d0cbcb; 
  border-radius: 10px;
}

/* Handle on hover */
.auto_suggest #list_show::-webkit-scrollbar-thumb:hover {
  background: #d0cbcb; 
}
@media (max-width:767px){
  .auto_suggest {
    width: 100%;
  }
}
/* filter style end */

/* PopularFilters style start */
.home-page .section-1 .form-group .Popular-Filters .pop-input {
  background: rgba(25, 29, 35, 0.05);
  border-radius: 50px;
  border: 0px;
  height: 43px;
  width: 100%;
  padding: 0px 35px 0px 15px;
  font-weight: 600;
  font-size: 16px;
  color: #252525;
  background-image: url('../../images/gray-arrow.svg');
  background-repeat: no-repeat;
  background-position: right 13% top 53%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.Pop_Filter {
  position: absolute;
  top: 47px;
  left: auto;
  right: 0px;
  background: #FFFFFF;
  box-shadow: 0px 4px 14px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 1rem;
  z-index: 999;
}
.PopularFilters .Pop_Filter input {
  padding: 0px !important;
  height: auto !important;
}
.star-multi {
  position: relative;
  top: -3px;
  padding-left: 1rem;
}
.popular-bor {
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0rem;
}
.popular-bor:first-child {
  padding-top: 0rem;
}
.popular-bor:last-child {
  border: 0px;
  padding-bottom: 0rem;
}
@media (max-width:767px){
  .PopularFilters .Pop_Filter {
   width: 100%;
  }
}
/* PopularFilters style end */
