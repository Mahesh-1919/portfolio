function skills() {
  const skillArray = [
    { id: 1, url: "/image1.png", name: "python" },
    { id: 2, url: "/image2.png", name: "AWS" },
    { id: 3, url: "/image3.png", name: "HTML" },
    { id: 4, url: "/image4.png", name: "CSS" },
    { id: 5, url: "/image5.png", name: "Javascript" },
    { id: 6, url: "/image6.png", name: "React" },
    { id: 7, url: "/image7.png", name: "Nodejs" },
    { id: 8, url: "/image8.png", name: "Tailwind" },
    { id: 9, url: "/image9.png", name: "MongoDB" },
    { id: 10, url: "/image10.png", name: "Docker" },
    { id: 11, url: "/image11.png", name: "Photoshop" },
  ];

  return (
    <>
      <section className="skills p-4 md:w-2/3 mx-auto" id="skills">
        <h1 className="sec-head">SKILLS</h1>
        <ul className="skill-container flex gap-2 flex-wrap justify-center md:gap-6">
          {skillArray.map((data) => (
            <li
              key={data.id}
              className="border border-purple-500 rounded-lg flex items-center p-2 text-sm gap-2 hover:bg-purple-500 hover:text-white hover:border-black md:text-xl"
            >
              <img src={data.url} alt="image" className=" h-5 "></img>
              <span>{data.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default skills;
