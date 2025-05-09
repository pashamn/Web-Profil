"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
        {
            title : "Water leveling sensor",
            description : "This water leveling sensor with ESP32 ",
            fullDescription: "This project is a simple yet effective automation system to monitor and control the water level using ESP32 and ultrasonic sensors. When the water level is below the minimum limit, the system will automatically turn on the tap to replenish water, and turn it off again when the water reaches the upper limit. The entire process can be monitored and controlled directly through the Blynk app on a smartphone, so users can easily manage water usage remotely. The project is designed for practical needs in homes, farms, or small irrigation systems with an IoT-based approach.",
            image : "/images/2.jpg",
        },
        {
            title : "Pakaibaju application",
            description : "This is an application project using delphi7",
            fullDescription: "PakaiBaju is a desktop application developed using Delphi 7, specifically designed to help clothing store operations practically and efficiently. This application facilitates the process of recording product data, sales transactions, stock items, and daily to monthly sales reports. With a simple and easy-to-use interface, PakaiBaju is perfect for small to medium-sized clothing stores that want to start going digital without a complicated system.",
            image : "/images/2.png",
        },
        {
            title : "Apotekin website",
            description : "This is a website project using laravel",
            fullDescription: "Apotekin is an online pharmacy website built using the Laravel framework. This website is designed to make it easier for users to search, order, and buy medicines practically without having to come directly to the pharmacy.",
            image : "/images/3.png",
        }
    ];

  return (
    <section className="bg-gray-50/50 dark:bg-zinc-950/50 py-10 px-4 sm:px-6 md:px-20 rounded-[40px] sm:rounded-xl md:rounded-[20px] lg:rounded-[40px] mx-4 sm:mx-8 md:mx-30">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-md overflow-hidden bg-gray-50 dark:bg-zinc-950 hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
              <button 
                onClick={() => setSelectedProject(project)} 
                className="relative inline-flex items-center justify-center p-0.5 mb-1 me-1 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-700 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Detail
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-3 right-4  text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
            <p className="text-sm">{selectedProject.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
}
