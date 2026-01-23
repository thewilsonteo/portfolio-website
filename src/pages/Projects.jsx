// Projects.jsx
import TextFormatter from '../components/TextFormatter.jsx';

const web_mobile_apps = [
  { 
    title: "KRTC",
    tags: ["Angular", "Node.js", "MySQL"],
    type: "Web/Mobile", 
    desc: {
      intro: "A Singapore-based tuition and education centre operating numerous branches nationwide. The project consists of three components:",
      points: [
        "**CMS Website**: Used by HQ staff to oversee centre managers, who in turn manage their tutors and students.",
        "**Tutor App**: Allows tutors to manage their class timetables and take attendance.",
        "**Parent App**: Enables parents to view class schedules and attendance records of their children.",
      ],
    },
    link: "",
  },
  {   
    title: "CPA",
    tags: ["Angular", "Node.js", "MySQL"],
    type: "Web/Mobile",
    desc: [
      "**Customer App**: Books by CPA, a mobile bookkeeping application designed for customers to track their expenses. The app includes a feature allowing users to scan receipts using the phone camera, creating income and expenses.",
      "**CMS website**: A web portal for staff and administrators to manage and monitor customer records.",
    ],
    link: "",
  }
];

const websites = [
  {
    title: "Nan Hua Chang Seafood",
    tags: ["Wordpress", "Elementor"],
    desc: "A website project for a restaurant specialising traditional charcoal-grilled seafood.",
    link: "https://nanhuachang.sg/",
  },
  {
    title: "The Teochew Kitchenette",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for a Teochew fish soup restaurant.",
    link: "https://teochewkitchenette.com/",
  },
  {
    title: "stats.sg",
    tags: ["Wordpress", "Elementor", "PHP"],
    desc: "A website dedicated to displaying information visually through infographics.",
    link: "https://stats.sg/",
  },
  {
    title: "SG Drinking",
    tags: ["Wordpress", "Elementor", "PHP"],
    desc: "A database of bars and nightclubs in Singapore.",
    link: "https://sgdrinking.com/",
  },
  {
    title: "Alvion Trade",
    tags: ["Wordpress", "Elementor", "PHP"],
    desc: "A company specialising airline supply industry website displaying products and solutions",
    link: "https://alviontrade.com/",
  },
  {
    title: "QooMedia",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for a business consultancy firm in website design and development, search engine optimisation (SEO), and online advertising.",
    link: "https://qoo.media/",
  },
]
const projects = [
  { 
    title: "FinTech App",
    type: "Mobile", 
    desc: "A React Native investment tracker.",
    link: "",
  },
  { 
    title: "E-shop CMS",
    type: "Web",
    desc: "Full-stack dashboard with Next.js."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {web_mobile_apps.map((proj) => (
            <div key={proj.title} className="bg-white overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-gray-200"></div> {/* Placeholder for Image */}
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{proj.type}</span>
                <h3 className="text-2xl font-bold mt-2">{proj.title}</h3>

                  <TextFormatter content={proj.desc} />
                <p className="text-gray-600 mt-2">
                  {/* {proj.desc} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-3xl font-bold mb-12">Websites</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {websites.map((proj) => (
            <div key={proj.title} className="bg-white overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-gray-200"></div> {/* Placeholder for Image */}
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{proj.type}</span>
                <h3 className="text-2xl font-bold mt-2">{proj.title}</h3>

                  <TextFormatter content={proj.desc} />
                <p className="text-gray-600 mt-2">
                  {/* {proj.desc} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}