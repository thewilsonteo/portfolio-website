// Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <form className="grid grid-cols-1 gap-4 px-6">
          <input type="text" placeholder="Name" className="p-4 rounded bg-gray-800 border-none" />
          <input type="email" placeholder="Email" className="p-4 rounded bg-gray-800 border-none" />
          <textarea placeholder="Message" className="p-4 rounded bg-gray-800 h-32"></textarea>
          <button className="bg-blue-600 py-3 rounded font-bold hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}