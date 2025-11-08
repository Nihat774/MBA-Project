function About() {
  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        
        {/* Mətn hissəsi */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center md:text-left">
            About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio sapiente ipsa porro fugiat. 
            Est, explicabo delectus suscipit at ipsam, dignissimos voluptas eum molestias aliquam, 
            velit natus possimus quas eaque?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-300 w-fit"
          >
            Contact Us
          </a>
        </div>

    
        <div className="flex-1 flex justify-center">
          <img
            src="/company-img.jpeg"
            alt="company"
            className="rounded-2xl shadow-lg w-[80%] md:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
