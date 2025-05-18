import { Users, User, HeartHandshake } from "lucide-react"; // Icons for each service

export default function Services() {
  const services = [
    {
      title: "Personal Therapy",
      description:
        "One-on-one sessions to help you manage stress, anxiety, and personal growth.",
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      title: "Couple Therapy",
      description:
        "Strengthen your relationship and improve communication with your partner.",
      icon: <HeartHandshake className="w-6 h-6 text-white" />,
    },
    {
      title: "Family Therapy",
      description:
        "Resolve conflicts and build a supportive environment for your family.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="bg-indigo-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-indigo-900">My Services</h2>
        <p className="text-indigo-700 mt-4 max-w-xl mx-auto">
          Choose the type of therapy that suits your needs. I'm here to help individuals, couples, and families.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {services.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white border border-indigo-100 shadow-sm p-6 w-full h-72 flex flex-col justify-start items-start hover:shadow-md transition"
          >
            {/* Icon circle */}
            <div className="bg-indigo-600 rounded-full p-3 mb-4">
              {icon}
            </div>

            <h3 className="text-2xl font-semibold text-indigo-900 mb-2">{title}</h3>
            <p className="text-indigo-700 text-sm mb-auto">{description}</p>

            <button className="mt-6 text-indigo-600 hover:underline text-sm">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
