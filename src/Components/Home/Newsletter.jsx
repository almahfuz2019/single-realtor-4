"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Newsletter() {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setShowSuccess(true);
    reset();

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section className="overflow-hidden mx-auto">
      <div
        className="relative bg-fixed bg-cover bg-center py-32 lg:py-[168px] px-4"
        style={{
          backgroundImage: `url(${"/Images/Contact/newsletter_BG.png"})`,
        }} // Background image path
        data-aos="fade-up"
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main container for the content */}
        <div className="relative container mx-auto text-center text-white">
          <h2
            data-aos="fade-up"
            className="text-4xl font-georgia md:text-5xl font-bold"
          >
            Browse rentals by neighborhood, <br className="hidden md:block" />
            <span className="text-primary">Never miss a new listing.</span>
          </h2>
          <p
            data-aos="fade-up"
            className="mb-8 mt-6 text-[#FFEAEACC] text-xl md:text-2xl"
          >
            Subscribe and stay tuned on market trends, new listing or community
            info
          </p>

          {/* Subscription form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto mt-10 font-montserrat"
          >
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input w-full mb-4 md:mb-0 bg-transparent text-white placeholder-gray-300 border border-white focus:border-primary transition-all duration-300 ease-in-out"
              />

              <input
                data-aos="fade-up"
                type="email"
                placeholder="Type your email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="input w-full mb-4 md:mb-0 bg-transparent text-white placeholder-gray-300 border border-white focus:border-primary transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="flex gap-10 justify-between mt-2">
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
              {errors.email && (
                <span className="text-red-500">Valid email is required</span>
              )}
            </div>
            {showSuccess && (
              <div className="text-green-500 mb-2 mt-2 transition-transform duration-300 ease-in-out">
                Subscription successful!
              </div>
            )}
            <button
              data-aos="fade-up"
              type="submit"
              className="btn btn-primary w-full mt-6 text-xl font-montserrat font-normal transition duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
