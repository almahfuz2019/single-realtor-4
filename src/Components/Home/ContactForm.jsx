"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20 lg:pr-0">
      {/* Header section */}
      <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
        <h1
          data-aos="fade-up"
          
          className="text-[#56382D] font-bold text-4xl md:text-5xl md:leading-[55px] font-georgia"
        >
          Contact Me
        </h1>
        <div
          data-aos="fade-up"
          className="w-[156px] bg-[#56382D] mx-auto h-[2px] md:h-[3px] -mt-1"
        ></div>
        <p
          data-aos="fade-up"
          
          className="sm:text-xl text-[#000000B2] text-sm font-normal"
        >
          Get in Touch: Expert Real Estate Assistance Just a Step Away
        </p>
      </header>

      {/* Form section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 font-montserrat"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Your Name"
              className="border p-2 w-full rounded"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex-1">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Phone"
              className="border p-2 w-full rounded"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div>
          <input
            data-aos="fade-up"
            type="email"
            placeholder="Type Your Email ..."
            className="border p-2 w-full rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            data-aos="fade-up"
            rows="6"
            placeholder="Share Your Thoughts ..."
            className="border p-2 w-full rounded"
            {...register("thoughts", { required: "Thoughts are required" })}
          />
          {errors.thoughts && (
            <p className="text-red-500">{errors.thoughts.message}</p>
          )}
        </div>
        {isSubmitSuccessful && (
          <p className="text-green-500">Form submitted successfully!</p>
        )}
        <button
          data-aos="fade-up"
          type="submit"
          className="bg-primary w-full text-white py-2 px-4 rounded   hover:border hover:border-secondary transition duration-300 ease-in-out transform hover:bg-red-600 hover:scale-105"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
