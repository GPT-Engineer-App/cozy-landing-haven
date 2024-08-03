import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F47C7C] text-black">
      {/* Header */}
      <header className="bg-[#F47C7C] shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="DevelDeep Logo" className="h-10 w-auto mr-2" />
            <h1 className="text-2xl font-bold text-black">DevelDeep</h1>
          </div>
          <nav className="flex-grow">
            <ul className="flex justify-center space-x-8">
              <li><a href="#" className="text-black hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">Mission</a></li>
            </ul>
          </nav>
          <div className="w-[100px]"></div> {/* This empty div balances the layout */}
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FCFBF4] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-black mb-6">Transforming Ideas into Reality</h2>
            <p className="text-xl text-black mb-8">We're passionate about innovation and committed to excellence.</p>
            <Button className="bg-black hover:bg-gray-800 text-[#FCFBF4] text-lg px-8 py-3">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-[#FCFBF4] mb-12">Who We Are</h3>
            <div className="bg-[#FCFBF4] p-8 rounded-none shadow-lg border border-gray-300 max-w-3xl mx-auto">
              <p className="text-black text-lg leading-relaxed mb-4">
                We are a team of passionate innovators, dedicated to pushing the boundaries of technology and creativity. With years of experience and a commitment to excellence, we strive to deliver cutting-edge solutions that make a real difference in people's lives.
              </p>
              <p className="text-black text-lg leading-relaxed">
                Our diverse team brings together expertise from various fields, allowing us to approach challenges from multiple perspectives and create truly innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-[#FCFBF4]">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-black mb-12">Our Mission</h3>
            <div className="bg-black p-8 rounded-none shadow-lg border border-gray-300 max-w-3xl mx-auto">
              <p className="text-[#FCFBF4] text-lg leading-relaxed mb-4">
                Our mission is to empower businesses and individuals through innovative technology solutions. We are committed to:
              </p>
              <ul className="list-disc list-inside text-[#FCFBF4] text-lg leading-relaxed mb-4">
                <li>Driving digital transformation</li>
                <li>Fostering sustainable growth</li>
                <li>Enhancing user experiences</li>
                <li>Promoting technological accessibility</li>
              </ul>
              <p className="text-[#FCFBF4] text-lg leading-relaxed">
                By focusing on these core principles, we aim to create a positive impact on society and shape a better future for all.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 bg-black text-[#FCFBF4]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
            <p className="text-lg mb-4">
              Are you a business looking to innovate or an individual with a groundbreaking idea?
            </p>
            <p className="text-lg mb-6">
              We're here to turn your vision into reality. Let's create something amazing together!
            </p>
            <p className="text-xl font-semibold">
              Reach out to us at: <a href="mailto:contact@yourcompany.com" className="underline hover:text-gray-300">contact@yourcompany.com</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-[#FCFBF4] py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
