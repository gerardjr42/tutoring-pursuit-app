import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import "./About.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function About() {
  const lenisRef = useRef();
  const horizontalRef = useRef();

  // enabling Lenis
  useLenis(() => {
    ScrollTrigger.refresh();
  });

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
      // ScrollTrigger.refresh()
    }
    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  //GSAP animation for vertical section
  useGSAP(
    () => {
      const timeln = gsap.timeline({ paused: true });
      timeln.fromTo(
        ".col_left",
        { y: 0 },
        { y: "100vh", duration: 1, ease: "none" },
      );

      ScrollTrigger.create({
        animation: timeln,
        trigger: "#vertical",
        start: "top top",
        end: "bottom center",
        scrub: true,
      });
    },
    { dependencies: [], revertOnUpdate: true },
  );

  //GSAP animation for horizontal section
  useGSAP(
    () => {
      let boxItems = gsap.utils.toArray(".item");

      gsap.to(boxItems, {
        xPercent: -100 * (boxItems.length - 1),
        ease: "linear",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (boxItems.length - 1),
          end: `+=${horizontalRef.current.offsetWidth}`,
        },
      });
    },
    { dependencies: [], revertOnUpdate: true },
  );

  return (
    <ReactLenis ref={lenisRef} autoRaf={false} root>
      <section id="vertical" className="h-[130vh] w-full px-0 py-12">
        <div className="m-auto w-[95%]">
          <div className="vertical__content flex items-start justify-center">
            <div className="col_left h-full w-[50%]">
              <h2 className="vertical__heading my-10 border-l-4 border-[#7cacff] p-6 text-7xl font-black uppercase leading-none">
                <span className="block text-white">About</span>
                <span className="block text-white">Pursuit</span>
                <span className="block text-white">Tutoring</span>
              </h2>
            </div>
            <div className="col_right w-[50%]">
              <div className="mb-60">
                <h3 className="mb-6 mt-14 text-5xl uppercase leading-none text-[#7cacff]">
                  What is Pursuit Tutoring ?
                </h3>
                <p className="ml-2 w-[80%] text-justify text-2xl text-white">
                  Pursuit Tutoring is your pathway to unlocking your potential
                  as a novice software engineer. We connect tutors with
                  learners, offering the essential support for growth and
                  advancement in your coding journey.
                </p>
              </div>
              <div className="mb-60">
                <h3 className="leading-noneunderline mb-6 text-5xl uppercase text-[#7cacff]">
                  Why Pursuit Tutoring ?
                </h3>
                <p className="ml-2 w-[80%] text-justify text-2xl text-white">
                  We love learning and use available resources to pick up new
                  skills and knowledge. As Pursuit Fellows and developers, we
                  support each other, driven by our shared love for coding.
                  Getting personalized help from experienced mentors to improve
                  specific skills boosts how we learn. We also realized the
                  value of helping fellows make the most of connections and
                  networking opportunities.
                </p>
              </div>
              <div>
                <h3 className="mb-6 text-5xl uppercase leading-none text-[#7cacff]">
                  Discover What We Provide
                </h3>
                <p className="ml-2 w-[80%] text-justify text-2xl text-white">
                  Our offered skills range from front-end development, back-end
                  development, project management, and productivity tools to
                  studying methods and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="horizontal" ref={horizontalRef} className="px-0 py-28">
        <div className="m-auto w-[95%]">
          <div className="flex">
            <img
              src="/public/assets/images/ReactLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/JSLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/GoLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/PythonLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/JavaLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/CPlusLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/htmlLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/cssLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/SassLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/tailwindLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/GitLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/VSCodeLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
            <img
              src="/public/assets/images/FigmaLogo.png"
              alt=""
              className="item mr-12 px-28 py-48"
            />
          </div>
        </div>
      </section>
    </ReactLenis>
  );
}
