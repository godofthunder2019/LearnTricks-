import { useState, useEffect } from "react";

import temp from "../../assets/temp-img.webp";
import aichatbot from "../../assets/ai-chatbot.png"
import aitraining from "../../assets/ai-training.png"
import cloudComputing from "../../assets/cloud computing.png"
import portfolioWebsite from "../../assets/portfolio-website.png"
import softwareDevelopment from "../../assets/software-development.png"
import weatherDashboard from "../../assets/weather-dashboard.png"


function Students() {
  // Students Reviews
  const [CurrentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      description:
        "“LearnTricks makes learning technical concepts much easier to understand. The content is simple, practical, and well organized, which makes it a great platform for students who are just getting started.”",
      student: "Puravi",
      Domain: "Computer Science Student",
      image: temp,
    },
    {
      id: 2,
      description:
        "I really like the way LearnTricks breaks down difficult topics into smaller, understandable concepts. It feels much more practical than simply reading through long theoretical explanations",
      student: "Priya Mehta",
      Domain: "Frontend Developer",
      image: temp,
    },
    {
      id: 3,
      description:
        "The biggest thing I liked about LearnTricks is its simplicity. I can quickly find a topic, understand the concept, and move on to practicing it without getting overwhelmed.",
      student: "Rohan Verma",
      Domain: "Software Engineering Student",
      image: temp,
    },
    {
      id: 4,
      description:
        "LearnTricks is a helpful learning companion for anyone trying to improve their technical skills. The straightforward explanations make it easier to learn consistently and build confidence",
      student: "Neha Kapoor",
      Domain: "Aspiring Full Stack Developer",
      image: temp,
    },
    {
      id: 5,
      description:
        "LearnTricks has a clean and beginner-friendly approach to technical learning. It focuses on making concepts understandable instead of unnecessarily complicated, which I really appreciate.",
      student: "Aditya Singh",
      Domain: "Computer Science Graduate",
      image: temp,
    },
  ];

  // Automatic Review Slider
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentReview((prevIndex) => {
        if (prevIndex < reviews.length - 1) {
          return prevIndex + 1;
        }

        return 0;
      });
    }, 3000);

    return () => clearInterval(slider);
  }, [reviews.length]);

  // Student Projects cards
  const projects = [
    {
      id: 1,
      image: temp,
      title: "E-Commerce Website",
      technology: "Mern Stack",
    },
    {
      id: 2,
      image: aichatbot,
      title: "Ai-Chatbot",
      technology: "React, Node.js, Express, OpenAI API",
    },
    {
      id: 3,
      image: aitraining,
      title: "AI Model Training",
      technology: "Python, TensorFlow, Pandas, NumPy",
    },
    {
      id: 4,
      image: cloudComputing,
      title: "Cloud Computing",
      technology: "AWS, Azure, Google Cloud",
    },
    {
      id: 5,
      image: portfolioWebsite,
      title: "Portfolio Website",
      technology: "React, Tailwind CSS",
    },
    {
      id: 6,
      image: weatherDashboard,
      title: "Weather Dashboard",
      technology: "React, Node.js, Express",
    },
    {
      id: 7,
      image: temp,
      title: "E-Commerce Website",
      technology: "Mern Stack",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    if (currentIndex < projects.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      className="
        w-full
        mt-10
        px-[5%]
        py-6
        sm:py-7
        md:py-8
        lg:py-9
        xl:py-8
       
        flex
        gap-8
        xl:h-[350px]
      "
    >
      {/* LEFT CONTAINER */}
      <div className="left-container w-[60%]">
        {/* HEADING */}
        <div className="heading">
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
            Student Projects
          </h2>
        </div>

        {/* CARDS SECTION */}
        <div
          className="
            cards-section
            flex
            items-center
            gap-3
            xl:py-8
          "
        >
          {/* PREVIOUS BUTTON */}
          <button
            onClick={previousProject}
            disabled={currentIndex === 0}
            className="
              shrink-0
              w-8
              h-8
              bg-white
              rounded-full
            "
          >
            ←
          </button>

          {/* CARD VIEWPORT */}
          <div
            className="
              cards-container
              w-full
              overflow-hidden
            "
          >
            {/* MOVING CARD ROW */}
            <div
              className="
                cards
                flex
                gap-4
                transition-transform
                duration-500
              "
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {/* CARDS */}
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="
                    shrink-0
                    w-[calc(25%-12px)]
                    bg-white
                    rounded-xl
                    overflow-hidden
                  "
                >
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-auto
                      object-top
                      object-contain
                      overflow-hidden
                      block
                    "
                  />

                  {/* CARD CONTENT */}
                  <div className="p-2">
                    <h2 className="font-semibold">{project.title}</h2>

                    <h4 className="text-sm text-gray-500">
                      {project.technology}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEXT BUTTON */}
          <button
            onClick={nextProject}
            disabled={currentIndex >= projects.length - 4}
            className="
              shrink-0
              w-8
              h-8
              bg-white
              rounded-full
            "
          >
            →
          </button>
        </div>
      </div>

      {/* RIGHT CONTAINER */}
      <div
        className="
          right-container
         
          h-full
          w-[40%]
          overflow-hidden
        "
      >
        {/* HEADING */}
        <div className="heading">
          <h3
            className="
              text-xl
              sm:text-xl
              md:text-2xl
              lg:text-2xl
              xl:text-2xl
              font-bold
            "
          >
            What Our Students Says
          </h3>
        </div>

        {/* REVIEW SLIDER */}
        <div
          className="
            slider
            w-full
            overflow-hidden
            mt-5
            
          "
        >
          {/* MOVING REVIEW ROW */}
          <div
            className="
              flex
              transition-transform
              duration-500
              
            "
            style={{
              transform: `translateX(-${CurrentReview * 100}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="
                  shrink-0
                  w-full
                  bg-white
                  rounded-2xl
                  mt-5
                  p-5
                  
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                {/* REVIEW TEXT */}
                <div className="w-[65%]">
                  <p
                    className="
                      text-sm
                      sm:text-sm
                      md:text-sm
                      lg:text-sm
                      xl:text-base
                      text-gray-600
                      leading-relaxed
                    "
                  >
                    "{review.description}"
                  </p>

                  <h4
                    className="
                      mt-4
                      font-semibold
                      text-sm
                      xl:text-base
                    "
                  >
                    {review.student}
                  </h4>

                  <span
                    className="
                      text-xs
                      sm:text-sm
                      text-gray-500
                    "
                  >
                    {review.Domain}
                  </span>
                </div>

                {/* STUDENT PHOTO */}
                <div
                  className="
                    w-[30%]
                    flex
                    justify-center
                    items-center
                  "
                >
                  <img
                    src={review.image}
                    alt={review.student}
                    className="
                      w-16
                      h-16
                      sm:w-20
                      sm:h-20
                      md:w-20
                      md:h-20
                      lg:w-20
                      lg:h-20
                      xl:w-26
                      xl:h-26
                      rounded-full
                      object-cover
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEW DOTS */}
        <div
          className="
            flex
            justify-center
            items-center
            gap-2
            mt-4
          "
        >
          {reviews.map((review, index) => (
            <span
              key={review.id}
              className={`
                rounded-full
                transition-all
                duration-300

                ${
                  CurrentReview === index
                    ? "w-5 h-2 bg-blue-600"
                    : "w-2 h-2 bg-gray-300"
                }
              `}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Students;
