import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCallback } from "react";

const Index = () => {
  const handleSmoothScroll = useCallback((e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#F47C7C] text-black">
      {/* Header */}
      <header className="bg-[#F47C7C] shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="DevelDeep Logo" className="h-8 w-auto mr-2" />
            <h1 className="text-xl font-bold text-black">DevelDeep</h1>
          </div>
          <nav className="flex-grow">
            <ul className="flex justify-center space-x-6">
              <li><a href="#" className="text-sm text-black hover:text-gray-800">Home</a></li>
              <li><a href="#who-we-are" className="text-sm text-black hover:text-gray-800" onClick={(e) => handleSmoothScroll(e, 'who-we-are')}>Who We Are</a></li>
              <li><a href="#mission" className="text-sm text-black hover:text-gray-800" onClick={(e) => handleSmoothScroll(e, 'mission')}>Mission</a></li>
            </ul>
          </nav>
          <div className="w-[100px]"></div> {/* This empty div balances the layout */}
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FCFBF4] py-24">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Transforming Ideas into Reality</h2>
            <p className="text-lg text-black mb-6">We're passionate about innovation and committed to excellence.</p>
            <Button className="bg-black hover:bg-gray-800 text-[#FCFBF4] text-base px-6 py-2">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="who-we-are" className="py-32 bg-black">
          <div className="container mx-auto px-8">
            <h3 className="text-4xl font-bold text-center text-[#FCFBF4] mb-16">Who We Are</h3>
            <div className="bg-[#FCFBF4] p-12 rounded-none shadow-lg border border-gray-300 max-w-4xl mx-auto">
              <p className="text-black text-base leading-relaxed mb-4">
                We are a team of passionate innovators, dedicated to pushing the boundaries of technology and creativity. With years of experience and a commitment to excellence, we strive to deliver cutting-edge solutions that make a real difference in people's lives.
              </p>
              <p className="text-black text-base leading-relaxed mb-4">
                Our diverse team brings together expertise from various fields, allowing us to approach challenges from multiple perspectives and create truly innovative solutions.
              </p>
              <p className="text-black text-base leading-relaxed">
                At the heart of our company is a culture of continuous learning and adaptation. We believe in staying ahead of the curve, constantly exploring new technologies and methodologies to ensure we're always at the forefront of innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-32 bg-[#FCFBF4]">
          <div className="container mx-auto px-8">
            <h3 className="text-4xl font-bold text-center text-black mb-16">Our Mission</h3>
            <div className="bg-black p-12 rounded-none shadow-lg border border-gray-300 max-w-4xl mx-auto">
              <p className="text-[#FCFBF4] text-base leading-relaxed mb-4">
                Our mission is to empower businesses and individuals through innovative technology solutions. We are committed to:
              </p>
              <ul className="list-disc list-inside text-[#FCFBF4] text-base leading-relaxed mb-4">
                <li>Driving digital transformation across industries</li>
                <li>Fostering sustainable growth and environmental responsibility</li>
                <li>Enhancing user experiences through intuitive design and functionality</li>
                <li>Promoting technological accessibility to bridge digital divides</li>
                <li>Cultivating a culture of innovation and continuous improvement</li>
              </ul>
              <p className="text-[#FCFBF4] text-base leading-relaxed mb-4">
                By focusing on these core principles, we aim to create a positive impact on society and shape a better future for all. We believe that technology, when applied thoughtfully and ethically, has the power to solve complex problems and improve lives on a global scale.
              </p>
              <p className="text-[#FCFBF4] text-base leading-relaxed">
                Our commitment extends beyond just creating products; we strive to be a force for positive change in the tech industry and the wider world. Through partnerships, education initiatives, and community engagement, we're working to build a more inclusive and innovative future.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 bg-black text-[#FCFBF4]">
          <div className="container mx-auto px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-base mb-3">
              Are you a business looking to innovate or an individual with a groundbreaking idea?
            </p>
            <p className="text-base mb-4">
              We're here to turn your vision into reality. Let's create something amazing together!
            </p>
            <p className="text-lg font-semibold">
              Reach out to us at: <a href="mailto:contact@yourcompany.com" className="underline hover:text-gray-300">contact@yourcompany.com</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-[#FCFBF4] py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
