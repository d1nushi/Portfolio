"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex">
        <div className="mr-2">
          <img src="images/react.png" alt="React" />
          <p className="mt-2">React</p>
        </div>
        <div className="mr-2">
          <img src="images/figma.png" alt="Figma" />
          <p className="mt-2">Figma</p>
        </div>
        <div className="mr-2">
          <img src="images/html.png" alt="HTML" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="mr-2">
          <img src="images/css.png" alt="CSS" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="mr-2">
          <img src="images/js.png" alt="Javascript" />
          <p className="mt-2">Javascript</p>
        </div>
        <div className="mr-2">
          <img src="images/java.png" alt="Java" />
          <p className="mt-2">Java</p>
        </div>
        <div className="mr-2">
          <img src="images/python.png" alt="Python" />
          <p className="mt-2">Python</p>
        </div>
        <div className="mr-2">
          <img src="images/mysql.png" alt="MySQL" />
          <p className="mt-2">MySQL</p>
        </div>
       </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list pl-2">
        <li><b>B.Sc(Hons) in Computer Science &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-current</b></li>
        <li>Informatics Institute of Technology</li>
        <br/>
        <li><b>Foundation in Higher Education &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021</b></li>
        <li>Informatics Institute of Technology</li>
        <li>Grade-Distinction</li>
        <br/>
        <li><b>G.C.E.Ordinary Level &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2021</b></li>
        <li>Vidura College, Colombo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Python for Beginners - University of Moratuwa</li>
        <li>Java Intermediate - Sololearn</li>
        <li>Java Object-Oriented Programming - LinkedIn</li>
        <li>SQL Intermediate - Sololearn</li>
        <li>Programming Foundations: Algorithms - LinkedIn</li>
        <li>Programming Foundations: Data Structures - LinkedIn</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>English</li>
        <li>Sinhala</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/more.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a dedicated second-year undergraduate pursuing a degree in
            Computer Science at Informatics Institute of Technology, who is keen to learn new skills and technologies.
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
