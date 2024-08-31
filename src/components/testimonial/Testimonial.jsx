import React from "react";
import Marquee from "react-fast-marquee";
import interaid from "../../assets/images/brand_images/interaid.webp";
import puppetBrush from "../../assets/images/brand_images/puppetbrush.webp";
import qahaf from "../../assets/images/brand_images/qahaf.webp";
import quantumQube from "../../assets/images/brand_images/quantum_qube.webp";
import sweetCake from "../../assets/images/brand_images/sweet_cake.webp";
import azizulImg from "../../assets/images/testimonials/azizul.webp";
import rituImg from "../../assets/images/testimonials/rhitu.webp";
import shararImg from "../../assets/images/testimonials/sharar.webp";
import tanhaImg from "../../assets/images/testimonials/tanha.webp";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  return (
    <div
      id="testimonial"
      className="w-full flex flex-col py-10 lg:py-20 overflow-hidden gap-5 lg:gap-10 bg-darkBG2"
    >
      <div className="w-full flex flex-col gap-10 px-5 md:px-10 lg:px-20">
        <div className="w-full flex flex-col gap-5 md:gap-10">
          <div className="uppercase font-titleFont text-xs md:text-base text-start text-accentColor1">
            Testimonial
          </div>
          <div className="w-full flex flex-col-reverse gap-5 lgl:gap-0 lgl:flex-row justify-between items-center">
            <p className="w-full lgl:w-[60%] text-sm md:text-base text-textColo2">
              Discover what my clients have to say about their experiences
              working with me. Their feedback highlights the quality,
              dedication, and impact of my services. From successful project
              completions to long-term collaborations, these testimonials
              reflect the trust and satisfaction that my clients have in my
              work. I am proud to share their stories and look forward to
              creating more success together.
            </p>
            <div className="w-full lgl:w-[35%] text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-end text-titleColor2">
              <p className="leading-none">
                Client success{" "}
                <span className="font-handFont ps-2 lowercase text-5xl sml:text-7xl md:text-8xl font-normal text-[#8447FF]">
                  _insights
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          speed={120}
          direction="left"
          className="hover:cursor-pointer"
        >
          <TestimonialCard
            img={tanhaImg}
            brand="Sweet Cake"
            name="Sheikh Tanjina Tanha"
            pos="Owner"
            title="Cake Order & Delivery Application"
            via="via Personal Meeting (April, 2023 - August, 2023)"
            desc="Absolutely thrilled with the cake order and delivery app! It's user-friendly, efficient, and has significantly boosted our sales. A fantastic job, highly recommended!"
          />
          <TestimonialCard
            img={shararImg}
            brand="PuppetBrush Digital"
            name="Kazi Fahim Sharar"
            pos="Cheif Executive Officer"
            title="Search Engine Optimization"
            via="via Personal Meeting (October, 2020 - July, 2021)"
            desc="Our digital marketing agency saw a significant increase in organic traffic and search rankings. Thanks to Shaed's SEO services! Professional, knowledgeable, and effective."
          />
          <TestimonialCard
            img={rituImg}
            brand="Rhitu Dental Care"
            name="Rhituparna Das"
            pos="Owner"
            title="Social Media Marketing"
            via="via Facebook (May, 2022 - April, 2023)"
            desc="The digital marketing campaign for our dental care clinic was a game-changer. Increased patient inquiries and appointments. Highly professional and results-driven service!"
          />
          <TestimonialCard
            img={azizulImg}
            brand="InterAid & Spandan"
            name="MD Azizul Haque"
            pos="Co-Founder & CEO"
            title="Web Development & Digital Marketing"
            via="via Personal Meeting (September, 2021 - May, 2023)"
            desc="Outstanding work on our educational center's website and marketing! The site is sleek, functional, and our online presence has never been stronger. Thank you, Shaed!"
          />
        </Marquee>
        <div className="w-full flex flex-col gap-7">
          {/* <div className="text-2xl font-titleFont uppercase text-center font-bold text-titleColor2">
            The{" "}
            <span className="font-handFont ps-2 normal-case text-5xl sml:text-6xl md:text-7xl mdl:text-8xl l lg:text-7xl font-normal text-accentColor1">
              Brands
            </span>{" "}
            I have worked with
          </div> */}
          <div className="text-center text-sm md:text-base text-textColo2">
            I am immensely grateful for the opportunity to work with such
            esteemed brands. Collaborating with these innovative and
            forward-thinking companies has been an honor and a driving force
            behind my passion and growth. Each partnership has brought unique
            challenges and rewarding experiences, allowing me to contribute to
            their success while honing my skills. Thank you to all the
            incredible organizations for your trust and support. Your confidence
            in my work is deeply appreciated, and I look forward to many more
            successful collaborations in the future.
          </div>
        </div>
      </div>
      <div className="px-0 lg:px-20">
        <Marquee
          autoFill={true}
          speed={120}
          direction="right"
          className="hover:cursor-pointer"
          gradient={true}
          gradientColor="#F6E8EA"
          gradientWidth={50}
        >
          <img src={sweetCake} className="w-[100px] md:w-[150px] h-auto mx-5" />
          <img src={qahaf} className="w-[100px] md:w-[150px] h-auto mx-5" />
          <img
            src={quantumQube}
            className="w-[100px] md:w-[150px] h-auto mx-5"
          />
          <img src={interaid} className="w-[100px] md:w-[150px] h-auto mx-5" />
          <img
            src={puppetBrush}
            className="w-[100px] md:w-[150px] h-auto mx-5"
          />
        </Marquee>
      </div>
    </div>
  );
}
