// import bgImage from "../../assets/hero-img.png";

function Hero() {
  return (
    <section
      className="
        w-full
        min-h-[620px]
        sm:min-h-[640px]
        md:min-h-[600px]
        lg:min-h-[500px]
        xl:min-h-[560px]

        px-[5%]

        flex
        flex-col
        lg:flex-row

        items-center
        justify-between

        bg-[url('/src/assets/bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Text Content */}
      <div
        className="
          w-full
          lg:w-[45%]
          xl:w-[42%]

          flex
          flex-col
          justify-center

          py-10
          sm:py-12
          md:py-14
          lg:py-0

          pl-0
          lg:pl-5
        "
      >
        {/* Small Heading */}
        <div
          className="
            w-fit
            mb-4
            sm:mb-5
          "
        >
          <h4
            className="
    inline-block

    px-2
    py-0.8

    sm:px-3
    sm:py-0.8

    md:px-3
    md:py-0.8

    lg:px-3
    lg:py-0.8

    xl:px-3
    xl:py-1

    text-[10px]
    sm:text-xs
    md:text-xs
    lg:text-sm
    xl:text-sm

    font-bold
    text-blue-600

    bg-blue-200
    rounded-md
    sm:rounded-xl

    whitespace-nowrap
  "
          >
            FIle checkinggggg
          </h4>
        </div>

        {/* Main Heading */}
        <div>
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl

              font-bold
              leading-tight
            "
          >
            Learn. Build.
          </h1>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl

              font-bold
              leading-tight

              text-blue-600
            "
          >
            Get Industry Ready.
          </h1>
        </div>

        {/* Description */}
        <div
          className="
            mt-5
            sm:mt-6
            max-w-xl
          "
        >
          <p
            className="
              text-sm
              sm:text-base
              lg:text-base
              xl:text-lg

              leading-relaxed
            "
          >
            Join 2100+ students who have gained real-world skills, worked on
            live projects and accelerated their careers with LearnTricks.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="
            flex
            flex-wrap

            gap-x-3
            sm:gap-x-4
            md:gap-x-5

            gap-y-3

            mt-7
            sm:mt-8
          "
        >
          <button
            className="
              w-36
              h-11

              sm:w-40
              sm:h-12

              md:w-40
              md:h-12

              lg:w-40
              lg:h-12

              xl:w-44
              xl:h-12

              rounded-lg
              bg-blue-600
              text-white
              text-sm
              sm:text-base
              font-semibold
            "
          >
            Explore Internships
          </button>

          <button
            className="
              w-36
              h-11

              sm:w-40
              sm:h-12

              md:w-40
              md:h-12

              lg:w-40
              lg:h-12

              xl:w-44
              xl:h-12

              rounded-lg
              ring-1
              ring-blue-500

              text-sm
              sm:text-base
              font-semibold
            "
          >
            View Programs
          </button>
        </div>

        {/* Ratings */}
        {/* Rating Section */}
        <div
          className="
    flex
    items-center

    mt-5
    sm:mt-6
    md:mt-7

    gap-x-3
  "
        >
          {/* Student Avatars */}
          <div className="flex items-center">
            <div
              className="
        w-7 h-7
        sm:w-8 sm:h-8
        rounded-full
        bg-gray-300
        border-2 border-white
      "
            ></div>

            <div
              className="
        w-7 h-7
        sm:w-8 sm:h-8
        rounded-full
        bg-gray-400
        border-2 border-white
        -ml-2
      "
            ></div>

            <div
              className="
        w-7 h-7
        sm:w-8 sm:h-8
        rounded-full
        bg-gray-500
        border-2 border-white
        -ml-2
      "
            ></div>

            <div
              className="
        w-7 h-7
        sm:w-8 sm:h-8
        rounded-full
        bg-gray-600
        border-2 border-white
        -ml-2
      "
            ></div>

            <div
              className="
        w-7 h-7
        sm:w-8 sm:h-8
        rounded-full
        bg-gray-700
        border-2 border-white
        -ml-2
      "
            ></div>
          </div>

          {/* Rating Information */}
          <div className="flex flex-col">
            {/* Stars */}
            <div
              className="
        flex
        items-center
        gap-x-1

        text-yellow-400
        text-sm
        sm:text-base
      "
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Rating Text */}
            <p
              className="
        text-xs
        sm:text-sm
        text-gray-700
        whitespace-nowrap
      "
            >
              4.8/5 from 500+ students
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="
          w-full
          lg:w-[55%]
          xl:w-[58%]

          flex
          items-center
          justify-center

          py-6
          sm:py-8
          md:py-10
          lg:py-0
        "
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        // }}
      >
        <img
          src="src/assets/hero-img.png"
          alt="img"
          className="
        object-contain
        w-full
        h-full
        "
        />
      </div>
    </section>
  );
}

export default Hero;
