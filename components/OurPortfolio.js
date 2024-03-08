import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import React from "react";

const OurPortfolio = () => {
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

  const portfolioItems = [
    {
      link: "https://www.probytes.net/blog/portfolio/donation-management-system/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/11/don.jpg",
      title: "Donation Management System",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/softbreaks-com-job-portal-web-scrapping/",
      image:"https://wp.probytes.net/wp-content/uploads/2018/08/9469903245838bcfb77bc74dd6efbc215f621688b447adf5d462d920cc62227c.jpg",
      title: "Softbreaks.com – Job Portal Web Scrapping",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/web-scrapping-from-4-00000-product-ids-provided-by-the-client/",
      image:"https://wp.probytes.net/wp-content/uploads/2018/08/31fdc51798ae2d2cacba0d69617975b7b652e5d2c3057d540422fbf107c2f3d8.jpg",
      title: "Web scrapping from 4, 00000 Product ID’s provided by   the client",
    },

    {
      link: "https://www.probytes.net/blog/portfolio/queskr/",
      image:"https://wp.probytes.net/wp-content/uploads/2018/03/0ae5a92777e06c44f511745f367fccc298fdf50a6220907646cd4c75c18c3de5.jpg",
      title: "Queskr",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/edysys-time-table-management-system/",
      image:"https://wp.probytes.net/wp-content/uploads/2018/03/^C5408FC26B33AB4CB724D045E744CE7349D5D7263051AD63FE^pimgpsh_fullsize_distr.jpg",
      title: "Edsys Time Table Management System",
    },
    {
      link: "https://www.probytes.net/wp-content/uploads/2018/03/cf2f0e9c3ca88e10a8abc290a64ff096e0742358e980198b653072686ef83387.jpg",
      image: "https://wp.probytes.net/wp-content/uploads/2018/03/cf2f0e9c3ca88e10a8abc290a64ff096e0742358e980198b653072686ef83387.jpg",
      title: "Golingu",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/schoolzen/",
      image:"https://wp.probytes.net/wp-content/uploads/2018/03/7dbb84502070eb17f1c8fd073c8f503a93a4356a9a8ec2f7d6652d9a9684648b.jpg",
      title: "Schoolzen",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/kids-express-web-app/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/e98f81c9986ec6056f2614ae4d7790741a7f11bbfe0d3778c9fc9597168fe27b.jpg",
      title: "Kids Express Web App",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/wetopark/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/wetopark.jpg",
      title: "WetoPark",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/builders-app/",
      image:"https://wp.probytes.net/wp-content/uploads/2018/02/Builders-App.jpg",
      title: "Builders App",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/roboques-avelino/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/RE.jpg",
      title: "Roboques Avelino",
    },

    {
      link: "https://www.probytes.net/blog/portfolio/trackcompanybus/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/TCB-1.jpg",
      title: "TrackCompanyBus",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/dizzmedia-com-car-rental-app/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/Rental-checklist.jpg",
      title: "DizzMedia.com (Car Rental app)",
    },

    {
      link: "https://www.probytes.net/blog/portfolio/cloud23/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/cloud-23.jpg",
      title: "Cloud23",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/kims-patient-portal/",
      image:
        "https://wp.probytes.net/wp-content/uploads/2018/02/Kims-GLobal.jpg",
      title: "Kims Patient Portal",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/vehicletracking/",
      image:
        "https://wp.probytes.net/wp-content/uploads/2018/02/Vehicle-tracking-system.jpg",
      title: "VehicleTracking",
    },

    {
      link: "https://www.probytes.net/blog/portfolio/trackschoolbus/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/TSB.jpg",
      title: "                         TrackSchoolBus",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/ejuicequeen/",
      image: "https://wp.probytes.net/wp-content/uploads/2018/02/1-25.png",
      title: "Ejuicequeen",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/metropolitan/",
      image:
        "https://wp.probytes.net/wp-content/uploads/2018/02/metropolitan.jpg",
      title: "Metropolitan",
    },
    {
      link: "https://www.probytes.net/blog/portfolio/grocerninja/",
      image:"https://wp.probytes.net/wp-content/uploads/2018/02/Kims-GLobal.jpg",
      title: "GrocerNinja",
    },
    // Add more items as needed
  ];

  return (
    <section id="_fst-sx-aq" className="section-02-sx-aq">
      <div className="container">
        <div className="row">
          <div className="op-hdr-sx-aq">
            <span aria-hidden="true" className="icon-mob-aq icon-layers"></span>
            <h2>Our Portfolio</h2>

            <a href="#">View All</a>
          </div>
        </div>
        <div>
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
            {portfolioItems.map((item, index) => (
              <div key={index}>
                <div className="owl-item">
                  <Link href={item.link} target="_blank">
                    <img
                      src={item.image}
                      className="img-fluid "
                      alt=""
                      style={{ width: "500px", height: "90%" }} // Adjust width and height here
                    />
                  </Link>
                  <Link href={item.link} target="_blank">
                    <h4>{item.title}</h4>
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

export default OurPortfolio;
