// components/HeroSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-serif font-bold text-indigo-900 leading-tight mb-6">
            Your <br /> Psychologist
          </h1>

          {/* Image grid */}
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <Image
                src="/pic3.avif" // Add this image in public/images/
                alt="Writing notes"
                width={500}
                height={500}
                className="rounded-xl shadow-sm object-cover w-full h-auto"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/hand.jpg" // Add this image in public/images/
                alt="Hands holding"
                width={500}
                height={500}
                className="rounded-xl shadow-sm object-cover w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            I am Anna Martin, who makes people and their families happy.
            You deserve a perfect life! I can change your life right now!
          </p>

          <Link
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition"
          >
            Contact me
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/pictop.avif" // Add this image in public/images/
            alt="Psychologist portrait"
            width={600}
            height={700}
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
