import React from 'react'
import BlogContact from './BlogContact'

export default function BlogLiveLeftBar() {
  // const test= "hkjkj";
  return (
    <>
                 <div className="">
                  <div className="side-b-category-sx-aq">
                    <div className="collapsed">
                      <h6>
                        Timeline <i className="fa fa-angle-down"></i>
                      </h6>
                    </div>
                    <div id="collapseR3" className="collapse">
                      <div className="b-category-list-sx-aq">
                        <ul
                          className="b-category-list-icon-aq"
                          id="rec-psts-aq"
                        >
                          <li>
                            <a href="/blog/machine-learning-with-iot-exploring-future-possibilities/">
                              <span className="timeline-date-aq">
                                May 6, 2020
                              </span>
                              <h4 className="timeline-blog-heading-aq">
                                Machine Learning with IoT: Exploring Future
                                Possibilities
                              </h4>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/top-guidelines-for-a-thriving-dashboard-design/">
                              <span className="timeline-date-aq">
                                April 29, 2020
                              </span>
                              <h4 className="timeline-blog-heading-aq">
                                Top 15 Guidelines for a Thriving Dashboard
                                Design
                              </h4>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/structure-roles-of-a-web-development-team/">
                              <span className="timeline-date-aq">
                                April 22, 2020
                              </span>
                              <h4 className="timeline-blog-heading-aq">
                                Who’s Who?: Structure &amp; Roles of a Web
                                Development Team
                              </h4>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/top-tools-to-check-your-website-health/">
                              <span className="timeline-date-aq">
                                April 22, 2020
                              </span>
                              <h4 className="timeline-blog-heading-aq">
                                Top 20 Tools to Check Your Website Health
                              </h4>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/designs-tips-to-improve-your-ecommerce-ux/">
                              <span className="timeline-date-aq">
                                April 14, 2020
                              </span>
                              <h4 className="timeline-blog-heading-aq">
                                20 Designs Tips to Improve your Ecommerce UX in
                                2020
                              </h4>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="side-b-category-sx-aq">
                    <div className="collapsed">
                      <h6>
                        Popular Posts <i className="fa fa-angle-down"></i>
                      </h6>
                    </div>
                    <div id="collapseR4" className="collapse">
                      <div className="b-category-list-sx-aq">
                        <ul className="b-category-list-icon-aq">
                          <li className="Popular-list-sx-aq">
                            <a href="/blog/top-free-online-movie-websites/">
                              <img
                                src="/Free-Online-Movie-Websites.jpg"
                                alt="image"
                              />
                              <p>Top 25 Free Online Movie Websites</p>
                            </a>
                          </li>
                          <li className="Popular-list-sx-aq">
                            <a href="/blog/use-python-make-websites/">
                              <img
                                src="/11-10-2017_How-to-use-Python-to-make-websites.jpg"
                                alt="image"
                              />
                              <p>How To Use Python To Make Websites?</p>
                            </a>
                          </li>
                          <li className="Popular-list-sx-aq">
                            <a href="/blog/inspirational-movies-about-business-success/">
                              <img
                                src="/movies.jpg"
                                alt="image"
                              />
                              <p>
                                Top 25 Inspirational Movies About Business
                                Success
                              </p>
                            </a>
                          </li>
                          <li className="Popular-list-sx-aq">
                            <a href="/blog/games-made-with-python/">
                              <img
                                src="https://www.probytes.net/wp-content/uploads/2018/07/7-Kick-ass-Games-Built-Using-Python-Language.jpg"
                                alt="image"
                              />
                              <p>
                                7 Kick-ass Games Built Using Python Language
                              </p>
                            </a>
                          </li>
                          <li className="Popular-list-sx-aq">
                            <a href="/blog/how-to-add-payment-method-on-website/">
                              <img
                                src="/how-to-add-payment-method-on-website.jpg"
                                alt="image"
                              />
                              <p>How to Add Payment Method on Website</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="side-b-category-sx-aq">
                    <div className="collapsed">
                      <h6>
                        Contact Us <i className="fa fa-angle-down"></i>
                      </h6>
                    </div>
                    <div id="collapseR5" className="collapse">
                     <BlogContact/>
                    </div>
                  </div>
                  <div
                    id="sticky-anchor"
                    style={{ float: "left", width: "100%" }}
                  ></div>
                  <div
                    className="stickdiv-sx-aq"
                    id="prob-form-fixed"
                    style={{ marginBottom: "25px" }}
                  >
                    <a href="/contact">
                      <img
                        src="/web-developing-agency.png"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
    </>
  )
}
