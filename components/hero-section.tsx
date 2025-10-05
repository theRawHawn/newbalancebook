"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const languages = [
    { text: "Your Personal Accountant", lang: "English" },
    { text: "आपके व्यक्तिगत लेखाकार", lang: "Hindi" },
    { text: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಲೆಕ್ಕಪತ್ರಗಾರ", lang: "Kannada" },
    { text: "तुमचे वैयक्तिक लेखापाल", lang: "Marathi" },
    { text: "మీ వ్యక్తిగత అకౌంటెంట్", lang: "Telugu" }
  ];

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) =>
        (prevIndex + 1) % languages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [languages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 min-h-[4rem] md:min-h-[6rem] flex items-center justify-center">
            <span
              key={currentLanguageIndex}
              className="animate-fade-in-up"
            >
              {languages[currentLanguageIndex].text}.
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-600 mb-8">
            Simplifying Accounting, Powering Growth.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We handle your GST, TDS, Payroll, and Full Accounting — so you focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-primary-600 text-white px-6 py-8 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
              size="lg"
            >
              Book Free Consultation
            </Button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
