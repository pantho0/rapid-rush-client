import React from "react";
import Container from "../../Layouts/Container/Container";

const Footer = () => {
  return (
    <div className="bg-[#3b0032]">
      <Container>
        <footer className="px-4 py-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
            <div className="col-span-3">
              <div className="flex-1 px-2 mx-2 font-rapid text-[#F7FF00] text-4xl font-semibold">
                Rapid<span className="text-[#fff]">Rush</span>
              </div>
              <p className="my-4 text-xs leading-normal text-white">
                Hosted in the EU 🇪🇺, with <strong>no user tracking</strong>{" "}
                scripts. Made all over the world by{" "}
                <a href="#" className="underline" target="_blank">
                  17 amazing people
                </a>
                .
              </p>
            </div>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-[#F7FF00] uppercase">
                Product
              </p>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Features
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Pricing
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Feedback
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                FAQs
              </a>
            </nav>
            <nav className="col-span-2 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-[#F7FF00] uppercase">
                Support
              </p>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Chat
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                {" "}
                Email Support{" "}
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                GDPR
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                {" "}
                Help{" "}
              </a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-[#F7FF00] uppercase">
                Resources
              </p>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Blog
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                {" "}
                Twitter{" "}
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Alternatives
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Why feature vote?
              </a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-xs font-semibold tracking-wider text-[#F7FF00] uppercase">
                Company
              </p>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                About Us
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Privacy
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Terms
              </a>
              <a
                className="flex mb-3 text-sm font-medium text-white transition md:mb-2 hover:text-purple-800"
                href="#"
              >
                Status
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
            <p className="mb-2 text-xs text-left text-white md:mb-0">
              Built by Product Managers, for Product Managers.
            </p>
            <p className="mb-0 text-xs text-left text-white md:mb-0">
              Copyright &copy; 2020 Hellonext
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
