import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Image,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import background from "../assets/background.jpg";
import showcase from "../assets/showcase.jpg";

const Homepage = () => {
  return (
    <div>
      <div className="absolute  text-white right-4 p-4">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <img className="object-fill h-full w-full" src={showcase} />
      </div>

      <div className="absolute top-20  md:top-2/5 sm:top-1/4 left-1/2  text-white text-2xl">
        <Heading as="h1" size="4xl">
          Welcome To Code Prep
        </Heading>
      </div>
    </div>
  );
};

export default Homepage;
