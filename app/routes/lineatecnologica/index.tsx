import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"; 

export const meta: MetaFunction = () => {
  return {
    title: "ISE ltda | Importaciones",
    description:
      "This becomes the nice preview on search results.",
  };
};
export default function Index() {
  
  return (
    <>
      <main>
        <div className="page-loader">
          <div className="loader">Loading...</div>
        </div>
        <nav
          className="navbar navbar-custom navbar-transparent navbar-fixed-top one-page"
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
              <Link className="navbar-brand" to="/">
               ISE LTDA.
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="custom-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#totop">Inicio</a>
                </li>
                <li>
                  <a className="section-scroll" href="#about">
                    Nosotros
                  </a>
                </li>
               
               
                <li>
                  <a className="section-scroll" href="#products">
                    Lineas
                  </a>
                </li>
                
               
                <li>
                  <a className="section-scroll" href="#contact">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section
          className="home-section home-full-height bg-dark bg-gradient"
          id="home"
          data-background="assets/images/section-10.jpg"
        >
          <div className="titan-caption">
            <div className="caption-content">
              <div className="font-alt mb-30 titan-title-size-1">
              <img width="450" height="284" src="/assets/images/logo.png" data-src="/assets/images/logo.png" className="attachment-large size-large lazy loaded" alt="" loading="lazy" data-was-processed="true" />
              </div>
              <div className="font-alt mb-40 titan-title-size-2">
               IMPORTACIONES SALUD & ENTRETENIMIENTO
              </div>
              <a className="section-scroll btn btn-border-w btn-round" href="#">
               Conozca mas sobre nosotros
              </a>
            </div>
          </div>
        </section>
        <div className="main">
        <section className="module pt-0 pb-0" id="about">
          <div className="row position-relative m-0">
            <div className="col-xs-12 col-md-6 side-image" data-background="assets/images/section-14.jpg"></div>
            <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="module-title font-alt align-left">Nosotros</h2>
                  <div className="module-subtitle font-serif align-left">ISE LTDA. es una de la Empresas referentes en el ámbito Tecnológico de Software en el País.</div>
                  <p>Somos una empresa comercial, la cual se dedica a la implementación, distribución y administración de una cartera diversa de productos de Software y Hardware, que se encarga de implementar proyectos a nivel Nacional, asegurando calidad y excelencia en cada uno de nuestros servicios.</p>
                  <p>Buscamos fomentar la Industria de la Tecnología, asesorando a nuestro clientes, en la selección de los mejores Partners e Integradores de soluciones para la gestión de sus proyectos tecnológicos, con el fin de satisfacer las necesidades y brindar soluciones completas de alto valor.</p>
                  <p>Con foco en el licenciamiento de software y su ciclo de vida. ISE LTDA. es pionera en la atención personalizada a nuestros clientes.</p>
                  <h2  className="module-title font-alt align-left pt-50">VISIÓN</h2>
                  <p>Ser una empresa innovadora que, mediante una amplia gama de productos de alta calidad y prestigio, compañados de una excelente actitud de servicio, logre satisfacer las necesidades de sus clientes y posicionarse como un referente en la industria tecnológica</p>
                </div>
              </div>
            </div>
          </div>
        </section>
          
          <section
            className="module bg-dark-60"
            data-background="assets/images/section-6.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="video-box">
                    <div className="video-box-icon">
                      <a
                        className="video-pop-up"
                        href="https://www.youtube.com/watch?v=TTxZj3DZiIM"
                      >
                        <span className="icon-video"></span>
                      </a>
                    </div>
                    <div className="video-title font-alt">Presentacion</div>
                    <div className="video-subtitle font-alt">
                     Mira el video de nuestros productos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="module pb-0" id="works">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Our Works</h2>
                  <div className="module-subtitle font-serif"></div>
                </div>
              </div>
            </div>
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
            </div>
            <ul
              className="works-grid works-grid-gut works-grid-3 works-hover-w"
              id="works-grid"
            >
              <li className="work-item illustration webdesign">
                <a href="portfolio-single-1.html">
                  <div className="work-image">
                    <img src="assets/images/work-1.jpg" alt="Portfolio Item" />
                  </div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Corporate Identity</h3>
                    <div className="work-descr">Illustration</div>
                  </div>
                </a>
              </li>
              <li className="work-item marketing photography">
                <a href="portfolio-single-1.html">
                  <div className="work-image">
                    <img src="assets/images/work-2.jpg" alt="Portfolio Item" />
                  </div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Bag MockUp</h3>
                    <div className="work-descr">Marketing</div>
                  </div>
                </a>
              </li>
              <li className="work-item illustration photography">
                <a href="portfolio-single-1.html">
                  <div className="work-image">
                    <img src="assets/images/work-3.jpg" alt="Portfolio Item" />
                  </div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Disk Cover</h3>
                    <div className="work-descr">Illustration</div>
                  </div>
                </a>
              </li>
              <li className="work-item marketing photography">
                <a href="portfolio-single-1.html">
                  <div className="work-image">
                    <img src="assets/images/work-4.jpg" alt="Portfolio Item" />
                  </div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Business Card</h3>
                    <div className="work-descr">Photography</div>
                  </div>
                </a>
              </li>
              <li className="work-item illustration webdesign">
                <a href="portfolio-single-1.html">
                  <div className="work-image">
                    <img src="assets/images/work-5.jpg" alt="Portfolio Item" />
                  </div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Business Card</h3>
                    <div className="work-descr">Webdesign</div>
                  </div>
                </a>
              </li>
              <li className="work-item marketing webdesign">
                <a href="portfolio-single-1.html">
                  <div className="work-image">
                    <img src="assets/images/work-6.jpg" alt="Portfolio Item" />
                  </div>
                  <div className="work-caption font-alt">
                    <h3 className="work-title">Business Cards in paper clip</h3>
                    <div className="work-descr">Marketing</div>
                  </div>
                </a>
              </li>
            </ul>
          </section> */}
          {/* <section className="module-small bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
                  <div className="callout-text font-alt">
                    <h3 className="callout-title">Want to see more works?</h3>
                    <p>We are always open to interesting projects.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="callout-btn-box">
                    <a
                      className="btn btn-w btn-round"
                      href="portfolio_boxed_gutter_col_3.html"
                    >
                      Lets view portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="module" id="alt-features">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Our features</h2>
                  <div className="module-subtitle font-serif">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-strategy"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Branding</h3>A
                    wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-tools-2"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Development</h3>
                    A wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-target"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Marketing</h3>A
                    wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-tools"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Design</h3>A
                    wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 hidden-xs hidden-sm">
                  <div className="alt-services-image align-center">
                    <img src="assets/images/promo.png" alt="Feature Image" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-camera"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Photography</h3>
                    A wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-mobile"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Mobile</h3>A
                    wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-linegraph"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Music</h3>A
                    wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <span className="icon-basket"></span>
                    </div>
                    <h3 className="alt-features-title font-alt">Shop</h3>A
                    wonderful serenity has taken possession of my entire soul
                    like these sweet mornings.
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <hr className="divider-w" />
          <section className="module" id="products">
            <div className="container">
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Nuestras Lineas</h2>
                  <div className="module-subtitle font-serif">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart.
                  </div>
                </div>
              </div>
            <div className="row landing-image-text">
              <div className="col-sm-6 col-sm-push-6"><img className="center-block" src="assets/images/logos-hojas.png" alt="" /></div>
              <div className="col-sm-6 col-sm-pull-6">
                <h2 className="font-alt">SALUD Y BIENESTAR</h2>
                <p>Productos para salud.</p><Link className="btn btn-border-d btn-circle" to="/lineaverde/">CONOCER MAS</Link>
              </div>
            </div>
            <div className="row landing-image-text">
              <div className="col-sm-6"><img className="center-block" src="assets/images/logos-globe.png" alt=""/></div>
              <div className="col-sm-6">
                <h2 className="font-alt">SOFTWARE Y TECNOLOGIA</h2>
                <p>Para ti y tu empresa</p>
                <Link className="btn btn-border-d btn-circle" to="/lineasoftware/">CONOCER MAS</Link>
              </div>
            </div>
            </div>
          </section>
        
       
          <section
            className="module bg-dark-60 pt-0 pb-0 parallax-bg testimonial"
            data-background="assets/images/testimonial_bg.jpg"
          >
            <div className="testimonials-slider pt-140 pb-140">
              <ul className="slides">
                <li>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="module-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2">
                        <blockquote className="testimonial-text font-alt">
                          I am alone, and feel the charm of existence in this
                          spot, which was created for the bliss of souls like
                          mine.
                        </blockquote>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-sm-offset-4">
                        <div className="testimonial-author">
                          <div className="testimonial-caption font-alt">
                            <div className="testimonial-title">Jack Woods</div>
                            <div className="testimonial-descr">
                              SomeCompany INC, CEO
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="module-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2">
                        <blockquote className="testimonial-text font-alt">
                          I should be incapable of drawing a single stroke at
                          the present moment; and yet I feel that I never was a
                          greater artist than now.
                        </blockquote>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-sm-offset-4">
                        <div className="testimonial-author">
                          <div className="testimonial-caption font-alt">
                            <div className="testimonial-title">Jim Stone</div>
                            <div className="testimonial-descr">
                              SomeCompany INC, CEO
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="module-icon">
                          <span className="icon-quote"></span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8 col-sm-offset-2">
                        <blockquote className="testimonial-text font-alt">
                          I am so happy, my dear friend, so absorbed in the
                          exquisite sense of mere tranquil existence, that I
                          neglect my talents.
                        </blockquote>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-sm-offset-4">
                        <div className="testimonial-author">
                          <div className="testimonial-caption font-alt">
                            <div className="testimonial-title">Adele Snow</div>
                            <div className="testimonial-descr">
                              SomeCompany INC, CEO
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* <section className="module" id="news">
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
                          src="assets/images/post-1.jpg"
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
                          src="assets/images/post-2.jpg"
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
                          src="assets/images/post-3.jpg"
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
          </section> */}
          {/* <div className="module-small bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-4 col-lg-offset-2">
                  <div className="callout-text font-alt">
                    <h3 className="callout-title">Subscribe now</h3>
                    <p>We will not spam your email.</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4">
                  <div className="callout-btn-box">
                    <form
                      id="subscription-form"
                      role="form"
                      method="post"
                      action="php/subscribe.php"
                    >
                      <div className="input-group">
                        <input
                          className="form-control"
                          type="email"
                          id="semail"
                          name="semail"
                          placeholder="Your Email"
                          data-validation-required-message="Please enter your email address."
                          required="required"
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-g btn-round"
                            id="subscription-form-submit"
                            type="submit"
                          >
                            Submit
                          </button>
                        </span>
                      </div>
                    </form>
                    <div
                      className="text-center"
                      id="subscription-response"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <section className="module" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Contactanos</h2>
                <div className="module-subtitle font-serif"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <form id="contactForm" role="form" method="post" action="php/contact.php">
                  <div className="form-group">
                    <label className="sr-only" for="name">Name</label>
                    <input className="form-control" type="text" id="name" name="name" placeholder="Tu Nombre*" required="required" data-validation-required-message="Please enter your name."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="email">Email</label>
                    <input className="form-control" type="email" id="email" name="email" placeholder="Tu correo electronico*" required="required" data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows="7" id="message" name="message" placeholder="Tu mensaje*" required="required" data-validation-required-message="Please enter your message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-block btn-round btn-d" id="cfsubmit" type="submit">Enviar</button>
                  </div>
                </form>
                <div className="ajax-response font-alt" id="contactFormResponse"></div>
              </div>
              <div className="col-sm-4">
                <div className="alt-features-item mt-0">
                  <div className="alt-features-icon"><span className="icon-megaphone"></span></div>
                  <h3 className="alt-features-title font-alt">Donde nos encuentras</h3>ISE ltda.<br/>Calle Misael Saracho Nro. 1184<br/>La Paz, Bolivia
                </div>
                <div className="alt-features-item mt-xs-60">
                  <div className="alt-features-icon"><span className="icon-map"></span></div>
                  <h3 className="alt-features-title font-alt">Dudas?</h3>Email: somecompany@example.com<br/>Phone: +1 234 567 89 10
                </div>
              </div>
            </div>
          </div>
        </section>
          <section id="map-section">
            {/* <div id="map"></div> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d956.3661661900794!2d-68.12282491699169!3d-16.50262294058292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21bd3024f007%3A0x2a74f58e90d5e125!2sTITIRILANDIA!5e0!3m2!1ses!2sbo!4v1658423715443!5m2!1ses!2sbo" width="100%" height="450" style={{'border':0}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
        
          <hr className="divider-d" />
          <footer className="footer bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <p className="copyright font-alt">
                    &copy; 2022&nbsp;<a href="https://www.comtech.com.bo">ComTech</a>, All Rights
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
        </div>
        <div className="scroll-up">
          <a href="#totop">
            <i className="fa fa-angle-double-up"></i>
          </a>
        </div>
      </main>
      <script src="assets/lib/jquery/dist/jquery.js"></script>
      <script src="assets/lib/bootstrap/dist/js/bootstrap.min.js"></script>
      <script src="assets/lib/wow/dist/wow.js"></script>
      <script src="assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"></script>
      <script src="assets/lib/isotope/dist/isotope.pkgd.js"></script>
      <script src="assets/lib/imagesloaded/imagesloaded.pkgd.js"></script>
      <script src="assets/lib/flexslider/jquery.flexslider.js"></script>
      <script src="assets/lib/owl.carousel/dist/owl.carousel.min.js"></script>
      <script src="assets/lib/smoothscroll.js"></script>
      <script src="assets/lib/magnific-popup/dist/jquery.magnific-popup.js"></script>
      <script src="assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"></script>
      <script
        async=""
        defer=""
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXx2k5gQA3V57v8mfqDdLT31hZRzUlxr4"
      ></script>
      <script src="assets/js/plugins.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}
