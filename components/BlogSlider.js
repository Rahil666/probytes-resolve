import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import React from "react";

const Blog = () => {
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

  const blogPortfolioItems = [
    // Add more items as needed
    {
      blogLink:
        "https://www.probytes.net/blog/machine-learning-with-iot-exploring-future-possibilities/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/05/machine-learning-with-Iot-exploring-future-possibilities.png",
      blogTitle: "Machine Learning with IoT: Exploring Future Possibilities",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/top-guidelines-for-a-thriving-dashboard-design/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/04/top-15-guidlines-for-thriving-dashboard-designs.jpg",
      blogTitle: "Top 15 Guidelines for a Thriving Dashboard Design",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/structure-roles-of-a-web-development-team/",
      blogImage:
        " https://www.probytes.net/wp-content/uploads/2020/04/featured-blogImage-whos-who-.jpg",
      blogTitle: " Who's Who?: Structure &amp; Roles of a Web Development Team",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/top-tools-to-check-your-website-health/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/04/Top-20-Tools-to-Check-Your-Website-health.jpg",
      blogTitle: "Top 20 Tools to Check Your Website Health",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/designs-tips-to-improve-your-ecommerce-ux/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/04/20-Designs-Tips-to-Improve-your-Ecommerce-UX-in-2020.jpg",
      blogTitle: "  20 Designs Tips to Improve your Ecommerce UX in 2020",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/designs-tips-to-improve-your-ecommerce-ux/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/04/frame-frontend-in-web-dvelopment.gif",
      blogTitle: "Top 10 Front-end Frameworks for Web Development in 2020",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/api-in-web-development-best-practices-for-you/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/04/API-in-Web-Development-Best-Practices-for-You-0.jpg",
      blogTitle: "API in Web Development-Best Practices for You",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/top-web-application-security-practices-you-should-know/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/04/Top-15-Web-Application-Security-Practices-you-should-know.png",
      blogTitle: "Top 15 Web Application Security Practices You Should Know",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/website-architecture-design-a-complete-guide/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/03/Website-architecture-design-A-complete-Guide.png",
      blogTitle: "Website Architecture Design- A Complete Guide",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/web-development-with-mean-stack-the-complete-guide-for-your-business/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/03/Website-architecture-design-A-complete-Guide.png",
      blogTitle:
        "   Web Development with MEAN Stack- The Complete Guide for your Business",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/how-to-secure-your-joomla-website-from-hackers/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/03/How-to-secure-your-joomla-website-from-hackers.png",
      blogTitle: "How to Secure Your Joomla Website from Hackers?",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/top-trending-web-development-techniques/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/02/15-Top-Trending-Web-Development-Techniques-to-Watch-Out-In-2020.jpg",
      blogTitle:
        "15 Top Trending Web Development Techniques to Watch out In 2020",
    },
    {
      blogLink:
        "https://www.probytes.net/blog/amazon-aws-vs-microsoft-azure-vs-google-cloud/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/02/Amazon-aws-vs-microsoft-azure-vs-google-cloud-which-is-better.jpg",
      blogTitle:
        "     Amazon AWS Vs Microsoft Azure Vs Google Cloud- which is better?",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/top-cloud-based-web-development-tools/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/02/top-18-cloud-based-web-developement-tools-2020.jpg",
      blogTitle: "Top 18 Cloud-Based Web Development Tools 2020",
    },

    {
      blogLink: "https://www.probytes.net/blog/drupal-vs-wordpress/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/02/top-18-cloud-based-web-developement-tools-2020.jpg",
      blogTitle: "Drupal Vs WordPress- All you Need to Know",
    },

    {
      blogLink:
        "https://www.probytes.net/blog/how-to-create-a-website-using-ai/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/01/how-to-create-a-website-using-ai.png",
      blogTitle: " How to Create a Website Using AI?",
    },
    {
      blogLink: "https://www.probytes.net/blog/free-game-websites/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/01/top-15-free-game-websites.png",
      blogTitle: " Top 15 Free Game Websites",
    },
    {
      blogLink: "https://www.probytes.net/blog/latest-ecommerce-trends/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2020/01/Latest-Ecommerce-Trends-For-2020.jpg",
      blogTitle: "Latest Ecommerce Trends For 2020",
    },
    {
      blogLink: "https://www.probytes.net/blog/best-website-redesign-tips/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2019/12/best-10-website-redesign-tips.jpg",
      blogTitle: "Best 10 Website Redesign Tips",
    },
    {
      blogLink: "https://www.probytes.net/blog/best-tourism-websites-in-india/",
      blogImage:
        "https://www.probytes.net/wp-content/uploads/2019/12/Best-Tourism-Websites-in-India-1.jpg",
      blogTitle: "Best Tourism Websites in India",
    },
  ];

  return (
    <section id="_fst-sx-aq" className="section-02-sx-aq">
      <div className="container">
        <div className="row">
          <div className="op-hdr-sx-aq">
            <span aria-hidden="true" className="icon-mob-aq icon-layers"></span>
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
            {blogPortfolioItems.map((item, index) => (
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
  );
};

export default Blog;
