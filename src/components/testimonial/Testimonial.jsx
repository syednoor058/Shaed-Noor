import React from "react";
import Marquee from "react-fast-marquee";
import interaid from "../../assets/images/brand_images/interaid.png";
import puppetBrush from "../../assets/images/brand_images/puppetbrush.png";
import qahaf from "../../assets/images/brand_images/qahaf.png";
import quantumQube from "../../assets/images/brand_images/quantum_qube.png";
import sweetCake from "../../assets/images/brand_images/sweet_cake.png";
import azizulImg from "../../assets/images/testimonials/azizul.png";
import rituImg from "../../assets/images/testimonials/rhitu.png";
import shararImg from "../../assets/images/testimonials/sharar.png";
import tanhaImg from "../../assets/images/testimonials/tanha.png";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  return (
    <div
      id="testimonial"
      className="w-full flex flex-col py-10 lg:py-20 overflow-hidden gap-7 lg:gap-10 bg-darkBG2"
    >
      <div className="w-full flex flex-col gap-10 px-7 sml:px-9 md:px-12 lg:px-20">
        <div className="w-full flex flex-col gap-10">
          <div className="uppercase font-titleFont text-xs md:text-base text-start text-accentColor1">
            Testimonial
          </div>
          <div className="w-full flex flex-col-reverse gap-10 lgl:gap-0 lgl:flex-row justify-between">
            <p className="w-full lgl:w-[60%] text-sm md:text-base text-textColo2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              illo minus voluptatibus quisquam ipsam consequuntur asperiores,
              odio, dolorem modi eveniet iure reiciendis possimus cupiditate
              expedita quibusdam fugiat similique veritatis necessitatibus nihil
              adipisci incidunt! Neque ipsa eveniet, possimus tenetur natus
              officiis labore fuga magnam reprehenderit perferendis incidunt
              expedita id velit, porro odit minima rem, atque quod voluptatum?
              Quos maiores voluptates fugit qui tenetur at quam cupiditate
              eveniet veritatis ipsa soluta repudiandae corporis possimus nihil
              nulla eius quas vitae ab, nisi eaque modi harum ducimus inventore?
              Ipsum animi ratione corporis molestiae nobis saepe similique quas,
              nam error impedit distinctio, excepturi minima. Nobis.
            </p>
            <div className="w-full lgl:w-[35%] text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-end text-titleColor2">
              <p>
                What{" "}
                <span className="font-handFont ps-2 normal-case text-5xl sml:text-7xl md:text-8xl font-normal text-primaryColor1">
                  Clients
                </span>{" "}
                say about me
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
            desc="Creating my cake business website with Shaed Noor was an absolute pleasure. His expertise and attention to detail brought my vision to life beautifully."
          />
          <TestimonialCard
            img={shararImg}
            brand="PuppetBrush Digital"
            name="Kazi Fahim Sharar"
            pos="Cheif Executive Officer"
            title="Search Engine Optimization"
            via="via Personal Meeting (October, 2020 - July, 2021)"
            desc="Thanks to Shaed's SEO services, our website's visibility has soared. His expertise and dedication have significantly boosted our and clients' online presence."
          />
          <TestimonialCard
            img={rituImg}
            brand="Rhitu Dental Care"
            name="Rhituparna Das"
            pos="Owner"
            title="Social Media Marketing"
            via="via Facebook (May, 2022 - April, 2023)"
            desc="Shaed Noor has been instrumental in transforming my digital marketing strategy. His innovative approach and thorough understanding of the industry have led to increased engagement and brand recognition."
          />
          <TestimonialCard
            img={azizulImg}
            brand="InterAid & Spandan"
            name="MD Azizul Haque"
            pos="Co-Founder & CEO"
            title="Web Development & Digital Marketing"
            via="via Personal Meeting (September, 2021 - May, 2023)"
            desc="Choosing Shaed Noor for both digital marketing and web development was one of the best decisions I made for our business."
          />
        </Marquee>
        <div className="w-full flex flex-col gap-7">
          <div className="text-2xl font-titleFont uppercase text-center font-bold text-titleColor2">
            The{" "}
            <span className="font-handFont ps-2 normal-case text-5xl sml:text-6xl md:text-7xl mdl:text-8xl l lg:text-7xl font-normal text-accentColor1">
              Brands
            </span>{" "}
            I have worked with
          </div>
          <div className="text-center text-sm md:text-base text-textColo2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at
            reprehenderit provident eveniet quisquam recusandae enim aut omnis
            esse consequatur nihil voluptatum, nulla reiciendis, adipisci nemo
            deleniti! Quibusdam aspernatur assumenda, id dolorum aperiam
            blanditiis enim unde. Aperiam sint quisquam reprehenderit in optio!
            Unde, molestiae in suscipit quasi dolores illum dolorum.
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
