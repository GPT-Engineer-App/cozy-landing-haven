import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="bg-black shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">YourLogo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-white hover:text-orange-500">Features</a></li>
              <li><a href="#" className="text-white hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Welcome to Our Amazing Product</h2>
            <p className="text-xl text-gray-300 mb-8">Discover how we can transform your business today.</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-white mb-12">Our Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Easy to use interface",
                "Powerful analytics",
                "24/7 customer support"
              ].map((feature, index) => (
                <div key={index} className="bg-black p-6 rounded-lg shadow-md border border-orange-500">
                  <CheckCircle className="h-12 w-12 text-orange-500 mb-4 mx-auto" />
                  <h4 className="text-xl font-semibold text-white mb-2">{feature}</h4>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-orange-500">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
