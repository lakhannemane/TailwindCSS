import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="uppercase font-bold">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        <div>
          <h6 className="uppercase font-bold">Support</h6>
          <ul>
            <li className="py-1">Pricing </li>
            <li className="py-1">Documetation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="uppercase font-bold">Company</h6>
          <ul>
            <li className="py-1">About </li>
            <li className="py-1">Blog</li>
            <li className="py-1">Job</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="uppercase font-bold">Legel</h6>
          <ul>
            <li className="py-1">Chain</li>
            <li className="py-1">Private</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Terms</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <h6 className="uppercase font-bold">Subscribe to our newsletter</h6>
          <p className="py-4 font-gray-300">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <form action="" className="flex py-3 flex-col sm:flex-row">
            <input type="email" className="w-full mr-4  mb-2 rounded py-2 " />
            <button className="py-2 px-3">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto flex sm:flex-row py-3 items-center justify-between ">
        <p className="text-gray-400">2023 workflow, LLC. All rights reserved</p>
        <div className="flex justify-between  sm:max-w-[400px] text-2xl ">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
