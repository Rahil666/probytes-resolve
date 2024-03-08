import Image from "next/image";
import Macmin from "../public/Macmin.png";

const YoutubeWeb = () => {
  return (
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
                It's about time! Click to see how we can change your business
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="mac-mini-pro">
              <div className="mac-mini-content position-relative">
                <Image src={Macmin} alt="Mac Mini" className="computer" />
                <div className="youtube-container">
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
  );
};

export default YoutubeWeb;
