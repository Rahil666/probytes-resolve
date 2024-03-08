import { useEffect, useState } from "react";


export default function BlogLiveSiderBar() {
    const [isCollapseVisible, setCollapseVisible] = useState(false);

    const handleSelectCategoryClick = () => {
      setCollapseVisible(!isCollapseVisible);
    };
   
  return (
    <>
            <div className="pb-b-category-sx-aq">
              <button
                type="button"
                className="pb-select-btn-sx-aq"
                onClick={handleSelectCategoryClick}
              >
                <div className="filter-bar-info-sx-aq">
                  <span className="filter-bar-aq"></span>
                  <span className="filter-bar-aq"></span>
                  <span className="filter-bar-aq"></span>
                </div>
                Select Category
              </button>
              <div
                id="demo_filter"
                className={`collapse ${isCollapseVisible ? "show" : ""}`}
              >
                <div className="side-category-wrap-sx-aq">
                  <div className="side-b-category-sx-aq">
                    <div id="category-mob-sx-aq">
                      <div className="collapsed">
                        <h6>
                          Blog Category
                          <span style={{ fontSize: "17px", color: "#7c43bd" }}>
                            (283 Blogs)
                          </span>
                          <i className="fa fa-angle-down"></i>
                        </h6>
                      </div>
                    </div>
                    <div id="collapseR1" className="collapse show">
                      <div className="b-category-list-sx-aq">
                        <ul className="b-category-list-icon-aq">
                          <li>
                            <a href="/blog/category/python/">
                              <img
                                src="/Python.png"
                                alt="image"
                              />
                              Python
                              <span className="b-category-list-count-aq">
                                (58)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/magento/">
                              <img
                                src="/Magento.png"
                                alt="image"
                              />
                              Magento
                              <span className="b-category-list-count-aq">
                                (38)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/odoo/">
                              <img
                                src="/Odoo.png"
                                alt="image"
                              />
                              Odoo
                              <span className="b-category-list-count-aq">
                                (12)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/how-to/">
                              <img
                                src="/How-to.png"
                                alt="image"
                              />
                              How To
                              <span className="b-category-list-count-aq">
                                (26)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/how-much/">
                              <img
                                src="/How-much.png"
                                alt="image"
                              />
                              How Much
                              <span className="b-category-list-count-aq">
                                (9)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/yii-development/">
                              <img
                                src="/Yii-development.png"
                                alt="image"
                              />
                              Yii Development
                              <span className="b-category-list-count-aq">
                                (9)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/core-php/">
                              <img
                                src="/core-php.png"
                                alt="image"
                              />
                              Core PHP
                              <span className="b-category-list-count-aq">
                                (3)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/prestashop/">
                              <img
                                src="/Prestashop.png"
                                alt="image"
                              />
                              Prestashop
                              <span className="b-category-list-count-aq">
                                (28)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/latest-news/">
                              <img
                                src="/Latest-news.png"
                                alt="image"
                              />
                              Latest News
                              <span className="b-category-list-count-aq">
                                (2)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/education/">
                              <img
                                src="/Education.png"
                                alt="image"
                              />
                              Education
                              <span className="b-category-list-count-aq">
                                (1)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/website-design/">
                              <img
                                src="/web-design.png"
                                alt="image"
                              />
                              Web Design
                              <span className="b-category-list-count-aq">
                                (29)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/business/">
                              <img
                                src="/business-cat.png"
                                alt="image"
                              />
                              Business
                              <span className="b-category-list-count-aq">
                                (12)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/ecommerce/">
                              <img
                                src="/ecommerce-cat.png"
                                alt="image"
                              />
                              Ecommerce
                              <span className="b-category-list-count-aq">
                                (4)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/travel/">
                              <img
                                src="/travel-cat.png"
                                alt="image"
                              />
                              Travel
                              <span className="b-category-list-count-aq">
                                (4)
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/blog/category/finance-and-banking/">
                              <img
                                src="/finance-cat.png"
                                alt="image"
                              />
                              Banking and Finance
                              <span className="b-category-list-count-aq">
                                (3)
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="side-b-category-sx-aq mob-bar-aq">
                    <div className="collapsed">
                      <h6>
                        Services We Offer <i className="fa fa-angle-down"></i>
                      </h6>
                    </div>
                    <div id="collapseR2" className="collapse">
                      <div className="b-category-list-sx-aq">
                        <ul className="b-category-list-icon-aq">
                          <li>
                            <a href="/services/web-development/">
                              <img
                                src="/Web-Develeopment.png"
                                alt="image"
                              />
                              Web Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/core-php/">
                              <img
                                src="/core-php.png"
                                alt="image"
                              />
                              Core PHP
                            </a>
                          </li>
                          <li>
                            <a href="/services/ruby-on-rails/">
                              <img
                                src="/Ruby-on-Rails.png"
                                alt="image"
                              />
                              Ruby On Rails
                            </a>
                          </li>
                          <li>
                            <a href="/services/yii-development/">
                              <img
                                src="/Yii-development.png"
                                alt="image"
                              />
                              Yii Development
                            </a>
                          </li>
                          <li>
                            <a href="/services/joomla-development/">
                              <img
                                src="/Joomla-Development.png"
                                alt="image"
                              />
                              Joomla Development
                            </a>
                          </li>
                          <li>
                            <a href="/odoo/">
                              <img
                                src="/Odoo.png"
                                alt="image"
                              />
                              Odoo
                            </a>
                          </li>
                          <li>
                            <a href="/python-development-company/">
                              <img
                                src="/Python.png"
                                alt="image"
                              />
                              Python
                            </a>
                          </li>
                          <li>
                            <a href="/services/ecommerce-website-development/">
                              <img
                                src="/Ecommerce.png"
                                alt="image"
                              />
                              Ecommerce
                            </a>
                          </li>
                          <li>
                            <a href="/services/ecommerce-website-development/magento-development-services/" style={{ display: "flex" }}>
                              <img
                                src="/Magento-Development-Services.png"
                                alt="image"
                                style={{
                                  height: "20px",
                                  margin: "6px 10px 0 0",
                                }}
                              />
                              Magento Development Services
                            </a>
                          </li>
                          <li>
                            <a href="/prestashop-development-company/">
                              <img
                                src="/Prestashop.png"
                                alt="image"
                              />
                              Prestashop
                            </a>
                          </li>
                          <li>
                            <a href="/hire-a-developer/">
                              <img
                                src="/Hire-a-Developer.png"
                                alt="image"
                              />
                              Hire a Developer
                            </a>
                          </li>
                          <li>
                            <a href="/web-crawling-services/">
                              <img
                                src="/Web-Crawling-Services.png"
                                alt="image"
                              />
                              Web Crawling Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
             </div>
    
    </>
  )
}
