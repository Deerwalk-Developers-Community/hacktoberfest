import React from "react";
import Window from "../assets/Window";

const ParticipationInfo: React.FC = () => {
  return (
    <section className="relative grid 2lg:place-items-center mx-auto 2lg:min-h-[837px] px-3 py-8 2lg:px-5 2lg:py-16 text-white w-full">
      <div className="absolute inset-0 2lg:w-full 2lg:h-full h-0 w-0">
        {/* Show the window only from 2lg breakpoint onwards */}
        <Window className="2lg:w-full 2lg:h-full object-cover 2lg:block hidden" />
      </div>

      <div className="relative z-10 w-full max-w-full 2lg:max-w-3xl p-2 md:p-6 2lg:p-8 text-left 2lg:text-black 2lg:space-y-6 leading-relaxed">
        <h2 className="text-lg md:text-3xl 2lg:text-3xl font-bold text-center 2lg:text-left mb-10">
          Here&apos;s what you need to know to participate and complete
          Hacktoberfest:
        </h2>
        <ul className="list-disc space-y-2">
          <li>Register anytime between September 23 and October 31</li>
          <li>
            Pull/merge requests can be made in any{" "}
            <a
              href="https://github.com/topics/hacktoberfest"
              className="underline text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            or{" "}
            <a
              href="https://go.gitlab.com/ubCLKL"
              className="underline text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitLab
            </a>{" "}
            hosted project
          </li>
          <li>
            Aim to submit four high-quality pull/merge requests between October
            1 and October 31, with project maintainers accepting your pull/merge
            requests for them to count toward your total
          </li>
          <li>
            You&apos;ll unlock a digital badge when you register for
            Hacktoberfest, and level it up with each of your four pull/merge
            requests accepted during Hacktoberfest
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ParticipationInfo;
