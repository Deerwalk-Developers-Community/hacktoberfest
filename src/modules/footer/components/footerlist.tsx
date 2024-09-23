import React from "react";

const FooterList = () => {
  return (
    <div className="flex flex-col justify-end w-full">
      {/* Footer */}
      <footer className="bg-[#183717] w-full pt-10 ">
        {" "}
        {/* Updated background color */}
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:justify-center justify-between lg:gap-48 items-start text-white space-y-0 lg:space-y-0">
          {/* Hacktober Fest Section */}
          <div className="lg:w-1/4 mb-8 gap-5 flex-col">
            <h3 className="text-3xl lg:text-7xl text-[#FFFFE6]">
              {" "}
              {/* Responsive font size */}
              DEERTOBER
            </h3>
            <br />
            <p className="text-xl mt-2 text-[#FFF7D9]">
              © 2024 DEERWALK DEVELOPERS COMMUNITY. ALL RIGHTS RESERVED.
            </p>
            <br />
            {/* Register Button with Background Div */}
            <div className="relative inline-block mt-4">
              <div className="absolute inset-0 bg-[#F8654F] rounded-full transform translate-x-2 translate-y-2"></div>
              <a href="https://forms.gle/XYLiNPe2akDW6MUm6">
              <button className="relative bg-[#F8A46D] text-white w-[302px] h-[84.03px] text-4xl font-bold px-6 lg:px-8 py-3 rounded-full shadow-lg flex items-center justify-center">
                REGISTER
                <span className="ml-2">→</span>
              </button></a>
              
            </div>
          </div>

          {/* Wrap Share, Follow, and Legal sections in a flex container */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pt-10 lg:pt-20 w-full">
            {/* Share Links */}
            <div className="lg:w-1/4 mb-8">
              <h4 className="text-2xl lg:text-4xl font-semibold mb-4 border-b-4 border-dashed border-white pb-2">
                SHARE
              </h4>
              <ul className="space-y-2 text-2xl">
                <li>
                  <a
                    href="https://x.com/intent/post?url=https%3A%2F%2Fhacktoberfest.com&text=Spread+the+love+for+open+source+with+%23Hacktoberfest%2C+a+month-long+celebration+of+open-source+projects%2C+their+maintainers%2C+and+the+entire+community+of+contributors."
                    className="underline"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fhacktoberfest.com&app_id=966242223397117&source_surface=external_reshare&display&hashtag"
                    className="underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%2F%3Furl%3Dhttps%253A%252F%252Fhacktoberfest.com"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fhacktoberfest.com&t=Hacktoberfest%202024"
                    className="underline"
                  >
                    Hacker News
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fsubmit%3Furl%3Dhttps%253A%252F%252Fhacktoberfest.com%26title%3DHacktoberfest%2B2024"
                    className="underline"
                  >
                    Reddit
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Links */}
            <div className="lg:w-1/4 mb-8">
              <h4 className="text-2xl lg:text-4xl font-semibold mb-4 border-b-4 border-dashed border-white pb-2">
                FOLLOW
              </h4>
              <ul className="space-y-2 text-2xl">
                <li>
                  <a href="#" className="underline">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="lg:w-1/4 mb-8">
              <h4 className="text-2xl lg:text-4xl font-semibold mb-4 border-b-4 border-dashed border-white pb-2">
                LEGAL
              </h4>
              <ul className="space-y-2 text-2xl">
                <li>
                  <a href="#" className="underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Brand Guideline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterList;
