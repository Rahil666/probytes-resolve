import Carousel from "react-multi-carousel";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Macmin from "../public/Macmin.png";
import OurPortfolio from "@/components/OurPortfolio";
import React from "react";
import { Button } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";

const HomePage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Update this to 8
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const blogItems = [
    // Add more items as needed
    {
      blogLink:
        "https://www.probytes.net/blog/machine-learning-with-iot-exploring-future-possibilities/",
      blogImage:
        "/machine-learning-with-Iot-exploring-future-possibilities.png",
      blogTitle: "Machine Learning with IoT: Exploring Future Possibilities",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/top-guidelines-for-a-thriving-dashboard-design/",
      blogImage: "/top-15-guidlines-for-thriving-dashboard-designs.jpg",
      blogTitle: "Top 15 Guidelines for a Thriving Dashboard Design",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/structure-roles-of-a-web-development-team/",
      blogImage:
        "/machine-learning-with-Iot-exploring-future-possibilities.png",
      blogTitle: " Who's Who?: Structure &amp; Roles of a Web Development Team",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/top-tools-to-check-your-website-health/",
      blogImage: "/Top-20-Tools-to-Check-Your-Website-health.jpg",
      blogTitle: "Top 20 Tools to Check Your Website Health",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/designs-tips-to-improve-your-ecommerce-ux/",
      blogImage: "/20-Designs-Tips-to-Improve-your-Ecommerce-UX-in-2020.jpg",
      blogTitle: "  20 Designs Tips to Improve your Ecommerce UX in 2020",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/designs-tips-to-improve-your-ecommerce-ux/",
      blogImage: "/frame-frontend-in-web-dvelopment.gif",
      blogTitle: "Top 10 Front-end Frameworks for Web Development in 2020",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/api-in-web-development-best-practices-for-you/",
      blogImage: "/API-in-Web-Development-Best-Practices-for-You-0.jpg",
      blogTitle: "API in Web Development-Best Practices for You",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/top-web-application-security-practices-you-should-know/",
      blogImage:
        "/Top-15-Web-Application-Security-Practices-you-should-know.png",
      blogTitle: "Top 15 Web Application Security Practices You Should Know",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/website-architecture-design-a-complete-guide/",
      blogImage: "/Website-architecture-design-A-complete-Guide.png",
      blogTitle: "Website Architecture Design- A Complete Guide",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/web-development-with-mean-stack-the-complete-guide-for-your-business/",
      blogImage: "/Website-architecture-design-A-complete-Guide.png",
      blogTitle:
        "Web Development with MEAN Stack- The Complete Guide for your Business",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/how-to-secure-your-joomla-website-from-hackers/",
      blogImage: "/How-to-secure-your-joomla-website-from-hackers.png",
      blogTitle: "How to Secure Your Joomla Website from Hackers?",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/top-trending-web-development-techniques/",
      blogImage:
        "/15-Top-Trending-Web-Development-Techniques-to-Watch-Out-In-2020.jpg",
      blogTitle:
        "15 Top Trending Web Development Techniques to Watch out In 2020",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/amazon-aws-vs-microsoft-azure-vs-google-cloud/",
      blogImage:
        "/Amazon-aws-vs-microsoft-azure-vs-google-cloud-which-is-better.jpg",
      blogTitle:
        "Amazon AWS Vs Microsoft Azure Vs Google Cloud- which is better?",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/top-cloud-based-web-development-tools/",
      blogImage: "/top-18-cloud-based-web-developement-tools-2020.jpg",
      blogTitle: "Top 18 Cloud-Based Web Development Tools 2020",
    },

    {
      blogLink: "https://www.probytes.net/blog/drupal-vs-wordpress/",
      blogImage: "/top-18-cloud-based-web-developement-tools-2020.jpg",
      blogTitle: "Drupal Vs WordPress- All you Need to Know",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/how-to-create-a-website-using-ai/",
      blogImage: "/how-to-create-a-website-using-ai.png",
      blogTitle: " How to Create a Website Using AI?",
    },
    {
      blogLink: "https://www.probytes.net/blog/free-game-websites/",
      blogImage: "/top-15-free-game-websites.png",
      blogTitle: " Top 15 Free Game Websites",
    },
    {
      blogLink: "https://www.probytes.net/blog/latest-ecommerce-trends/",
      blogImage: "/Latest-Ecommerce-Trends-For-2020.jpg",
      blogTitle: "Latest Ecommerce Trends For 2020",
    },
    {
      blogLink: "https://www.probytes.net/blog/best-website-redesign-tips/",
      blogImage: "/best-10-website-redesign-tips.jpg",
      blogTitle: "Best 10 Website Redesign Tips",
    },
    {
      blogLink: "https://www.probytes.net/blog/best-tourism-websites-in-india/",
      blogImage: "/Best-Tourism-Websites-in-India-1.jpg",
      blogTitle: "Best Tourism Websites in India",
    },
  ];
  return (
    <>
      <Head>
        <title>ProBytes</title>
      </Head>
      <div>
        <section id="_02otr" className="_01mob_mngtop _0pdng ">
          <div className="_02_gr_bg"></div>
          <div className="_01bnr">
            <img className="img-fluid" src="/hd_bg.jpg" alt="Banner" />
          </div>
          <div className="_01bnrCont">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="">
                    <div className="_01bnrCont_blk">
                      <h1 className="create">
                        Create Amazing Websites and Web Applications for your
                        Business with Probytes Web Design &amp; Development
                        Company
                      </h1>
                      <ul className="">
                        <li>Boost Your Business ROI</li>
                        <li>Increase Customer Engagement</li>
                        <li>Improve Business Credibility</li>
                        <li>Reduce Business Costs</li>
                      </ul>
                      <a href="/contact/?utm_source=probytes_home_pg&amp;utm_medium=Hero_banner_btn&amp;utm_campaign=lead-gen">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="_01otr" className="_01bg _01section">
          <div className="container">
            <div className="_01_hd">
              <h2>Our Major Services</h2>
              <a href="/services/">View All</a>
            </div>
            <div className="_otr_white_colour  text-center _01_cnt_lmt">
              <div className="">
                <div className="_01mob_col _01_mo_bdrRt _01_mo_bdrBtm col-sm-4">
                  <div className="_01colm_wrap">
                    <a href="/web-design-company/">
                      <span
                        aria-hidden="true"
                        className="_01icon icon-desktop"
                      ></span>
                    </a>
                    <h4>
                      <a href="/web-design-company/">Website Design</a>
                    </h4>
                    <span className="_01_hd_bdr"></span>
                    <p>
                      A good looking website is essential for the credibility of
                      your business. So why take the risk? We offer creative
                      design at an affordable cost.
                    </p>
                  </div>
                </div>
                <div className="_01mob_col _02_mo_bdrRt _01_mo_bdrBtm col-sm-4">
                  <div className="_01colm_wrap">
                    <a href="/services/web-development/">
                      <span
                        aria-hidden="true"
                        className="_01icon icon-mobile"
                      ></span>
                    </a>
                    <h4>
                      <a href="/services/web-development/">Web Development</a>
                    </h4>
                    <span className="_01_hd_bdr"></span>
                    <p>
                      Robust and reliable website assures minimum bounce rate.
                      We offer the end-to-end solution for your website dreams.{" "}
                    </p>
                  </div>
                </div>
                <div className="_01mob_col _02_mo_bdrRt _02_mo_bdrBtm col-sm-4">
                  <div className="_01colm_wrap">
                    <a href="/services/ecommerce-website-development/">
                      <span
                        aria-hidden="true"
                        className="_01icon icon-basket"
                      ></span>
                    </a>
                    <h4>
                      <a href="/services/ecommerce-website-development/">
                        E-commerce Development
                      </a>
                    </h4>
                    <span className="_01_hd_bdr"></span>
                    <p>
                      100% customizable and integrable website that will be
                      perfect for your online store. We have various options for
                      taking your business to another dimension.
                    </p>
                  </div>
                </div>
                <div className="_01mob_col _01_mo_bdrRt col-sm-4">
                  <div className="_01colm_wrap">
                    <a href="https://www.redbytes.in/">
                      <span
                        aria-hidden="true"
                        className="_01icon icon-phone"
                      ></span>
                    </a>
                    <h4>
                      <a href="https://www.redbytes.in/">
                        Mobile App Development
                      </a>
                    </h4>
                    <span className="_01_hd_bdr"></span>
                    <p>
                      Apps assures 100% user engagement. We offer
                      cross-compatible apps that can work seamlessly on both IOS
                      and Android.
                    </p>
                  </div>
                </div>

                <div className="_01mob_col col-sm-4">
                  <div className="_01colm_wrap">
                    <a href="/odoo/">
                      <span
                        aria-hidden="true"
                        className="_01icon icon-circle-compass"
                      ></span>
                    </a>
                    <h4>
                      <a href="/odoo/">ERP Development</a>
                    </h4>
                    <span className="_01_hd_bdr"></span>
                    <p>
                      Automate your business workflow with 100% efficiency. Our
                      ERP system can be deployed in any business environment
                      with ease.
                    </p>
                  </div>
                </div>

                <div className="_01mob_col _01_mo_bdrRt _01_mo_bdrBtm col-sm-4">
                  <div className="_01colm_wrap">
                    <a href="http://www.jointviews.com/">
                      <span
                        aria-hidden="true"
                        className="_01icon icon-presentation"
                      ></span>
                    </a>
                    <h4>
                      <a href="http://www.jointviews.com/">Digital Marketing</a>
                    </h4>
                    <span className="_01_hd_bdr"></span>
                    <p>
                      Make sure that your website gets noticed the
                      over-populated online market. We offer SEO based digital
                      marketing solutions for your website.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="_01otr" className="_002blk work">
          <div className="container row centrSx">
            <div className="col-8 d-flex align-items-center justify-content-center">
              <span>Let's Work Together &amp; Make It Happen!</span>
            </div>
            <div className="_002blk_btn ping_btn col-4 d-flex align-items-center justify-content-center">
              <a
                className="_003blk_btn ping_us"
                href="/contact/?utm_source=probytes_home_pg&amp;utm_medium=ping_us_ribbon_btn&amp;utm_campaign=lead-gen"
              >
                Ping Us For a Free Quote!
              </a>
            </div>
          </div>
        </section>
        <section id="_fst-sx-aq" className="section-02-sx-aq wd-bg-img-aq">
          <div className="wd-bg-clr-aq"></div>
          <div className="container">
            <div className="">
              <div className="row">
                <div className="wd-hdr-sx-aq">
                  <span
                    aria-hidden="true"
                    className="icon-mob-aq icon-tools"
                  ></span>
                  <h2>Web Development</h2>
                  <p>
                    Our skilled and experienced developers are well aware about
                    the system architecture that can potentially engage
                    customers.
                  </p>
                </div>
              </div>

              <div className="main-wrap-sx-aq">
                <div className="row">
                  <div className="col-md-12 col-lg-6 centrSx">
                    <div className=" mob-hide-sx-aq tab-hide-sx-aq">
                      <img
                        src="/main-feature.png"
                        className="img-fluid"
                        alt="image"
                        style={{ position: "relative" }}
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-12 col-lg-6 desktop-m-top-sx-aq"
                    style={{ position: "relative" }}
                  >
                    <div className="col-3 col-md-12">
                      <div className="wd-sub-col-wrap-sx-aq">
                        <div className="wd-sub-left-col-sx-aq">
                          <a href="">
                            <span
                              aria-hidden="true"
                              className="wd-sub-col-icon-sx-aq icon-desktop"
                            ></span>
                          </a>
                        </div>
                        <div className="wd-sub-cntnt-sx-aq">
                          <a href="">
                            <h5>Prestashop</h5>
                          </a>
                          <p>
                            Go Online! Avail the features of one of the best
                            e-commerce platform with the help of our Prestashop
                            team.
                          </p>
                          <a href="">View</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 col-md-12">
                      <div className="wd-sub-col-wrap-sx-aq">
                        <div className="wd-sub-left-col-sx-aq">
                          <a href="">
                            <span
                              aria-hidden="true"
                              className="wd-sub-col-icon-sx-aq icon-desktop"
                            ></span>
                          </a>
                        </div>
                        <div className="wd-sub-cntnt-sx-aq">
                          <a href="">
                            <h5>Odoo</h5>
                          </a>
                          <p>
                            We deliver tailor made ERP software on Odoo platform
                            in accordance with the exact specifications and
                            requirements of client.
                          </p>
                          <a href="">View</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 col-md-12">
                      <div className="wd-sub-col-wrap-sx-aq">
                        <div className="wd-sub-left-col-sx-aq">
                          <a href="">
                            <span
                              aria-hidden="true"
                              className="wd-sub-col-icon-sx-aq icon-desktop"
                            ></span>
                          </a>
                        </div>
                        <div className="wd-sub-cntnt-sx-aq">
                          <a href="">
                            <h5>Python</h5>
                          </a>
                          <p>
                            Our Python developers will make sure that the
                            business applications that we develop enjoys all the
                            features and flexibility of Python in its finest
                            form.
                          </p>
                          <a href="">View</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 col-md-12">
                      <div className="wd-sub-col-wrap-sx-aq">
                        <div className="wd-sub-left-col-sx-aq">
                          <a href="">
                            <span
                              aria-hidden="true"
                              className="wd-sub-col-icon-sx-aq icon-desktop"
                            ></span>
                          </a>
                        </div>
                        <div className="wd-sub-cntnt-sx-aq">
                          <a href="">
                            <h5>Magento</h5>
                          </a>
                          <p>
                            Get hold of the power of cloud! Magento websites
                            ensures that your online stores guarantee assurance
                            of physical stores and convenience of online stores.
                          </p>
                          <a href="">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact-btn-sx-aq">
                    <a href="/contact/?utm_source=probytes_home_pg&utm_medium=talk_to_us_btn&utm_campaign=lead-gen">
                      TALK TO US
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a href="tel: +91 81 1386 1000">
                      Call Now +91 81 1386 1000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-sx-aq"></div>
        <OurPortfolio />
        <div className="divider-sx-aq"></div>
        <section
          id="_fst-sx-aq"
          className="_bnr-sx-aq section-01-sx-aq text-center"
        >
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-3 col-lg-3">
                <div className="bnr-wrap">
                  <div className="bnr-circle-sx-aq">
                    <p style={{ display: "inline-block" }}>450</p>
                  </div>
                  <h5>PROJECTS</h5>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <div className="bnr-wrap">
                  <div className="bnr-circle-sx-aq">
                    <p style={{ display: "inline-block" }}>7+</p>
                  </div>
                  <h5>YEARS</h5>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <div className="bnr-wrap">
                  <div className="bnr-circle-sx-aq">
                    <p style={{ display: "inline-block" }}>430+</p>
                  </div>
                  <h5>CLIENTS</h5>
                </div>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <div className="bnr-wrap">
                  <div className="bnr-circle-sx-aq">
                    <p style={{ display: "inline-block" }}>60+</p>
                  </div>
                  <h5>COUNTRIES</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-sx-aq"></div>

        <section id="_01otr" className="videoR">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-4 offset-lg-1">
                <div className="_02vci ps-5 pe-5  mt-md-3     ">
                  <h2 className="">Video</h2>
                </div>
                <div className="  videoss  ">
                  <h2 className="">Video</h2>
                </div>
                <div>
                  <p className="boxyy   ">
                    It's about time! Click to see how we can change your
                    business
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mac-mini-pro">
                  <div className="mac-mini-content position-relative hiddensmall">
                    <Image src={Macmin} alt="Mac Mini" className="computer" />
                    <div className="youtube-container ">
                      <iframe
                        width="80%"
                        height="80%"
                        src="https://www.youtube.com/embed/5UlXKFPVYPA?rel=0&amp;controls=0&amp;showinfo=0"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen=""
                        title="YouTube Video"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden video for larger screens */}
            <div className="mac-mini-content-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5UlXKFPVYPA?rel=0&amp;controls=0&amp;showinfo=0"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen=""
                title="YouTube Video"
              ></iframe>
            </div>
          </div>
        </section>

        <div className="divider-sx-aq"></div>
        <section id="_fst-sx-aq" className="section-02-sx-aq">
          <div className="container">
            <div className="row">
              <div className="op-hdr-sx-aq">
                <span
                  aria-hidden="true"
                  className="icon-mob-aq icon-layers"
                ></span>
                <h2>Blog</h2>
                <p>
                  Read latest blogs, updates about the web development scenario.
                </p>
                <a href="#">View All</a>
              </div>
            </div>
            <div className="op-main-wrap-aq">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerclassName="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              >
                {blogItems.map((item, index) => (
                  <div key={index}>
                    <div className="owl-item">
                      <Link href={item.blogLink} target="_blank">
                        <img
                          src={item.blogImage}
                          className="img-fluid "
                          alt=""
                          style={{ width: "500px", height: "90%" }} // Adjust width and height here
                        />
                      </Link>
                      <Link href={item.blogLink} target="_blank">
                        <h4>{item.blogTitle}</h4>
                      </Link>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        <div className="divider-sx-aq"></div>
        <section id="_02cont_wrap" className="_0pdng">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3946.300104421824!2d76.94763531432922!3d8.470170493909716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEdsys+Towers%2C+Near+ICICI+Bank+ATM+Kamaleswaram%2C+Trivandrum!5e0!3m2!1sen!2sin!4v1515575883103"
            width="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            title="Google Maps"
          ></iframe>
          <div className="">
            {/* _03_blk_info map overlapping classname */}
            <div className="container colourWhite mb-2">
              <div className="_03_blk_wrap">
                <div className="row">
                  <div className="_02_hd mt-4">
                    <span aria-hidden="true" className=""></span>
                    <h2>Get In Touch</h2>
                  </div>
                </div>
                <div className="_01colm_wrap">
                  <div className="row">
                    <div className="col-sm-12 col-lg-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-12">
                          <div className="_03colm_wrap _15mngBtm _03_bdrBtm">
                            <h4>Pune</h4>
                            <ul>
                              <li>
                                <i className="fa fa-home"></i> Kalas road,
                                Vishrantwadi, Pune, Maharashtra-411015,
                              </li>
                              <li>
                                <i className="fa fa-phone"></i> +91 81 1386 1000
                              </li>
                              <li>
                                <i className="fa fa-envelope"></i>
                                info@probytes.net{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-12">
                          <div className="_03colm_wrap">
                            <h4>Trivandrum</h4>
                            <ul>
                              <li>
                                <i className="fa fa-home"></i> Edsys Towers,
                                Near ICICI Bank ATM Kamaleswaram, Trivandrum,
                                Kerala, PIN – 695009
                              </li>
                              <li>
                                <i className="fa fa-phone"></i> +91 81 1386 1000
                              </li>
                              <li>
                                <i className="fa fa-envelope"></i>
                                info@probytes.net{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 ">
                      <div className="_otr_white_colour  _20pdng">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
