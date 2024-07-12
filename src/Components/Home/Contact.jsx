import React from 'react'
import ContactForm from './ContactForm'
import TestimonialSlider from './TestimonialSlider'

export default function Contact() {
  return (
    <div className="max-w-[1320px] overflow-hidden mx-auto py-32 lg:py-[200px] px-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-16 border border-x-0 py-[18px]">
        <ContactForm />
        <TestimonialSlider />
      </div>
    </div>
  );
}
