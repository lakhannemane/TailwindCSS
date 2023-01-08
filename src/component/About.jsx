import React from "react";

const About = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto ">
        <div className="text-center">
          <h2 className="text-5xl  font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl py-6  text-grey-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            excepturi ipsum quisquam vitae, reprehenderit nesciunt? Laboriosam
            qui quos quam sed modi amet illum mollitia recusandae, adipisci
            incidunt hic nobis quas?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 text-center px-2">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-500">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">24/7</p>
            <p className="text-gray-500">Delivary</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p className="text-gray-500">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
