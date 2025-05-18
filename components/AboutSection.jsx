import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#FAF9F8] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Background block */}
          <div className="absolute top-6 left-6 w-72 h-96 bg-[#CDB9B1] rounded-xl -z-10"></div>

          {/* Foreground image */}
          <Image
            src="/about me.avif" // Add this to public/images/
            alt="Anna Martin"
            width={400}
            height={500}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-indigo-900 mb-4">About me</h2>
          <p className="text-gray-700 mb-4">
            My name is Anna Martin, I am a practicing psychologist and psychotherapist. I work with children, adults, families.
          </p>
          <p className="text-gray-700 mb-4">
            There are alternative methods for coping with things like stress, depression, memory issues and age-associated issues like Alzheimer’s and dementia.
          </p>
          <p className="text-gray-700">
            Effective mental health treatment doesn’t have to mean prescription medications and hours of therapy.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { count: "10+", label: "years of experience" },
          { count: "20+", label: "advanced courses" },
          { count: "300+", label: "satisfied customers" },
          { count: "100+", label: "happy families" }
        ].map((item, idx) => (
          <div key={idx}>
            <p className="text-2xl font-bold text-indigo-900">{item.count}</p>
            <p className="text-gray-600 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
