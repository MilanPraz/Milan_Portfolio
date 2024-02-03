import { useState, useTransition } from "react";
import TabButton from "../sub/TabButton";
import about from "../../assets/about-image.png";
import { animate, delay, motion } from "framer-motion";

const TabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.ul
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" list-disc pl-2"
      >
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </motion.ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.5 }}
        className=" list-disc pl-2"
      >
        <li>3 months Mern Stack Course</li>
        <li>1 week FullStack BootCamp</li>
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certificates",
    content: (
      <motion.ul
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.5 }}
        className=" list-disc pl-2"
      >
        <li>3 months Mern Stack</li>
        <li>3 months Graphic Designing</li>
      </motion.ul>
    ),
  },
];

function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className=" container mx-auto text-white" id="about">
      <div className=" md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 lg:gap-14 sm:py-16">
        <img src={about} alt="image" width={500} height={500} />
        <div className=" flex flex-col mt-4 md:mt-0 text-left h-full">
          <h1 className=" text-4xl font-bold text-white mb-4">About Me</h1>
          <p className=" text-base md:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing a
          </p>
          <div
            className=" flex 
           flex-row mt-8 gap-2"
          >
            <TabButton
              handleTabChange={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              handleTabChange={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              handleTabChange={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              Certifications
            </TabButton>
          </div>
          <div className=" mt-8">
            {TabData.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
