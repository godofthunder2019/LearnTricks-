import ctaBg from "../../assets/CTA-bg-image.png";

function CTA() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        

        min-h-[180px]
        sm:min-h-[190px]
        md:min-h-[200px]
        lg:min-h-[200px]
        xl:min-h-[200px]

        flex
        items-center

        bg-blue-900
      "
    >
      {/* Background Image */}
      <img
        src={ctaBg}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
        "
      />

      {/* Dark/Blue overlay */}
      <div
        className="
          absolute
          inset-0
          bg-blue-900/20
          pointer-events-none
        "
      ></div>

      {/* CTA Content */}
      <div
        className="
          relative
          z-10

          w-[90%]
          max-w-7xl
          mx-auto

          px-2
          sm:px-4
          md:px-6
          lg:px-8

          py-8
          sm:py-9
          md:py-10

          flex
          flex-col
          lg:flex-row

          items-center
          lg:items-center

          justify-between

          gap-6
          lg:gap-8
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            w-full
            lg:w-[55%]

            text-center
            lg:text-left
          "
        >
          <h2
            className="
              text-white
              font-bold

              text-xl
              sm:text-2xl
              md:text-2xl
              lg:text-2xl
              xl:text-2xl

              leading-tight
            "
          >
            Ready to Start Your Journey?
          </h2>

          <p
            className="
              mt-2

              text-white/80

              text-xs
              sm:text-sm
              md:text-sm

              leading-relaxed

              max-w-[500px]

              mx-auto
              lg:mx-0
            "
          >
            Join thousands of learners and take the first step
            <br className="hidden sm:block" />
            towards your dream career.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            w-full
            lg:w-[45%]

            flex
            flex-col
            sm:flex-row

            items-center
            justify-center
            lg:justify-end

            gap-4
            sm:gap-5
          "
        >
          {/* APPLY BUTTON */}
          <button
            className="
              w-full
              sm:w-auto

              min-w-[130px]

              px-6
              py-3

              bg-white
              text-blue-700

              rounded-lg

              text-sm
              sm:text-base

              font-semibold

              whitespace-nowrap

              hover:bg-gray-100

              transition-colors
              duration-200
            "
          >
            Apply Now →
          </button>

          {/* EXPERT LINK */}
          <button
            className="
              text-white

              text-sm
              sm:text-base

              font-medium

              whitespace-nowrap

              hover:text-white/80

              transition-colors
              duration-200
            "
          >
            Talk to Our Expert →
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
