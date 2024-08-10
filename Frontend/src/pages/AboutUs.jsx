import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const AboutUS = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-full mx-auto dark:bg-slate-900">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 dark:text-white">
          Welcome to <span className="text-pink-600">Book Haven</span>!
        </h1>
        
        <div className="mb-8">
          <img 
            src="https://img.freepik.com/free-photo/pretty-young-girl-library_23-2148727838.jpg?t=st=1723042670~exp=1723046270~hmac=9f5a0153c1503e2e8ed396fcc14ac6172c40cdcfb21f7e27df5e4bbc6bcc50af&w=740" 
            alt="Cozy bookstore interior with a young girl reading" 
            className="w-full h-[400px] object-cover rounded-lg shadow-md" 
          />
        </div>
        
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-500">
          At <span className="text-pink-600">Book Haven</span>, we’re passionate about bringing you the best in literature, from timeless classics to contemporary bestsellers. Our bookstore was founded on the principle that great books have the power to transform lives, and we’re committed to providing a welcoming space for book lovers of all kinds.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-500">
          Our mission is to foster a love of reading and provide a diverse selection of books that cater to all interests and ages. We believe in the joy of discovering new stories, ideas, and perspectives, and we strive to make every visit to our store a memorable experience.
        </p>

        <div className="mb-8">
          <img 
            src="https://img.freepik.com/free-photo/fantasy-style-scene-international-day-education_23-2151040320.jpg?t=st=1723043188~exp=1723046788~hmac=a2e4a5331baacc00c416116da032a55127c8221e8bd5e87f39ee11a73a27645a&w=740" 
            alt="Books displayed in an inviting store environment" 
            className="w-full h-[600px] object-cover rounded-lg shadow-md" 
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">Our Story</h2>
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-500">
          Founded in 2022, <span className="text-pink-600">Book Haven</span> began as a small local shop with a big vision. Over the years, we’ve grown into a beloved community hub where readers and authors come together. Our team of knowledgeable staff is here to help you find your next great read and to support local authors and publishers.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">What We Offer</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6 dark:text-gray-500">
          <li>A carefully curated selection of books across various genres</li>
          <li>Regular author events, book signings, and literary discussions</li>
          <li>A cozy reading nook and café for a relaxed browsing experience</li>
          <li>Personalized recommendations and special orders</li>
        </ul>

        <div className="mb-8">
          <img 
            src="https://img.freepik.com/premium-photo/woman-thinking-about-education_780608-871.jpg?w=740" 
            className="w-full h-[500px] object-cover rounded-lg shadow-md" 
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-500">
          We’d love to hear from you! Whether you have questions about our books, events, or just want to chat about your latest read, feel free to reach out to us at <Link to="./contactus" className="mb-0"><ContactUs/></Link>.
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
