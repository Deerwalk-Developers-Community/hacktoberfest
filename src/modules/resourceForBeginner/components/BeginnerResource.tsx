import React from "react";
import Arrow from "@/components/Arrow";

const BeginnerResource: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 lg:px-20 sm:gap-8">
      
      <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center justify-center gap-16  md:pr-[73px] sm:pr-[73px]">
        
        <div className="flex flex-row items-center lg:flex-row gap-3 lg:gap-5">
          <Arrow className="shrink-0 w-16 lg:w-24" />
          <h1 className="text-white text-3xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
            Resource for <br /> Beginners
          </h1>
        </div>

       
        <div className="flex flex-col gap-">
          <h2 className="text-[#FFBDDE] text-xl lg:text-4xl font-semibold">
            Intro to open source 👾
          </h2>
          <ul className="text-[#43fc5a] underline text-lg pl-10 lg:text-4xl space-y-2 mt-4 list-disc marker:text-[#FFEDA6]">
            <li>
              <a href="https://www.digitalocean.com/community/tutorial-series/an-introduction-to-open-source"  target="_blank">Introduction to GitHub and Open-Source Projects</a>
            </li>
            <li>
              <a href="https://opensource.guide/how-to-contribute/"  target="_blank">How to Contribute to Open Source</a>
            </li>
            <li>
              <a href="https://www.digitalocean.com/community/tutorials/what-is-open-source"  target="_blank">What is Open Source</a>
            </li>
            <li>
              <a href="https://www.digitalocean.com/community/cheatsheets/how-to-use-git-a-reference-guide"  target="_blank">How to use Git</a>
            </li>
          </ul>
        </div>
      </div>

    
      <div className="w-full my-8 hidden lg:block">
        <hr className="border-t-2 border-dashed border-[#FFF2E4]" />
        <br />
        <hr className="border-t-2 border-dashed border-[#FFF2E4]" />
      </div>

    
      <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
        
        <div className="flex flex-col gap-4 lg:border-r-2 border-dashed border-[#FFF2E4] h-fit">
          <h2 className="text-[#FFBDDE] text-xl lg:text-4xl font-semibold">
            Start Contributing
          </h2>
          <ul className="text-[#43fc5a] text-lg pl-10 lg:text-4xl space-y-2 list-disc marker:text-[#FFEDA6]">
            <li>
            <span className="text-[#FFEDA6] font-thin">[GitHub]</span><a className="underline" href="https://github.com/topics/hacktoberfest"  target="_blank">Participating Hacktoberfest projects</a>
            </li>
            <li>
            <span className="text-[#FFEDA6] font-thin">[GitLab]</span><a className="underline" href="https://gitlab.com/explore/projects/topics/hacktoberfest"  target="_blank">Participating Hacktoberfest projects</a>
            </li>
            <li>
            <span className="text-[#FFEDA6] font-thin">[GitHub]</span><a className="underline" href="https://goodfirstissue.dev/"  target="_blank">Explore projects with issues on good firstissue.dev</a>
            </li>
          </ul>
        </div>

       
        <div className="flex flex-col gap-4 lg:w-[900px] md:w-[495px] sm:w-[495px] h-fit">
          <h2 className="text-[#FFBDDE] text-xl lg:text-4xl font-semibold">
            Sharpen Your Skills
          </h2>
          <ul className="text-[#43fc5a] text-lg lg:text-4xl pl-10 space-y-2 list-disc marker:text-[#FFEDA6] ">
            <li>
              <span className="text-[#FFEDA6] font-thin">[GitHub]</span><a href="https://training.github.com/" className="underline" target="_blank">GitHub Training Manual</a>
            </li>
            <li>
            <span className="text-[#FFEDA6] font-thin">[General]</span><a href="https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/" className="underline"  target="_blank">How to write the perfect pull request</a>
            </li>
            <li>
            <span className="text-[#FFEDA6] font-thin">[General]</span><a href="https://dev.to/chrissiemhrk/git-commit-message-5e21" className="underline"  target="_blank">How to write a good commit message</a>
            </li>
            <li>
            <span className="text-[#FFEDA6] font-thin">[General]</span>
              <a href="https://about.gitlab.com/blog/2022/02/07/first-time-open-source-contributor-5-things-to-get-you-started/" className="underline"  target="_blank">5 things for your first time contributing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeginnerResource;
