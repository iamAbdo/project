import heroBackground from "../assets/images/heroBackground.png";
import me from "../assets/images/me.png";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${heroBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 " /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16">
          {/* Text Content */}
          <div className="text-secondary">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-epilogue font-bold mb-6 leading-tight">
              Hi, I'm Nafa Abdellah Yahia
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8">
              A 23-year-old programmer and this is my Portfolio.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              I'm a computer science enthusiast from Algiers, Algeria. Passionate about technology, 
              discover my skills, projects, team collaborations, and ways to contact me.
            </p>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-block bg-primary text-white font-epilogue font-bold px-8 py-3 rounded-lg 
                          hover:bg-opacity-90 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={me}
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;