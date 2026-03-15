'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
              alt="Modern Dental Clinic"
              className="rounded-3xl shadow-lg w-full h-64 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" 
              alt="Dentist attending patient" 
              className="rounded-3xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block text-teal-600 font-semibold tracking-wider uppercase text-sm">
              About Odonto Perse
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Technology and humanization to care for you.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded with the mission to transform the dental experience, Odonto Perse combines a welcoming, spa-like environment with the most advanced digital technology.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We believe each smile is unique. That's why we develop personalized protocols that ensure not only aesthetics but also health and long-term chewing function.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "State-of-the-art equipment (Digital X-Ray, 3D Scanner)",
                "Climate-controlled environment and hospital-grade sterilization",
                "Multidisciplinary specialist team",
                "Punctual and respectful service"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-teal-500 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;