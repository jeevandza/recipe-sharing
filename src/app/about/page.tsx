import LayoutWrapper from "../_components/layoutWrapper";

export default function About() {
  return (
    <LayoutWrapper>
       <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hungry Hunters</h1>
        <p className="text-gray-700 mb-8">
          At Hungry Hunters, we are not just a platform; we are a culinary journey. Our love for
          food and passion for cooking are the driving forces behind everything we do. Join us on
          this exciting adventure as we explore the world of flavors, recipes, and creativity.
        </p>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 ">
            <img
              src="https://source.unsplash.com/900x600/?food" // Use high-quality food images
              alt="Hungry Hunters Kitchen"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 ml-4">
            <p className="text-gray-700 mb-4">
              Our team of culinary experts is dedicated to providing you with the best recipes,
              cooking tips, and meal ideas. Whether you are a seasoned chef or a kitchen novice,
              Hungry Hunters is your go-to destination for all things delicious.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that cooking is an art form, and every meal tells a unique story. Explore
              our collection of recipes, discover new flavors, and embark on a culinary adventure
              with us.
            </p>
            <p className="text-gray-700 mb-4">
              Here at Hungry Hunters, we value the joy of sharing meals with loved ones. Our
              community is a gathering place for foodies from all walks of life. Share your cooking
              experiences, exchange ideas, and connect with a community that shares your passion for
              great food.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Passion for Food: We are fueled by a genuine love for all things delicious.</li>
            <li>Creativity in Cooking: Explore your creativity in the kitchen with our diverse recipes.</li>
            <li>Community of Foodies: Join a community of passionate food enthusiasts.</li>
            <li>Quality Ingredients: We believe in using the finest ingredients to create exceptional meals.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Hungry Hunters started as a small project born out of our love for bringing people
            together through food. What began as a simple idea has now evolved into a vibrant
            community of food enthusiasts, chefs, and home cooks alike. Our journey is shaped by
            the shared experiences, stories, and recipes of our amazing community.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Explore Deliciousness</h2>
          <p className="text-gray-700">
            Dive into a world of mouthwatering dishes, delightful desserts, and savory delights. Our
            platform is a treasure trove of culinary wonders waiting to be discovered. Browse through
            categories, try out new cuisines, and make every meal an unforgettable experience.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions, suggestions, or just want to say hello? Reach out to us at{' '}
            <span className="text-blue-500">info@hungryhunters.com</span>.
          </p>
        </div>
      </div>
    </div>
    </LayoutWrapper>
  );
}




