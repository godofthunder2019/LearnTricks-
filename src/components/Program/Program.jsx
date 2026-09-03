import PythonLogo from "../../assets/python-removebg-preview.png";
import DataScienceLogo from "../../assets/data-science.png";
import MachineLearningLogo from "../../assets/machine-learning.png";
import WebDevelopmentLogo from "../../assets/web-development.png";
import CloudComputingLogo from "../../assets/aws-logo.png";


function Program() {
  const programs = [
    {
      id: 1,
      image: PythonLogo,
      title: "Python Development",
      description: "Learn Python with real-world projects and applications.",
    },

    {
      id: 2,
      image: DataScienceLogo,
      title: "Data Science",
      description: "Analyse data and build powerful insights.",
    },

    {
      id: 3,
      image: MachineLearningLogo,
      title: "Machine Learning",
      description: "Build intellegent models and solve real problems.",
    },

    {
      id: 4,
      image: WebDevelopmentLogo,
      title: "Web Development",
      description: "Build responsive websites and web applications.",
    },

    {
      id: 5,
      image: CloudComputingLogo,
      title: "Cloud Computing",
      description: "Learn Python with real-world projects and applications",
    },
  ];

  return (
    <section
      className="
        w-full
        mx-auto
        px-[5%]

        py-6
        sm:py-7
        md:py-8
        lg:py-9
        xl:py-8

        xl:mt-10

       
      "
    >
      {/* =====================================
          SUB HEADING
      ====================================== */}
      <div
        className="
          text-blue-600

          text-xs
          sm:text-sm
          md:text-sm
          lg:text-sm
          xl:text-sm

          font-semibold
        "
      >
        <h3>Popular Internships</h3>
      </div>

      {/* =====================================
          MAIN HEADING
      ====================================== */}
      <div
        className="
          w-full

          flex
          items-center
          justify-between

          gap-x-4

          mt-2
          sm:mt-2
          md:mt-3

          mb-5
          sm:mb-6
          md:mb-7
          lg:mb-7
          xl:mb-6
        "
      >
        {/* Left Heading */}
        <div className="min-w-0">
          <h2
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-2xl
              xl:text-2xl

              font-bold
              leading-tight
            "
          >
            Explore Our Top <span className="text-blue-600">Programs</span>
          </h2>
        </div>

        {/* View All */}
        <div className="shrink-0">
          <button
            className="
              text-xs
              sm:text-sm
              md:text-sm
              lg:text-sm
              xl:text-sm

              font-medium

              text-gray-700

              whitespace-nowrap

              hover:text-blue-600

              transition-colors
            "
          >
            View all Programs
          </button>
        </div>
      </div>

      {/* =====================================
          CARDS CONTAINER
      ====================================== */}
      <div
        className="
          w-full

          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5

          gap-4
          sm:gap-5
          md:gap-5
          lg:gap-5
          xl:gap-4
        "
      >
        {programs.map((program) => (
          <div
            key={program.id}
            className="
              w-full

              h-[300px]
              sm:h-[220px]
              md:h-[250px]
              lg:h-[230px]
              xl:h-[220px]

              bg-white

              rounded-3xl

              overflow-hidden

              flex
              flex-col
            "
          >
            {/* =================================
                CARD HEADER
            ================================== */}
            <div
              className="
                w-full

                h-[90px]
                sm:h-[95px]
                md:h-[100px]
                lg:h-[95px]
                xl:h-[100px]

                px-4
                sm:px-5
                md:px-5
                lg:px-4
                xl:px-8

                xl:pt-4

                flex
                items-center

                gap-x-3
                sm:gap-x-3
                md:gap-x-4
                lg:gap-x-3
                xl:gap-x-3

               

                shrink-0
              "
            >
              {/* Image */}
              <div
                className="
                  shrink-0

                  w-11
                  h-11

                  sm:w-12
                  sm:h-12

                  md:w-14
                  md:h-14

                  lg:w-12
                  lg:h-12

                  xl:w-16
                  xl:h-16

                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="
                    w-full
                    h-full
                  
                    object-contain
                  "
                />
              </div>

              {/* Title */}
              <div
                className="
                  min-w-0
                  flex-1
                "
              >
                <h3
                  className="
                    w-full

                    text-sm
                    sm:text-sm
                    md:text-base
                    lg:text-sm
                    xl:text-lg
                    text-center

                    font-semibold

                    leading-[1.25]

                    text-gray-900

                    break-words
                  "
                >
                  {program.title}
                </h3>
              </div>
            </div>

            {/* =================================
                CARD BODY
            ================================== */}
            <div
              className="
                flex-1

                px-5
                sm:px-5
                md:px-6
                lg:px-5
                xl:px-5

                py-5
                sm:py-6
                md:py-6
                lg:py-5
                xl:py-2

                flex
                flex-col
              "
            >
              {/* Description */}
              <div
                className="
                  flex-1

                  flex
                  items-center
                  justify-center
                "
              >
                <p
                  className="
                    w-full

                    text-center

                    text-sm
                    sm:text-sm
                    md:text-sm
                    lg:text-xs
                    xl:text-base

                    leading-[1.5]

                    text-gray-600

                    break-words
                  "
                >
                  {program.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div
                className="
                  w-full

                  flex
                  justify-center

                  
                "
              >
                <button
                  className="
                    px-4
                    sm:px-5

                    py-1.5
                    sm:py-2

                    text-xs
                    sm:text-sm
                    md:text-sm
                    lg:text-xs
                    xl:text-sm

                    font-medium

                    text-blue-600

                    rounded-lg

                    whitespace-nowrap

                    hover:bg-blue-50

                    transition-colors
                  "
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Program;
