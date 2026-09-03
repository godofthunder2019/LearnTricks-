import chooseProgram from "../../assets/file.gif";
import Apply from "../../assets/Apply.gif";
import Learn from "../../assets/learn.gif";
import Certificate from "../../assets/certificate.gif";
import Career from "../../assets/career.gif";

import dottedArrow from "../../assets/arrow.png";
import whyImage from "../../assets/secondary-image.png";

function Why() {
  const WhyLearnTricks = [
    "Industry Expert Mentorship",
    "Live Projects & Practical Training",
    "Flexible & Remote Internships",
    "Certificate of Completion",
    "Placement Assistance",
    "Interview Preparation",
  ];

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Choose Program",
      description: "Pick the right internship for your interest.",
      image: chooseProgram,
    },

    {
      id: 2,
      number: "02",
      title: "Apply",
      description: "Submit your application.",
      image:Apply
    },

    {
      id: 3,
      number: "03",
      title: "Learn & Build",
      description: "Gain skills and work on real projects.",
     image:Learn
    },

    {
      id: 4,
      number: "04",
      title: "Get Certified",
      description: "Earn certificate of completion.",
      image:Certificate
    },

    {
      id: 5,
      number: "05",
      title: "Kickstart Career",
      description: "Get placement assistance.",
      image:Career
    },
  ];

  return (
    <section
      className="
        w-full
        mt-10
        flex
        px-[5%]
        xl:h-[350px]

         py-6
        sm:py-7
        md:py-8
        lg:py-9
        xl:py-8
        "
    >
      <div
        className="left-container
            w-[40%]
            h-full
            flex
            "
      >
        <div
          className="text
                w-[40%]
                h-[100%]
                
                "
        >
          <h2
            className="
              text-xl
              sm:text-xl
              md:text-2xl
              lg:text-2xl
              xl:text-2xl
              font-bold
            "
          >
            Why LearnTricks?
          </h2>

          <ul
            className="flex flex-col gap-2 sm:gap-3 
            xl:mt-10"
          >
            {WhyLearnTricks.map((point, index) => (
              <li
                key={index}
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  sm:text-sm
                  md:text-sm
                  lg:text-sm
                  xl:text-sm
                  text-gray-700
                "
              >
                <span
                  className="
                    shrink-0
                    text-blue-600
                    font-bold
                  "
                >
                  ✓
                </span>

                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="image
                w-[60%]
                "
        >
          <img
            src={whyImage}
            alt="img"
            className="
              pt-auto
              h-full
              object-contain
            "
          />
        </div>
      </div>

      <div
        className="right-container
        pl-[20px]
        
        w-[60%]
        "
      >
        <div
          className="heading
                 text-xl
                 sm:text-xl
                 md:text-2xl
                 lg:text-2xl
                 xl:text-2xl
                 font-bold
              "
        >
          <h2>How it works</h2>
        </div>

        {/* Steps Container */}
        <div
          className="
            steps-container
            w-full
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-start
            lg:justify-between
            xl:mt-10
            xl:gap-6
          "
        >
          {steps.map((step, index) => {
            return (
              <div
                key={step.id}
                className="
                  step
                  relative
                  w-full
                  lg:w-[18%]
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Step Icon */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="
                    relative
                    z-10
                    w-16
                    h-16
                    sm:w-18
                    sm:h-18
                    md:w-20
                    md:h-20
                    lg:w-16
                    lg:h-16
                    xl:w-20
                    xl:h-20
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                />

                {/* Step Number */}
                <span
                  className="
                    mt-3
                    text-xs
                    sm:text-sm
                    font-bold
                    text-gray-500
                  "
                >
                  {String(step.id).padStart(2, "0")}
                </span>

                {/* Step Content */}
                <div
                  className="
                    mt-1
                    w-full
                    flex
                    flex-col
                    items-center
                  "
                >
                  {/* Title */}
                  <h3
                    className="
                      text-sm
                      sm:text-base
                      md:text-base
                      lg:text-sm
                      xl:text-base
                      font-semibold
                      leading-tight
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      max-w-[190px]
                      text-xs
                      sm:text-sm
                      md:text-sm
                      lg:text-xs
                      xl:text-sm
                      leading-relaxed
                      text-gray-600
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {index !== steps.length - 1 && (
                  <img
                    src={dottedArrow}
                    alt=""
                    className="
      hidden
      lg:block
      absolute
      left-[60%]
      top-8
      w-[80%]
      h-auto
      object-contain
      z-0
    "
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Why;
