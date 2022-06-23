import React from "react";

import csharp from "../assets/c-sharp.png";
import cSharp from "../assets/c#.png";
import cplus from "../assets/c++.png";
import css from "../assets/CSS.png";
import dsa from "../assets/DSA.png";
import general from "../assets/general.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import node2 from "../assets/node (2).png";
import node from "../assets/node.png";
import oop from "../assets/oop.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import { Image, Text } from "@chakra-ui/react";

const QuizBox = () => {
  return (
    <>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>React.JS</Text>
        <Image m={0} p={0} src={react} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer ">
        <Text pt={30}>Javascript</Text>
        <Image m={0} p={0} src={javascript} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer ">
        <Text pt={30}>Node.JS</Text>
        <Image m={0} p={0} src={node} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer ">
        <Text pt={30}>C-Sharp</Text>
        <Image m={0} p={0} src={cSharp} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>Python</Text>
        <Image m={0} p={0} src={python} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>HTML</Text>
        <Image m={0} p={0} src={html} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>CSS</Text>
        <Image m={0} p={0} src={css} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>C++</Text>
        <Image m={0} p={0} src={cplus} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>Mongo Db</Text>
        <Image m={0} p={0} src={mongodb} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>OOP</Text>
        <Image m={0} p={0} src={html} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>General</Text>
        <Image m={0} p={0} src={general} alt="react" />
      </div>
      <div className="bg-white rounded-md shadow-md hover cursor-pointer">
        <Text pt={30}>DSA</Text>
        <Image m={0} p={0} src={dsa} alt="react" />
      </div>
    </>
  );
};

export default QuizBox;
