function Footer() {
  return (
    <footer className="w-full">
      {/* ================= FOOTER ================= */}
      <div
        className="
          w-full
          bg-[#00183D]
          text-white
          px-[5%]

          py-10
          sm:py-12
          md:py-12
          lg:py-10
          xl:py-10
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            mx-auto

            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5

            gap-10
            sm:gap-10
            lg:gap-8
            xl:gap-10
          "
        >
          {/* ================= BRAND ================= */}
          <div
            className="
              brand

              sm:col-span-2
              lg:col-span-1

              flex
              flex-col

              items-start
            "
          >
            {/* Logo */}
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              {/* Logo symbol */}
              <div
                className="
                  w-8
                  h-8
                  sm:w-9
                  sm:h-9

                  rounded-lg

                  bg-blue-600

                  flex
                  items-center
                  justify-center

                  font-bold
                  text-white
                "
              >
                L
              </div>

              <div>
                <h2
                  className="
                    text-lg
                    sm:text-xl

                    font-bold
                    leading-none
                  "
                >
                  Learntricks
                </h2>

                <p
                  className="
                    mt-1

                    text-[8px]
                    sm:text-[9px]

                    text-white/70
                  "
                >
                  Learn. Build. Get Industry Ready.
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                mt-5

                max-w-[280px]

                text-xs
                sm:text-sm

                leading-relaxed

                text-white/70
              "
            >
              Empowering students and professionals with industry-focused
              training, internships and real-world experience.
            </p>

            {/* Social Icons */}
            <div
              className="
                mt-5

                flex
                items-center
                gap-2
              "
            >
              <a
                href="#"
                className="
                  w-7
                  h-7

                  border
                  border-white/40

                  rounded-full

                  flex
                  items-center
                  justify-center

                  text-xs

                  hover:bg-white/10
                "
              >
                in
              </a>

              <a
                href="#"
                className="
                  w-7
                  h-7

                  border
                  border-white/40

                  rounded-full

                  flex
                  items-center
                  justify-center

                  text-xs

                  hover:bg-white/10
                "
              >
                ◎
              </a>

              <a
                href="#"
                className="
                  w-7
                  h-7

                  border
                  border-white/40

                  rounded-full

                  flex
                  items-center
                  justify-center

                  text-xs

                  hover:bg-white/10
                "
              >
                ▶
              </a>

              <a
                href="#"
                className="
                  w-7
                  h-7

                  border
                  border-white/40

                  rounded-full

                  flex
                  items-center
                  justify-center

                  text-xs

                  hover:bg-white/10
                "
              >
                ➤
              </a>

              <a
                href="#"
                className="
                  w-7
                  h-7

                  border
                  border-white/40

                  rounded-full

                  flex
                  items-center
                  justify-center

                  text-xs

                  hover:bg-white/10
                "
              >
                f
              </a>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="footer-column">
            <h3
              className="
                text-sm
                sm:text-base

                font-semibold

                mb-4
              "
            >
              Quick Links
            </h3>

            <ul
              className="
                flex
                flex-col
                gap-2
              "
            >
              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Internships
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Programs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Campus Program
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ================= POPULAR PROGRAMS ================= */}
          <div className="footer-column">
            <h3
              className="
                text-sm
                sm:text-base

                font-semibold

                mb-4
              "
            >
              Popular Programs
            </h3>

            <ul
              className="
                flex
                flex-col
                gap-2
              "
            >
              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Python Development
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Data Science
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Machine Learning
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Web Development
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  AWS Cloud
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Full Stack Development
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="footer-column">
            <h3
              className="
                text-sm
                sm:text-base

                font-semibold

                mb-4
              "
            >
              Company
            </h3>

            <ul
              className="
                flex
                flex-col
                gap-2
              "
            >
              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Our Team
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="footer-column">
            <h3
              className="
                text-sm
                sm:text-base

                font-semibold

                mb-4
              "
            >
              Contact Us
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              {/* Location */}
              <div
                className="
                  flex
                  items-start
                  gap-2
                "
              >
                <span className="shrink-0 text-sm">📍</span>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    leading-relaxed
                  "
                >
                  Kothrud, Pune, Maharashtra, India
                </p>
              </div>

              {/* Email */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span className="shrink-0 text-sm">✉</span>

                <a
                  href="mailto:info@learntricks.com"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  info@learntricks.com
                </a>
              </div>

              {/* Phone */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span className="shrink-0 text-sm">☎</span>

                <a
                  href="tel:+918765906336"
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    hover:text-white
                  "
                >
                  +91 87660 83366
                </a>
              </div>

              {/* Working Hours */}
              <div
                className="
                  flex
                  items-start
                  gap-2
                "
              >
                <span className="shrink-0 text-sm">◷</span>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-white/70
                    leading-relaxed
                  "
                >
                  Mon - Sat: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT BAR ================= */}
      <div
        className="
          w-full

          min-h-[60px]

          bg-[#041235]

          px-[5%]

          flex
          items-center
          justify-center

          relative
        "
      >
        <p
          className="
            text-center

            text-[10px]
            sm:text-xs
            md:text-sm

            text-white/70
          "
        >
          © 2026 Learntricks Edutech. All rights reserved.
        </p>

        {/* Back To Top */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            absolute
            right-[5%]

            w-7
            h-7
            sm:w-8
            sm:h-8

            rounded-full

            border
            border-white/30

            flex
            items-center
            justify-center

            text-xs
            sm:text-sm

            text-white

            hover:bg-white/10

            transition
          "
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
