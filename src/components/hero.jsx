import LinkComp from "./linkComp";

function heroSection() {
  return (
    <>
      <section
        className="herosec flex flex-col-reverse items-center md:justify-center md:flex-row md:gap-6 md:p-16 md:mt-16 "
        id="home"
      >
        <div className=" text-center md:w-2/3">
          <h1 className="text-2xl font-bold md:text-7xl text-white">
            Mahesh Jyothula
          </h1>
          <h4 className="font-bold text-lg md:text-3xl">
            I am <span className="dev  text-purple-500">Devloper .</span>
          </h4>
          <p className="px-4  md:mx-auto md:text-xl md:my-6">
            Aiming to start my career with an organization where my skill set
            can be utilized for the growth of the organization.
          </p>
          <div className="hero-end flex justify-around  my-4 items-center md:text-xl md:my-8">
            <LinkComp />
            <a
              className="resume bg-purple-500 text-white px-4 py-2 rounded-xl "
              href="https://drive.google.com/file/d/1EV2BmRDiCmeSOXHygUYysVvcycPecnMq/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="my-4">
          <img
            src="/21MH5A0437.jpg"
            alt="profile"
            className="rounded-[50%] h-40 md:h-80  "
          />
        </div>
      </section>
    </>
  );
}

export default heroSection;
