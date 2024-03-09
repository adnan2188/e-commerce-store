import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "./PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";
const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];
const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader
        title={"Single Blog Page"}
        curPage={"Blog / Blog section-bg"}
      />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img src={item.imgUrl} alt={item.imgAlt} />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  The Art of Sustainable Fashion: In a world
                                  where fast fashion dominates, let is explore
                                  the beauty and importance of sustainable
                                  fashion. From eco-friendly materials to
                                  ethical manufacturing practices, learn how
                                  conscious choices can make a significant
                                  impact on the environment and communities.
                                  Discover brands leading the way in sustainable
                                  fashion and tips on how to build a wardrobe
                                  that is not only stylish but also sustainable
                                </p>
                                <blockquote>
                                  <p>
                                    Dynamically recaptiualize distributed
                                    technologues is wherease turnkey channels
                                    and onotonectally provide access to resource
                                    leveling expertise vias worldwide
                                    deliverables uolisticly extend aserser area
                                    diverse vortals.
                                  </p>
                                  <cite>
                                    <a href="#">... Melissa Hunter</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  Dynamically recaptiualize distributed
                                  technologues is wherease turnkey channels and
                                  onotonectally provide access to resource
                                  leveling expertise vias worldwide deliverables
                                  uolisticly extend aserser area diverse
                                  vortals.
                                </p>
                                <img src="/images/blog/single/01.jpg" alt="" />
                                <p>
                                  Dynamically recaptiualize distributed
                                  technologues is wherease turnkey channels and
                                  onotonectally provide access to resource
                                  leveling expertise vias worldwide deliverables
                                  uolisticly extend aserser area diverse
                                  vortals.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    target="blank"
                                    href="https://www.youtube.com/watch?v=PGuKjkdGrEI&t=3977s"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  Dynamically recaptiualize distributed
                                  technologues is wherease turnkey channels and
                                  onotonectally provide access to resource
                                  leveling expertise vias worldwide deliverables
                                  uolisticly extend aserser area diverse
                                  vortals.
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {socialList.map((val, i) => (
                                      <li key={i}>
                                        <a href="#" className={val.className}>
                                          <i className={val.iconName}></i>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="prev">
                          <i className="icofont-double-left">Previous Blog</i>
                        </a>
                        <a href="" className="title">
                          Evisculate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                      <div className="right">
                        <a href="#" className="prev">
                          <i className="icofont-double-right">Next Blog</i>
                        </a>
                        <a href="" className="title">
                          Evisculate Parallel Processes via Technica Sound
                          Models Authoritative
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
