"use client"
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="">
      {/* Header section */}

      {/* Header section */}
      <header className="text-center justify-center flex flex-col gap-y-3 md:gap-y-6 mb-20">
        <h1
          data-aos-delay="200"
          className="text-[#56382D] font-bold text-4xl  md:text-5xl md:leading-[55px] playfair-display-font"
        >
          Contact Me
        </h1>
        <div className="w-[156px] bg-[#56382D] mx-auto h-[2px] md:h-[3px] -mt-3"></div>
        <p
          data-aos-delay="400"
          className="sm:text-xl text-[#000000B2] text-sm font-normal "
        >
          Get in Touch: Expert Real Estate Assistance Just a Step Away
        </p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center gap-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 w-full rounded"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
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
          type="submit"
          className="bg-primary w-full text-white py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

