import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/navbar";
import { SearchProperties } from "@/components/home/search-properties";
import { FeaturedListings } from "@/components/home/featured-listings";
import { ValueEstimator } from "@/components/home/value-estimator";
import { Resources } from "@/components/home/resources";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchProperties />
      <FeaturedListings />
      <ValueEstimator />
      <Resources />
      <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  PremierBuild is a leading real estate developer committed to creating exceptional living spaces.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="properties" className="text-gray-400 hover:text-white">Properties</a></li>
                  <li><a href="contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>19-9-29/9g Lakshmi Puram</li>
                  <li>Tirupati, AP 517501</li>
                  <li>+91 7337409677</li>
                  <li>chaithanyagali2001@gmail.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="https://www.linkedin.com/in/gnana-chaithanya-gali-9ab529173/" className="text-gray-400 hover:text-white">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} PremierBuild. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </main>
  );
}