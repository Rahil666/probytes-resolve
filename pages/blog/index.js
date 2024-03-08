import { useEffect, useState } from "react";
import BlogLiveRightBar from "@/components/BlogLiveRightBar";
import BlogLiveLeftBar from "@/components/BlogLiveLeftBar";

const ProbytesBlogs = () => {

  return (
    <section className="pb-blog-sx-aq">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <BlogLiveRightBar />
          </div>


          <div className="col-lg-6">
            {/* inner Page Design */}
            <div className="rec-blog-wrap-sx-aq">
              <div className="rec-blog-a">
                <div className="rec-blog-a-head">
                  <h1>Recent Blogs</h1>
                </div>
                <div className="rec-blog-so-aq">
                  <div
                    id="carouselExampleCaptionso"
                    className="carousel slide"
                    data-bs-ride="carouselo"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptionso"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptionso"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptionso"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="machine-learning-with-Iot-exploring-future-possibilities.png"
                          className="d-block w-100 img-fluid"
                          alt="banner"
                          style={{ width: "50%" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/top-15-guidlines-for-thriving-dashboard-designs.jpg"
                          className="d-block w-100 img-fluid"
                          alt="banner"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            second slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/featured-image-whos-who-.jpg"
                          className="d-block w-100 img-fluid"
                          alt="banner"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rec-blog-a">
                <div className="rec-blog-a-head">
                  <a href="/blog/category/python/">
                    <h4>Python</h4>
                  </a>
                  <a href="/blog/category/python/">
                    <span>58 More Blogs</span>
                  </a>
                </div>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="/blog/machine-learning-with-iot-exploring-future-possibilities/">
                        <img
                          src="/machine-learning-with-Iot-exploring-future-possibilities.png"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="/blog/machine-learning-with-iot-exploring-future-possibilities/">
                        Machine Learning with IoT: Exploring Future
                        Possibilities
                      </a>
                    </h5>
                    <p>
                      The fusion of machine learning with IoT signifies the
                      start...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/artificial-intelligence/">Artificial Intelligence</a>,
                      <a href="https://www.probytes.net/blog/category/python/">Python</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>May 6, 2020</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/what-is-a-web-framework/">
                        <img
                          src="/What-is-a-Web-Framework.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/what-is-a-web-framework/">What is a Web Framework?</a>
                    </h5>
                    <p>
                      A web framework ties up the user interface, database,
                      server,...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/core-php/">Core PHP</a>,
                      <a href="https://www.probytes.net/blog/category/magento/">Magento</a>,
                      <a href="https://www.probytes.net/blog/category/python/">Python</a>,
                      <a href="https://www.probytes.net/blog/category/web-development/">Web Development</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>November 15, 2019</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/most-popular-programming-languages/">
                        <img
                          src="/Most-Popular-Programming-Languages.png"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/most-popular-programming-languages/">Most Popular Programming Languages 2020</a>
                    </h5>
                    <p>
                      The language that humans use to communicate with computers
                      is...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/core-php/">Core PHP</a>,
                      <a href="https://www.probytes.net/blog/category/python/">Python</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>October 30, 2019</p>
                    </span>
                  </div>
                </article>
              </div>
              <div className="rec-blog-a">
                <div className="rec-blog-a-head">
                  <a href="https://www.probytes.net/blog/category/web-development/">
                    <h4>Web Development</h4>
                  </a>
                  <a href="https://www.probytes.net/blog/category/web-development/">
                    <span>35 More Blogs</span>
                  </a>
                </div>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/top-guidelines-for-a-thriving-dashboard-design/">
                        <img
                          src="/top-15-guidlines-for-thriving-dashboard-designs.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/top-guidelines-for-a-thriving-dashboard-design/">
                        Top 15 Guidelines for a Thriving Dashboard Design
                      </a>
                    </h5>
                    <p>
                      The dashboard is designed to offer a comprehensive visual
                      display...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/web-development/">Web Development</a>,
                      <a href="https://www.probytes.net/blog/category/website-design/">Website Design</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>April 29, 2020</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/structure-roles-of-a-web-development-team/">
                        <img
                          src="/featured-image-whos-who-.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/structure-roles-of-a-web-development-team/">
                        Who's Who?: Structure &amp; Roles of a Web Development
                        Team
                      </a>
                    </h5>
                    <p>If you are a client who have already made an...</p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/web-development/">Web Development</a>,
                      <a href="https://www.probytes.net/blog/category/website-design/">Website Design</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>April 22, 2020</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/top-tools-to-check-your-website-health/">
                        <img
                          src="/Top-20-Tools-to-Check-Your-Website-health.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/top-tools-to-check-your-website-health/">Top 20 Tools to Check Your Website Health</a>
                    </h5>
                    <p>You would have spent a lot of time, effort, and...</p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/web-development/">Web Development</a>,
                      <a href="https://www.probytes.net/blog/category/website-design/">Website Design</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>April 22, 2020</p>
                    </span>
                  </div>
                </article>
              </div>
              <div className="rec-blog-a">
                <div className="rec-blog-a-head">
                  <a href="https://www.probytes.net/blog/category/odoo/">
                    <h4>Odoo</h4>
                  </a>
                  <a href="https://www.probytes.net/blog/category/odoo/">
                    <span>12 More Blogs</span>
                  </a>
                </div>
                <div className="rec-blog-so-aq">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                        style={{ backgroundColor: "grey" }}
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="/Business-Smarter.jpg"
                          className="d-block w-100 img-fluid"
                          alt="How To Make Your Business Smarter With Odoo"
                          style={{ width: "50%" }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            first slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/a1119ee2ddb3c1b1677ab58ddf6702bd91a2982d7095e72bc5202de4fc5ca03b.jpg"
                          className="d-block w-100 img-fluid"
                          alt="How To Make Your Business Smarter With Odoo"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            second slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/All-About-Odoo-Accounting-Software-1.jpg"
                          className="d-block w-100 img-fluid"
                          alt="Top 10 Insane Benefits of  Odoo eCommerce Platform"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/featured-image-whos-who-.jpg"
                          className="d-block w-100 img-fluid"
                          alt="All About Odoo Accounting Software"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/10-ways-ERP-system-can-affect-supply-chain-management.jpg"
                          className="d-block w-100 img-fluid"
                          alt="Odoo Guide: Installation, Create Models, Databases, Security and Web Pages"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/10-ways-ERP-system-can-affect-supply-chain-management.jpg"
                          className="d-block w-100 img-fluid"
                          alt="10 Ways ERP System Can Affect Supply Chain Management"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="/10-Benefits-of-installing-ERP-system-in-Textile-business-bbb-2.jpg"
                          className="d-block w-100 img-fluid"
                          alt="10 Benefits of Installing ERP System in Textile Business"
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>
                            Some representative placeholder content for the
                            third slide.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="rec-blog-a">
                <div className="rec-blog-a-head">
                  <a href="https://www.probytes.net/blog/category/how-to/">
                    <h4>How To</h4>
                  </a>
                  <a href="https://www.probytes.net/blog/category/how-to/">
                    <span>26 More Blogs</span>
                  </a>
                </div>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/how-to-add-payment-method-on-website/">
                        <img
                          src="/how-to-add-payment-method-on-website.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/how-to-add-payment-method-on-website/">How to Add Payment Method on Website</a>
                    </h5>
                    <p>
                      In this blog, we will discuss the various payment
                      methods,...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/how-to/">How To</a>,
                      <a href="https://www.probytes.net/blog/category/web-development/">Web Development</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>December 11, 2019</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/how-to-create-a-website-like-tripadvisor/">
                        <img
                          src="/how-to-create-a-website-like-tripadvisor.png"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/how-to-create-a-website-like-tripadvisor/">How to Create a Website Like TripAdvisor</a>
                    </h5>
                    <p>If you are planning to have a travel or a...</p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/how-to/">How To</a>,
                      <a href="https://www.probytes.net/blog/category/travel/">Travel</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>November 8, 2019</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/create-website-like-angies-list/">
                        <img
                          src="/How-to-Create-a-Website-like-Angies-List-1.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/create-website-like-angies-list/">How to Create a Website like Angie's List</a>
                    </h5>
                    <p>
                      After browsing internet and exploring various online
                      directories, are you...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/how-to/">How To</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>October 22, 2019</p>
                    </span>
                  </div>
                </article>
              </div>
              <div className="rec-blog-a">
                <div className="rec-blog-a-head">
                  <a href="https://www.probytes.net/blog/category/how-much/">
                    <h4>How Much</h4>
                  </a>
                  <a href="https://www.probytes.net/blog/category/how-much/">
                    <span>9 More Blogs</span>
                  </a>
                </div>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/how-much-does-it-cost-to-create-a-website-like-upwork/">
                        <img
                          src="/how-much-does-it-cost-to-create-a-website-like-upwork.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/how-much-does-it-cost-to-create-a-website-like-upwork/">
                        How Much Does It Cost To Create a Website Like Upwork?
                      </a>
                    </h5>
                    <p>
                      More and more professionals are now cutting ties with
                      their...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/how-much/">How Much</a>,
                      <a href="https://www.probytes.net/blog/category/web-development/">Web Development</a>,
                      <a href="https://www.probytes.net/blog/category/website-design/">Website Design</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>December 17, 2019</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/how-much-does-it-cost-to-create-a-website-like-airbnb/">
                        <img
                          src="/how-much-does-it-cost-to-create-a-website-like-airbnb-1.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/how-much-does-it-cost-to-create-a-website-like-airbnb/">
                        How Much Does It Cost To Create a Website Like Airbnb?
                      </a>
                    </h5>
                    <p>
                      Airbnb can be described as a peer-to-peer (P2P)
                      marketplace that...
                    </p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/how-much/">How Much</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>December 13, 2019</p>
                    </span>
                  </div>
                </article>
                <article className="rec-blog-a-wrap-aq">
                  <div className="rec-blog-a-img-aq">
                    <figure className="rec-blog-a-img-wrap-aq">
                      <a href="https://www.probytes.net/blog/cost-to-create-a-website/">
                        <img
                          src="/How-much-does-it-cost-to-create-a-website-in-India.jpg"
                          alt="Image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="rec-blog-a-txt-sx-aq">
                    <h5>
                      <a href="https://www.probytes.net/blog/cost-to-create-a-website/">
                        How Much Does It Cost To Create a Website in India
                      </a>
                    </h5>
                    <p>Do you wish to know how much does it cost...</p>
                    <span className="blog-category-name-aq">
                      <a href="https://www.probytes.net/blog/category/how-much/">How Much</a>,
                      <a href="https://www.probytes.net/blog/category/website-design/">Website Design</a>
                    </span>
                    <span className="blog-date-aq">
                      <p>August 22, 2019</p>
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
           
           <div className="col-lg-3">
            <BlogLiveLeftBar/>
           </div>

        </div>

      </div>
    </section>
  );
};

export default ProbytesBlogs;
