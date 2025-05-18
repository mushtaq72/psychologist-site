import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Malik",
      text: "The sessions truly helped me regain confidence and peace. I felt heard, supported, and understood.",
      role: "Client – Personal Therapy",
      rating: 5,
    },
    {
      name: "Ali & Hira",
      text: "Couple therapy helped us reconnect. Our communication is stronger, and we understand each other better now.",
      role: "Clients – Couple Therapy",
      rating: 5,
    },
    {
      name: "The Khan Family",
      text: "Our family dynamics improved so much. Conflicts are now discussions. We are grateful for this support.",
      role: "Clients – Family Therapy",
      rating: 4,
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-indigo-900">What Clients Say</h2>
        <p className="text-indigo-700 mt-4 max-w-xl mx-auto">
          Hear from the people whose lives have been positively impacted by therapy.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map(({ name, text, role, rating }, i) => (
          <div
            key={i}
            className="bg-white border border-indigo-100 shadow-sm p-6 h-72 flex flex-col justify-between"
          >
            <p className="text-indigo-800 text-sm italic mb-4">"{text}"</p>
            
            {/* Star rating */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={index < rating ? "#facc15" : "none"}
                />
              ))}
            </div>

            <div>
              <p className="text-indigo-900 font-semibold">{name}</p>
              <p className="text-indigo-600 text-xs">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
