function Stats() {
  const stats = [
    {
      value: "2100+",
      label: "Students Trained",
    },
    {
      value: "50+",
      label: "Industry Programs",
    },
    {
      value: "95%",
      label: "Student Satisfaction",
    },
    {
      value: "100+",
      label: "Live Projects",
    },
  ];

  return (
    <section
      className="
        w-[90%]
        px-[5%]
        mx-auto
        bg-white
        rounded-3xl
        mt-[-30px]
        relative

        min-h-[180px]
        sm:min-h-[190px]
        md:min-h-[180px]
        lg:min-h-[160px]
        xl:min-h-[170px]

        flex
        items-center
      "
    >
      <div
        className="
          w-full
          grid
          grid-cols-2
          lg:grid-cols-4

          gap-y-8
          lg:gap-y-0

          py-8
          lg:py-6
        "
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            <span
              className="
                text-3xl
                sm:text-4xl
                md:text-4xl
                lg:text-4xl
                xl:text-5xl

                font-bold
                text-blue-600
              "
            >
              {stat.value}
            </span>

            <span
              className="
                mt-1
                text-xs
                sm:text-sm
                md:text-sm
                lg:text-sm
                xl:text-base

                font-medium
                text-gray-600
              "
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
