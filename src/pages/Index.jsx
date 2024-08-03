import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF4] text-black">
      {/* Header */}
      <header className="bg-[#FCFBF4] shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">YourLogo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-black hover:text-[#ff6666]">Home</a></li>
              <li><a href="#" className="text-black hover:text-[#ff6666]">About</a></li>
              <li><a href="#" className="text-black hover:text-[#ff6666]">Mission</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FCFBF4] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-black mb-6">Transforming Ideas into Reality</h2>
            <p className="text-xl text-black mb-8">We're passionate about innovation and committed to excellence.</p>
            <Button className="bg-[#ff6666] hover:bg-[#ff8080] text-[#FCFBF4] text-lg px-8 py-3">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-[#ff6666]">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-[#FCFBF4] mb-12">Who We Are</h3>
            <div className="bg-[#FCFBF4] p-8 rounded-lg shadow-lg border border-black max-w-3xl mx-auto">
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
            <div className="bg-black p-8 rounded-lg shadow-lg border border-[#ff6666] max-w-3xl mx-auto">
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
      </main>

      {/* Footer */}
      <footer className="bg-black text-[#FCFBF4] py-8 border-t border-[#ff6666]">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
