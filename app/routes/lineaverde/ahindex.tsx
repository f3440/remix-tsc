import type { MetaFunction } from "@remix-run/node";
import root_links from './links'
import { LinksFunction } from "@remix-run/node";

export const links:LinksFunction =()=>{
  return root_links()
}

export const meta: MetaFunction = () => {
  return {
    title: "Linea Verde | ISE ltda",
    description:
      "This becomes the nice preview on search results.",
     
  };
};

export default function (){

    return(<>
     <main>
        <div className="page-loader">
          <div className="loader">Loading...</div>
        </div>
        <nav
          className="navbar navbar-custom navbar-fixed-top navbar-transparent"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#custom-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                Titan
              </a>
            </div>
            <div className="collapse navbar-collapse" id="custom-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="index_mp_fullscreen_video_background.html">
                        Default
                      </a>
                    </li>
                    <li>
                      <a href="index_op_fullscreen_gradient_overlay.html">
                        One Page
                      </a>
                    </li>
                    <li>
                      <a href="index_agency.html">Agency</a>
                    </li>
                    <li>
                      <a href="index_portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="index_restaurant.html">Restaurant</a>
                    </li>
                    <li>
                      <a href="index_finance.html">Finance</a>
                    </li>
                    <li>
                      <a href="index_landing.html">Landing Page</a>
                    </li>
                    <li>
                      <a href="index_photography.html">Photography</a>
                    </li>
                    <li>
                      <a href="index_shop.html">Shop</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Headers
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Static Image Header
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index_mp_fullscreen_static.html">
                            Fulscreen
                          </a>
                        </li>
                        <li>
                          <a href="index_mp_classNameic_static.html">
                            classNameic
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Flexslider Header
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index_mp_fullscreen_flexslider.html">
                            Fulscreen
                          </a>
                        </li>
                        <li>
                          <a href="index_mp_classNameic_flexslider.html">
                            classNameic
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Video Background Header
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index_mp_fullscreen_video_background.html">
                            Fulscreen
                          </a>
                        </li>
                        <li>
                          <a href="index_mp_classNameic_video_background.html">
                            classNameic
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Text Rotator Header
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index_mp_fullscreen_text_rotator.html">
                            Fulscreen
                          </a>
                        </li>
                        <li>
                          <a href="index_mp_classNameic_text_rotator.html">
                            classNameic
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Gradient Overlay Header
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index_mp_fullscreen_gradient_overlay.html">
                            Fulscreen
                          </a>
                        </li>
                        <li>
                          <a href="index_mp_classNameic_gradient_overlay.html">
                            classNameic
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="about1.html">About 1</a>
                        </li>
                        <li>
                          <a href="about2.html">About 2</a>
                        </li>
                        <li>
                          <a href="about3.html">About 3</a>
                        </li>
                        <li>
                          <a href="about4.html">About 4</a>
                        </li>
                        <li>
                          <a href="about5.html">About 5</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="service1.html">Service 1</a>
                        </li>
                        <li>
                          <a href="service2.html">Service 2</a>
                        </li>
                        <li>
                          <a href="service3.html">Service 3</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Pricing
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="pricing1.html">Pricing 1</a>
                        </li>
                        <li>
                          <a href="pricing2.html">Pricing 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Gallery
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="gallery_col_2.html">2 Columns</a>
                        </li>
                        <li>
                          <a href="gallery_col_3.html">3 Columns</a>
                        </li>
                        <li>
                          <a href="gallery_col_4.html">4 Columns</a>
                        </li>
                        <li>
                          <a href="gallery_col_6.html">6 Columns</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Contact
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="contact1.html">Contact 1</a>
                        </li>
                        <li>
                          <a href="contact2.html">Contact 2</a>
                        </li>
                        <li>
                          <a href="contact3.html">Contact 3</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Restaurant menu
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="restaurant_menu1.html">Menu 2 Columns</a>
                        </li>
                        <li>
                          <a href="restaurant_menu2.html">Menu 3 Columns</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="login_register.html">Login / Register</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="404.html">Page 404</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Portfolio
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Boxed
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="portfolio_boxed_col_2.html">2 Columns</a>
                        </li>
                        <li>
                          <a href="portfolio_boxed_col_3.html">3 Columns</a>
                        </li>
                        <li>
                          <a href="portfolio_boxed_col_4.html">4 Columns</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Boxed - Gutter
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="portfolio_boxed_gutter_col_2.html">
                            2 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_boxed_gutter_col_3.html">
                            3 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_boxed_gutter_col_4.html">
                            4 Columns
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Full Width
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="portfolio_full_width_col_2.html">
                            2 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_full_width_col_3.html">
                            3 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_full_width_col_4.html">
                            4 Columns
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Full Width - Gutter
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="portfolio_full_width_gutter_col_2.html">
                            2 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_full_width_gutter_col_3.html">
                            3 Columns
                          </a>
                        </li>
                        <li>
                          <a href="portfolio_full_width_gutter_col_4.html">
                            4 Columns
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Masonry
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Boxed
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio_masonry_boxed_col_2.html">
                                2 Columns
                              </a>
                            </li>
                            <li>
                              <a href="portfolio_masonry_boxed_col_3.html">
                                3 Columns
                              </a>
                            </li>
                            <li>
                              <a href="portfolio_masonry_boxed_col_4.html">
                                4 Columns
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Full Width
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio_masonry_full_width_col_2.html">
                                2 Columns
                              </a>
                            </li>
                            <li>
                              <a href="portfolio_masonry_full_width_col_3.html">
                                3 Columns
                              </a>
                            </li>
                            <li>
                              <a href="portfolio_masonry_full_width_col_4.html">
                                4 Columns
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Hover Style
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="portfolio_hover_black.html">Black</a>
                        </li>
                        <li>
                          <a href="portfolio_hover_gradient.html">Gradient</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Single
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Featured Image
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio_single_featured_image1.html">
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a href="portfolio_single_featured_image2.html">
                                Style 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Featured Slider
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio_single_featured_slider1.html">
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a href="portfolio_single_featured_slider2.html">
                                Style 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Featured Video
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio_single_featured_video1.html">
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a href="portfolio_single_featured_video2.html">
                                Style 2
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Standard
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog_standard_left_sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog_standard_right_sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Grid
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog_grid_col_2.html">2 Columns</a>
                        </li>
                        <li>
                          <a href="blog_grid_col_3.html">3 Columns</a>
                        </li>
                        <li>
                          <a href="blog_grid_col_4.html">4 Columns</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Masonry
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog_grid_masonry_col_2.html">2 Columns</a>
                        </li>
                        <li>
                          <a href="blog_grid_masonry_col_3.html">3 Columns</a>
                        </li>
                        <li>
                          <a href="blog_grid_masonry_col_4.html">4 Columns</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Single
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog_single_left_sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog_single_right_sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Features
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="alerts-and-wells.html">
                        <i className="fa fa-bolt"></i> Alerts and Wells
                      </a>
                    </li>
                    <li>
                      <a href="buttons.html">
                        <i className="fa fa-link fa-sm"></i> Buttons
                      </a>
                    </li>
                    <li>
                      <a href="tabs_and_accordions.html">
                        <i className="fa fa-tasks"></i> Tabs &amp; Accordions
                      </a>
                    </li>
                    <li>
                      <a href="content_box.html">
                        <i className="fa fa-list-alt"></i> Contents Box
                      </a>
                    </li>
                    <li>
                      <a href="forms.html">
                        <i className="fa fa-check-square-o"></i> Forms
                      </a>
                    </li>
                    <li>
                      <a href="icons.html">
                        <i className="fa fa-star"></i> Icons
                      </a>
                    </li>
                    <li>
                      <a href="progress-bars.html">
                        <i className="fa fa-server"></i> Progress Bars
                      </a>
                    </li>
                    <li>
                      <a href="typography.html">
                        <i className="fa fa-font"></i> Typography
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                      >
                        Product
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="shop_product_col_3.html">3 columns</a>
                        </li>
                        <li>
                          <a href="shop_product_col_4.html">4 columns</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop_single_product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="shop_checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="documentation.html"
                    data-toggle="dropdown"
                  >
                    Documentation
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="documentation.html#contact">Contact Form</a>
                    </li>
                    <li>
                      <a href="documentation.html#reservation">
                        Reservation Form
                      </a>
                    </li>
                    <li>
                      <a href="documentation.html#mailchimp">Mailchimp</a>
                    </li>
                    <li>
                      <a href="documentation.html#gmap">Google Map</a>
                    </li>
                    <li>
                      <a href="documentation.html#plugin">Plugins</a>
                    </li>
                    <li>
                      <a href="documentation.html#changelog">Changelog</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section
          className="home-section bg-dark-60 portfolio-page-header parallax-bg"
          id="home"
          data-background="./assets/images/portfolio/portfolio_header_bg.jpg"
        >
          <div className="titan-caption">
            <div className="caption-content">
              <div className="font-alt mb-30 titan-title-size-1">
                Hello &amp; welcome
              </div>
              <div className="font-alt mb-40 titan-title-size-4">
                We are Titan
              </div>
              <a
                className="section-scroll btn btn-border-w btn-round"
                href="#portfolio"
              >
                Our Works
              </a>
            </div>
          </div>
        </section>
        <div className="main">
          <section className="module" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="filter font-alt" id="filters">
                    <li>
                      <a
                        className="current wow fadeInUp"
                        href="#"
                        data-filter="*"
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp"
                        href="#"
                        data-filter=".illustration"
                        data-wow-delay="0.2s"
                      >
                        Illustration
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp"
                        href="#"
                        data-filter=".marketing"
                        data-wow-delay="0.4s"
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp"
                        href="#"
                        data-filter=".photography"
                        data-wow-delay="0.6s"
                      >
                        Photography
                      </a>
                    </li>
                    <li>
                      <a
                        className="wow fadeInUp"
                        href="#"
                        data-filter=".webdesign"
                        data-wow-delay="0.6s"
                      >
                        Web Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul
                className="works-grid works-grid-masonry works-grid-3 works-hover-d"
                id="works-grid"
              >
                <li className="work-item illustration webdesign">
                  <a href="portfolio_single_featured_image1.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio1.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Corporate Identity</h3>
                      <div className="work-descr">Illustration</div>
                    </div>
                  </a>
                </li>
                <li className="work-item marketing photography">
                  <a href="portfolio_single_featured_image2.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio2.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Bag MockUp</h3>
                      <div className="work-descr">Marketing</div>
                    </div>
                  </a>
                </li>
                <li className="work-item illustration photography">
                  <a href="portfolio_single_featured_slider1.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio3.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Disk Cover</h3>
                      <div className="work-descr">Illustration</div>
                    </div>
                  </a>
                </li>
                <li className="work-item marketing photography">
                  <a href="portfolio_single_featured_slider2.htmll">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio4.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Business Card</h3>
                      <div className="work-descr">Photography</div>
                    </div>
                  </a>
                </li>
                <li className="work-item illustration webdesign">
                  <a href="portfolio_single_featured_video1.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio5.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Web Design</h3>
                      <div className="work-descr">Webdesign</div>
                    </div>
                  </a>
                </li>
                <li className="work-item marketing webdesign">
                  <a href="portfolio_single_featured_video2.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio6.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">New Product</h3>
                      <div className="work-descr">Marketing</div>
                    </div>
                  </a>
                </li>
                <li className="work-item marketing webdesign">
                  <a href="portfolio_single_featured_image1.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio7.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">New Product</h3>
                      <div className="work-descr">Marketing</div>
                    </div>
                  </a>
                </li>
                <li className="work-item marketing">
                  <a href="portfolio_single_featured_slider1.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio9.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Bottle MockUp</h3>
                      <div className="work-descr">Marketing</div>
                    </div>
                  </a>
                </li>
                <li className="work-item illustration photography">
                  <a href="portfolio_single_featured_slider2.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio10.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Personal Identity</h3>
                      <div className="work-descr">Photography</div>
                    </div>
                  </a>
                </li>
                <li className="work-item illustration marketing">
                  <a href="portfolio_single_featured_video1.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio11.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Business Card</h3>
                      <div className="work-descr">Webdesign</div>
                    </div>
                  </a>
                </li>
                <li className="work-item illustration webdesign">
                  <a href="portfolio_single_featured_image2.html">
                    <div className="work-image">
                      <img
                        src="./assets/images/portfolio/masonry-portfolio8.jpg"
                        alt="Portfolio Item"
                      />
                    </div>
                    <div className="work-caption font-alt">
                      <h3 className="work-title">Paper Clip</h3>
                      <div className="work-descr">Illustration</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="module-small bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3 text-center">
                  <h4 className="font-alt mb-20">Let's work together</h4>
                  <a className="btn btn-border-w" href="contact3.html">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="module" id="news">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Latest blog posts</h2>
                  <div className="module-subtitle font-serif">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart.
                  </div>
                </div>
              </div>
              <div className="row multi-columns-row post-columns">
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="post mb-20">
                    <div className="post-thumbnail">
                      <a href="#">
                        <img
                          src="../assets/images/work-1.jpg"
                          alt="Blog-post Thumbnail"
                        />
                      </a>
                    </div>
                    <div className="post-header font-alt">
                      <h2 className="post-title">
                        <a href="#">Our trip to the Alps</a>
                      </h2>
                      <div className="post-meta">
                        By&nbsp;<a href="#">Mark Stone</a>&nbsp;| 23 November |
                        3 Comments
                      </div>
                    </div>
                    <div className="post-entry">
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart.
                      </p>
                    </div>
                    <div className="post-more">
                      <a className="more-link" href="#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="post mb-20">
                    <div className="post-thumbnail">
                      <a href="#">
                        <img
                          src="./assets/images/work-2.jpg"
                          alt="Blog-post Thumbnail"
                        />
                      </a>
                    </div>
                    <div className="post-header font-alt">
                      <h2 className="post-title">
                        <a href="#">Shore after the tide</a>
                      </h2>
                      <div className="post-meta">
                        By&nbsp;<a href="#">Andy River</a>&nbsp;| 11 November |
                        4 Comments
                      </div>
                    </div>
                    <div className="post-entry">
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart.
                      </p>
                    </div>
                    <div className="post-more">
                      <a className="more-link" href="#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="post mb-20">
                    <div className="post-thumbnail">
                      <a href="#">
                        <img
                          src="./assets/images/work-3.jpg"
                          alt="Blog-post Thumbnail"
                        />
                      </a>
                    </div>
                    <div className="post-header font-alt">
                      <h2 className="post-title">
                        <a href="#">We in New Zealand</a>
                      </h2>
                      <div className="post-meta">
                        By&nbsp;<a href="#">Dylan Woods</a>&nbsp;| 5 November |
                        15 Comments
                      </div>
                    </div>
                    <div className="post-entry">
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart.
                      </p>
                    </div>
                    <div className="post-more">
                      <a className="more-link" href="#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="module-small bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="widget">
                    <h5 className="widget-title font-alt">About Titan</h5>
                    <p>
                      The languages only differ in their grammar, their
                      pronunciation and their most common words.
                    </p>
                    <p>Phone: +1 234 567 89 10</p>Fax: +1 234 567 89 10
                    <p>
                      Email:<a href="#">somecompany@example.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="widget">
                    <h5 className="widget-title font-alt">Recent Comments</h5>
                    <ul className="icon-list">
                      <li>
                        Maria on <a href="#">Designer Desk Essentials</a>
                      </li>
                      <li>
                        John on <a href="#">Realistic Business Card Mockup</a>
                      </li>
                      <li>
                        Andy on <a href="#">Eco bag Mockup</a>
                      </li>
                      <li>
                        Jack on <a href="#">Bottle Mockup</a>
                      </li>
                      <li>
                        Mark on <a href="#">Our trip to the Alps</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="widget">
                    <h5 className="widget-title font-alt">Blog Categories</h5>
                    <ul className="icon-list">
                      <li>
                        <a href="#">Photography - 7</a>
                      </li>
                      <li>
                        <a href="#">Web Design - 3</a>
                      </li>
                      <li>
                        <a href="#">Illustration - 12</a>
                      </li>
                      <li>
                        <a href="#">Marketing - 1</a>
                      </li>
                      <li>
                        <a href="#">Wordpress - 16</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="widget">
                    <h5 className="widget-title font-alt">Popular Posts</h5>
                    <ul className="widget-posts">
                      <li className="clearfix">
                        <div className="widget-posts-image">
                          <a href="#">
                            <img
                              src="./assets/images/rp-1.jpg"
                              alt="Post Thumbnail"
                            />
                          </a>
                        </div>
                        <div className="widget-posts-body">
                          <div className="widget-posts-title">
                            <a href="#">Designer Desk Essentials</a>
                          </div>
                          <div className="widget-posts-meta">23 january</div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="widget-posts-image">
                          <a href="#">
                            <img
                              src="./assets/images/rp-2.jpg"
                              alt="Post Thumbnail"
                            />
                          </a>
                        </div>
                        <div className="widget-posts-body">
                          <div className="widget-posts-title">
                            <a href="#">Realistic Business Card Mockup</a>
                          </div>
                          <div className="widget-posts-meta">15 February</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider-d" />
          <footer className="footer bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <p className="copyright font-alt">
                    &copy; 2017&nbsp;<a href="index.html">TitaN</a>, All Rights
                    Reserved
                  </p>
                </div>
                <div className="col-sm-6">
                  <div className="footer-social-links">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-skype"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="scroll-up">
            <a href="#totop">
              <i className="fa fa-angle-double-up"></i>
            </a>
          </div>
        </div>
      </main>
      <script src="./assets/lib/jquery/dist/jquery.js"></script>
      <script src="./assets/lib/bootstrap/dist/js/bootstrap.min.js"></script>
      <script src="./assets/lib/wow/dist/wow.js"></script>
      <script src="./assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"></script>
      <script src="./assets/lib/isotope/dist/isotope.pkgd.js"></script>
      <script src="./assets/lib/imagesloaded/imagesloaded.pkgd.js"></script>
      <script src="./assets/lib/flexslider/jquery.flexslider.js"></script>
      <script src="./assets/lib/owl.carousel/dist/owl.carousel.min.js"></script>
      <script src="./assets/lib/smoothscroll.js"></script>
      <script src="./assets/lib/magnific-popup/dist/jquery.magnific-popup.js"></script>
      <script src="./assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"></script>
      <script src="./assets/js/plugins.js"></script>
      <script src="./assets/js/main.js"></script>
    </>)
}