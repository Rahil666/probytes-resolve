import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Whatsapp from "../public/Whatsapp.png";
import emailicon from "../public/emailicon.png";
import mail from "../public/mail.png";
import phone from "../public/phone.png";
import phoneicon from "../public/phoneicon.png";

import probytes_logo from "../public/probyteslogo.png";

const Header = () => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const openCanvas = () => {
    setIsCanvasOpen(true);
  };

  const closeCanvas = () => {
    setIsCanvasOpen(false);
  };

  const handleToggleClick = () => {
    // Introduce a delay of 10 seconds before opening the offcanvas

    setIsOffcanvasOpen(true);
  };

  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  const openCanvash = () => {
    // Handle search functionality here
    // You can add your search logic or open a search canvas
  };

  const handleToggleClickh = () => {
    // Toggle the visibility of the header
    setHeaderVisibility(!isHeaderVisible);
  };

  const [isAboutVisible, setAboutVisibility] = useState(true);

  const handleAboutToggle = () => {
    setAboutVisibility(!isAboutVisible);
  };

  //-------------
  const [isAboutVisiblesEcom, setAboutVisibilityEcom] = useState(true);

  const handleAboutTogglesEcom = () => {
    setAboutVisibilityEcom(!isAboutVisiblesEcom);
  };

  //-------------
  const [isAboutVisiblesInd, setAboutVisibilityInd] = useState(true);

  const handleAboutTogglesInd = () => {
    setAboutVisibilityInd(!isAboutVisiblesInd);
  };

  //-------------
  const [isAboutVisiblesis, setAboutVisibilitysis] = useState(true);

  const handleAboutTogglesis = () => {
    setAboutVisibilitysis(!isAboutVisiblesis);
  };

  //-------------
  const [isAboutVisibleser, setAboutVisibilityser] = useState(true);

  const handleAboutTogglesser = () => {
    setAboutVisibilityser(!isAboutVisibleser);
  };
  return (
    <div className="">
      <div className="headerContainerR">
        <div className="HeaderR   ">
          <div className="Headerh1 ">
            <div className=" d-flex align-items-center ">
              <i className="fa fa-envelope mess"></i>
              <Link href="mailto:info@probytes.net">
                <text className="text-pro">info@probytes.net</text>
              </Link>
              <div className=" ms-3 d-flex align-items-center ">
                <i className="fa fa-phone mess"></i>
                <Link href="tel: +91 81 1386 1000">
                  <text className="text-pro">+918113861000</text>
                </Link>
              </div>
            </div>
            <div className="input-container ms-auto  ">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-pill pe-4 custom-border-color w-75 "
              />

              <div className="Searchimage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={"HeadeRMain     mt-2 py-3  stickyLogo "}>
          <Link href={"/"}>
            {/* <Image src={probytes_logo} style={{ width: "60%" }} /> */}
            <img src="https://wp.probytes.net/wp-content/uploads/2024/02/probytes_logo.png" alt="logo" />
          </Link>
          <div className="Headerr   ">
            <div className="Headerh1r ">
              <div className=" textAboutone     ">
                <Link href={"/about-us/"}>
                  <text className="probytesline ">About Us</text>
                </Link>
              </div>
              <div className=" ">
                <Link href={"/services/"}>
                  <text className="probytesline">Services </text>
                </Link>
              </div>
              <div className="textAbout  ">
                <Link
                  href={
                    "/services/ecommerce-website-development/"
                  }
                >
                  <text className="probytesline">Ecommerce </text>
                </Link>
              </div>

              <div className=" me-3 ms-5  ">
                <Button
                  href="/hire-a-developer/"
                  className="rounded-pill costcalculator   "
                  style={{
                    backgroundColor: "white",
                    // borderRadius: "10px",
                    height: "30px", // Adjust the height as per your requirement
                    width: "150px", // Adjust the width as per your requirement
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <text className="probytesline">Hire A Developer</text>
                </Button>
              </div>
              <div className="hiddenbuttonn ">
                <div className=" d-flex  ">
                  <div className="me-2 ms-">
                    <Button
                      href="https://mobileappdevelopmentcost.com/Calculator/Domain/?utm_source=Probytes_LP&utm_medium=Top_CTA_Btn&utm_campaign=Lead_gen"
                      className="rounded-pill costcalculator    "
                      style={{
                        background: "#7c43bd",

                        height: "30px", // Adjust the height as per your requirement
                        width: "200px", // Adjust the width as per your requirement
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="costr">App Cost Calculator</text>
                    </Button>
                  </div>
                  <div className=" ms-2  ">
                    <Button
                      href="/contact/?utm_source=probytes_home_pg&utm_medium=top_contact_us_btn&utm_campaign=lead-gen"
                      className="rounded-pill costcalculator  "
                      style={{
                        background: "#7c43bd",
                        // borderRadius: "10px",
                        height: "30px", // Adjust the height as per your requirement
                        width: "150px", // Adjust the width as per your requirement
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="costr">Contact Us</text>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="imageHam d-flex align-items-center justify-content-end">
            <div className="imageHamSearch ms-4 " onClick={openCanvas}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <div onClick={handleToggleClick} className="ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        {isCanvasOpen && (
          <div className="canvas-overlay">
            <div className="canvas-container">
              <input
                type="text"
                placeholder="Type and press enter to search "
                className="search-input custom-border customcanvas   border-0 border-bottom border-2  text-white "
              />
              <div onClick={closeCanvas} className="close-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {isOffcanvasOpen && (
          <div className="canvas-overlayRight overflow-auto">
            <div className=" endneed  ">
              <div>
                <div className="canvas-containerRight">
                  <div className="ps-4 mt-2">
                    <text className="canvastextHead">Welcome To</text>
                    <br />
                    <text className="canvastextHead">Probytes</text>
                  </div>
                </div>
                <div className="">
                  <div className="row-cols-5  d-flex   mt-5">
                    <div className="col-4  bordercolorwhite pb-4   ">
                      <div className="ps-5  directionview">
                        <Link href="/about-us/">
                          <text className="canvastext">About</text>
                        </Link>
                        <div className="me-3 hidendownarrow ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="white"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/about-us/">
                            <text className="canvastextsub">CLIENTS</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/careers/">
                            <text className="canvastextsub">CAREERS</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/faq/">
                            <text className="canvastextsub">FAQ</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/about-us/portfolio/">
                            <text className="canvastextsub">PORTFOLIO</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/about-us/partners-sister-alliances/">
                            <text className="canvastextsub">
                              PARTNERS AND ALLIANCES
                            </text>
                          </Link>
                        </div>
                      </div>

                      <div className="ps-5 mt-4">
                        <div className=" directionview">
                          <text className="canvastext">Our Sister Sites</text>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="ps-5 mt-3  w-80 ">
                          <Link href="http://www.testbytes.net/">
                            <text className="canvastextsub">
                              TESTBYTES-SOFTWARE
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-80 ">
                          <Link href="https://www.testbytes.in/">
                            <text className="canvastextsub">
                              TESTING-SERVICES
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-80 ">
                          <Link href="https://www.redbytes.in/">
                            <text className="canvastextsub">
                              REDBYTES-MOBILE APP DEVELOPMENT COMPANY
                            </text>
                          </Link>
                        </div>
                      </div>

                      <div className="ps-5 mt-4">
                        <div className="  directionview">
                          <Link href="/services/ecommerce-website-development/">
                            <text className="canvastext">Ecommerce</text>
                          </Link>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="ps-5 mt-3 widthstyle  ">
                          <div className=" directionview">
                            <Link href="/services/ecommerce-website-development/magento-development-services/">
                              <text className="canvastextsub">
                                MAGENTO DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                        </div>
                        <div className="ps-5 mt-3 widthstyle  ">
                          <div className=" directionview">
                            <Link href="/services/ecommerce-website-development/magento-development-services/magento-setup/">
                              <text className="canvastextsub">
                                MAGENTO SETUP
                              </text>
                            </Link>
                          </div>
                        </div>
                        <div className="ps-5 mt-3 widthstyle  ">
                          <div className=" directionview">
                            <Link href="/services/ecommerce-website-development/magento-development-services/hire-a-magento-developer/">
                              <text className="canvastextsub">
                                HIRE A MAGENTO DEVELOPER
                              </text>
                            </Link>
                          </div>
                        </div>
                        <div className="ps-5 mt-3 widthstyle  ">
                          <div className=" directionview">
                            <Link href="/prestashop-development-company/">
                              <text className="canvastextsub">PRESTASHOP</text>
                            </Link>
                          </div>
                        </div>
                        <div className="ps-5 mt-3 widthstyle  ">
                          <div className=" directionview">
                            <Link href="/wordpress-development-services/">
                              <text className="canvastextsub">
                                WORDPRESS DELELOPMENT
                              </text>
                            </Link>
                          </div>
                        </div>
                        <div className="ps-5 mt-3 widthstyle  ">
                          <div className=" directionview">
                            <Link href="/services/joomla-development/">
                              <text className="canvastextsub">
                                JOOMLA DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-4  bordercolorwhite pb-4   ">
                      <div className="ps-5">
                        <div className="  directionview">
                          <text className="canvastext">Industries</text>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/social-media-website-development/">
                            <text className="canvastextsub">
                              SOCIAL MEDIA DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/travel-website-development/">
                            <text className="canvastextsub">
                              TRAVEL WEBSITE DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/educational-web-development/">
                            <text className="canvastextsub">
                              EDUCATION WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/business-web-development/">
                            <text className="canvastextsub">
                              BUSSINESS WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/banking-finance-web-development/">
                            <text className="canvastextsub">
                              BANKING AND FINANCE WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/food-delivery-web-development/">
                            <text className="canvastextsub">
                              FOOD DELIVERY WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/healthcare-web-development/">
                            <text className="canvastextsub">
                              HEALTHCARE WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>

                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/real-estate-web-development/">
                            <text className="canvastextsub">
                              REAL ESTATE WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  widthstyle ">
                          <Link href="/real-estate-web-development/">
                            <text className="canvastextsub">
                              SPORTS WEBSITE DEVELOPMENT COMPANY
                            </text>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-4   pb-4   ">
                      <div className="ps-5">
                        <div className="  directionview">
                          <text className="canvastext">Our Services </text>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/python-development-company/">
                            <text className="canvastextsub">
                              PYTHON DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/services/web-development/">
                            <text className="canvastextsub">
                              WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/web-design-company/">
                            <text className="canvastextsub">WEB DESIGN</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/services/core-php/">
                            <text className="canvastextsub">CORE PHP</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/services/ruby-on-rails/">
                            <text className="canvastextsub">RUBY ON RAILS</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/services/ruby-on-rails/">
                            <text className="canvastextsub">
                              YII DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/services/ruby-on-rails/">
                            <text className="canvastextsub">
                              ODOO WEB DEVELOPMENT
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/web-crawling-services/">
                            <text className="canvastextsub">WEB CRAWLING</text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/web-crawling-services/">
                            <text className="canvastextsub">
                              .NET Web Development
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/web-crawling-services/">
                            <text className="canvastextsub">
                              Website Redesign Services
                            </text>
                          </Link>
                        </div>
                        <div className="ps-5 mt-3  w-75 ">
                          <Link href="/web-crawling-services/">
                            <text className="canvastextsub">
                              On Demand Web Development
                            </text>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5 Canvas-white   pb-4   ">
                <div
                  className="d-flex justify-content-end  p-3 "
                  onClick={() => setIsOffcanvasOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="BLACK"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>
                <div className="contentcentre ">
                  <div className="mt-3">
                    <Link href="/about-us/">
                      <text className="canvastext-LEFT">ABOUT US</text>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link href="/services/">
                      <text className="canvastext-LEFT">SERVICES</text>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link href="/services/ecommerce-website-development/">
                      <text className="canvastext-LEFT">ECOMMERCE</text>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link href="/blog" onClick={closeCanvas}>
                      <text className="canvastext-LEFT">BLOGS</text>
                    </Link>
                  </div>

                  <div className="  mt-3">
                    <Button
                      href="/hire-a-developer/"
                      className="rounded-pill "
                      style={{
                        backgroundColor: "white",
                        borderColor: "black",
                        // borderRadius: "10px",
                        height: "35px", // Adjust the height as per your requirement
                        width: "250px", // Adjust the width as per your requirement
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="probyteslinetwo">HIRE A DEVELOPER</text>
                    </Button>
                  </div>

                  <div className="mt-3  ">
                    <Button
                      href="https://webapplicationdevelopmentcost.com/?utm_source=probytes_header_menu&utm_medium=web_app_cc_btn&utm_campaign=lead-gen/"
                      className="rounded-pill "
                      style={{
                        backgroundColor: "white",
                        borderColor: "black",
                        height: "35px", // Adjust the height as per your requirement
                        width: "250px", // Adjust the width as per your requirement
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="probyteslinetwo">
                        WEB APP COST CALCULATOR
                      </text>
                    </Button>
                  </div>

                  <div className="mt-3">
                    <Button
                      className="rounded-pill "
                      href="/contact/"
                      style={{
                        background:
                          "linear-gradient(to right,rgb(222 28 140), rgb(107,0,62)", // Replace these colors with your desired gradient
                        height: "35px",
                        borderColor: "white",
                        width: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="probyteslinetwowht">CONTACT US</text>
                    </Button>
                  </div>
                  <div>
                    <Image src={mail} className="imagepicR" />
                    <Image src={phone} className="imagepicR" />
                    <Image src={Whatsapp} className="imagepicR" />
                  </div>
                </div>
              </div>
            </div>

            <div className="  listmain ">
              <div>
                <div className="canvas-containerRight ">
                  <div className="canvaspro ">
                    <div className="ps-4 mt-2">
                      <text className="canvastextHead">Welcome To</text>
                      <br />
                      <text className="canvastextHead">Probytes</text>
                    </div>
                    <div
                      className="mt-2 me-2 "
                      onClick={() => setIsOffcanvasOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="row-cols-6    mt-5">
                    <div className="col-4  bordercolorwhite pb-4   ">
                      <div>
                        <div className="ps-5  ">
                          <div
                            className="canvastext directionview  d-flex"
                            onClick={handleAboutToggle}
                          >
                            About
                            <div className="me-3 hidendownarrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="white"
                                className="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/about-us/">
                              <text className="canvastextsub">CLIENTS</text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/careers/">
                              <text className="canvastextsub">CAREERS</text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/faq/">
                              <text className="canvastextsub">FAQ</text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/about-us/portfolio/">
                              <text className="canvastextsub">PORTFOLIO</text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/about-us/partners-sister-alliances/">
                              <text className="canvastextsub">
                                PARTNERS AND ALLIANCES
                              </text>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* <div className="ps-5 mt-4">
                        <div
                          className=" directionview"
                          onClick={handleAboutTogglesis}
                        >
                          <text className="canvastext">Our Sister Sites</text>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {isAboutVisiblesis && (
                        <div>
                          <div className="ps-5 mt-3  w-80 ">
                            <Link href="http://www.testbytes.net/">
                              <text className="canvastextsub">
                                TESTBYTES-SOFTWARE
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-80 ">
                            <Link href="https://www.testbytes.in/">
                              <text className="canvastextsub">
                                TESTING-SERVICES
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-80 ">
                            <Link href="https://www.redbytes.in/">
                              <text className="canvastextsub">
                                REDBYTES-MOBILE APP DEVELOPMENT COMPANY
                              </text>
                            </Link>
                          </div>
                        </div>
                      )} */}

                      <div className="ps-5 mt-4">
                        <div
                          className="  directionview"
                          onClick={handleAboutTogglesEcom}
                        >
                          <text className="canvastext">Ecommerce</text>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {isAboutVisiblesEcom && (
                        <div>
                          <div className="ps-5 mt-3 widthstyle  ">
                            <div className=" directionview">
                              <Link href="/services/ecommerce-website-development/magento-development-services/">
                                <text className="canvastextsub">
                                  MAGENTO DEVELOPMENT
                                </text>
                              </Link>
                            </div>
                          </div>
                          <div className="ps-5 mt-3 widthstyle  ">
                            <div className=" directionview">
                              <Link href="/services/ecommerce-website-development/magento-development-services/magento-setup/">
                                <text className="canvastextsub">
                                  MAGENTO SETUP
                                </text>
                              </Link>
                            </div>
                          </div>
                          <div className="ps-5 mt-3 widthstyle  ">
                            <div className=" directionview">
                              <Link href="/services/ecommerce-website-development/magento-development-services/hire-a-magento-developer/">
                                <text className="canvastextsub">
                                  HIRE A MAGENTO DEVELOPER
                                </text>
                              </Link>
                            </div>
                          </div>
                          <div className="ps-5 mt-3 widthstyle  ">
                            <div className=" directionview">
                              <Link href="/prestashop-development-company/">
                                <text className="canvastextsub">
                                  PRESTASHOP
                                </text>
                              </Link>
                            </div>
                          </div>
                          <div className="ps-5 mt-3 widthstyle  ">
                            <div className=" directionview">
                              <Link href="/wordpress-development-services/">
                                <text className="canvastextsub">
                                  WORDPRESS DELELOPMENT
                                </text>
                              </Link>
                            </div>
                          </div>
                          <div className="ps-5 mt-3 widthstyle  ">
                            <div className=" directionview">
                              <Link href="/services/joomla-development/">
                                <text className="canvastextsub">
                                  JOOMLA DEVELOPMENT
                                </text>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-4  bordercolorwhite pb-4   ">
                      <div className="ps-5">
                        <div
                          className="  directionview"
                          onClick={handleAboutTogglesInd}
                        >
                          <text className="canvastext">Industries</text>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {isAboutVisiblesInd && (
                        <div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/social-media-website-development/">
                              <text className="canvastextsub">
                                SOCIAL MEDIA DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/travel-website-development/">
                              <text className="canvastextsub">
                                TRAVEL WEBSITE DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/educational-web-development/">
                              <text className="canvastextsub">
                                EDUCATION WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/business-web-development/">
                              <text className="canvastextsub">
                                BUSSINESS WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/banking-finance-web-development/">
                              <text className="canvastextsub">
                                BANKING AND FINANCE WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/food-delivery-web-development/">
                              <text className="canvastextsub">
                                FOOD DELIVERY WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/healthcare-web-development/">
                              <text className="canvastextsub">
                                HEALTHCARE WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>

                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/real-estate-web-development/">
                              <text className="canvastextsub">
                                REAL ESTATE WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  widthstyle ">
                            <Link href="/real-estate-web-development/">
                              <text className="canvastextsub">
                                SPORTS WEBSITE DEVELOPMENT COMPANY
                              </text>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-4   pb-4   ">
                      <div className="ps-5">
                        <div
                          className="  directionview"
                          onClick={handleAboutTogglesser}
                        >
                          <text className="canvastext">Our Services</text>
                          <div className="me-3 hidendownarrow ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {isAboutVisibleser && (
                        <div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/python-development-company/">
                              <text className="canvastextsub">
                                PYTHON DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/services/web-development/">
                              <text className="canvastextsub">
                                WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/web-design-company/">
                              <text className="canvastextsub">WEB DESIGN</text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/services/core-php/">
                              <text className="canvastextsub">CORE PHP</text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/services/ruby-on-rails/">
                              <text className="canvastextsub">
                                RUBY ON RAILS
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/services/ruby-on-rails/">
                              <text className="canvastextsub">
                                YII DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/services/ruby-on-rails/">
                              <text className="canvastextsub">
                                ODOO WEB DEVELOPMENT
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/web-crawling-services/">
                              <text className="canvastextsub">
                                WEB CRAWLING
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/web-crawling-services/">
                              <text className="canvastextsub">
                                .NET Web Development
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/web-crawling-services/">
                              <text className="canvastextsub">
                                Website Redesign Services
                              </text>
                            </Link>
                          </div>
                          <div className="ps-5 mt-3  w-75 ">
                            <Link href="/web-crawling-services/">
                              <text className="canvastextsub">
                                On Demand Web Development
                              </text>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" Canvas-white   pb-4   ">
                <div
                  className="d-flex justify-content-end  p-3 "
                  onClick={() => setIsOffcanvasOpen(false)}
                ></div>
                <div className="contentcentre ">
                  <div className="mt-3">
                    <Link href="/about-us/">
                      <text className="canvastext-LEFT">ABOUT US</text>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link href="/services/">
                      <text className="canvastext-LEFT">SERVICES</text>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link href="/services/ecommerce-website-development/">
                      <text className="canvastext-LEFT">ECOMMERCE</text>
                    </Link>
                  </div>
                  <div className="mt-3">
                    <Link href="/blog" onClick={closeCanvas}>
                      <text className="canvastext-LEFT ">BLOGS</text>
                    </Link>
                  </div>

                  <div className="  mt-3">
                    <Button
                      href="/hire-a-developer/"
                      className="rounded-pill "
                      style={{
                        backgroundColor: "white",
                        borderColor: "black",
                        // borderRadius: "10px",
                        height: "35px", // Adjust the height as per your requirement
                        width: "250px", // Adjust the width as per your requirement
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="probyteslinetwo">HIRE A DEVELOPER</text>
                    </Button>
                  </div>

                  <div className="mt-3  d-none">
                    <Button
                      href="https://webapplicationdevelopmentcost.com/?utm_source=probytes_header_menu&utm_medium=web_app_cc_btn&utm_campaign=lead-gen/"
                      className="rounded-pill "
                      style={{
                        backgroundColor: "white",
                        borderColor: "black",
                        height: "35px", // Adjust the height as per your requirement
                        width: "250px", // Adjust the width as per your requirement
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="probyteslinetwo">
                        WEB APP COST CALCULATOR
                      </text>
                    </Button>
                  </div>

                  <div className="mt-3">
                    <Button
                      className="rounded-pill "
                      href="/contact/"
                      style={{
                        background:
                          "linear-gradient(to right,rgb(222 28 140), rgb(107,0,62)", // Replace these colors with your desired gradient
                        height: "35px",
                        borderColor: "white",
                        width: "250px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <text className="probyteslinetwowht">CONTACT US</text>
                    </Button>
                  </div>
                  <div className="d-flex ">
                    <Link href="/contact/">
                      <Image src={mail} className="imagepicR" />
                    </Link>
                    <Link href="tel:91 81 1386 1000">
                      <Image src={phone} className="imagepicR" />
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=918113861000">
                      <Image src={Whatsapp} className="imagepicR" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
