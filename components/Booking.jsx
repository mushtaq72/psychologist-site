export default function Booking() {
  return (
    <section className="bg-indigo-50 py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-900">Book a Session</h2>
        <p className="text-indigo-700 mt-4">
          Ready to take the next step? Send a message or request your first session below.
        </p>
      </div>

      <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6 border border-indigo-100">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-indigo-800 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-indigo-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-indigo-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-indigo-800 mb-1">Message</label>
          <textarea
            rows="5"
            placeholder="Tell me briefly what you're seeking help with..."
            className="w-full border border-indigo-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10 text-indigo-700">
        <p>Prefer direct contact?</p>
        <p className="font-medium">Email: therapy@example.com</p>
        <p className="font-medium">Phone: +92 300 1234567</p>
      </div>
    </section>
  );
}
