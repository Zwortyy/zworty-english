import React from 'react';
import { motion } from 'framer-motion';
import { Info, Building, HardHat, Settings, Target, Eye, CheckCircle } from 'lucide-react';

const SectionTitle = ({ icon, title }) => (
  <motion.div 
    className="flex items-center space-x-3 mb-6"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <span className="text-red-600">{icon}</span>
    <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
  </motion.div>
);

const ListItem = ({ children }) => (
  <motion.li 
    className="flex items-start space-x-2 mb-2 text-gray-600"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4 }}
  >
    <CheckCircle size={20} className="text-red-500 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </motion.li>
);

const AboutPage = () => {
  const constructionServices = [
    "Aluminum Joinery", "Aluminum Railing", "Facade Cladding with Aluminum Composite Panel",
    "Aluminum Curtain Wall Cladding", "Aluminum Silicone Curtain Wall Cladding",
    "Aluminum Sliding Glass Systems", "Glass Balcony", "Guillotine Glass Balcony", "Movable Handrail",
    "Pergola Systems", "Sectional Shutters", "Automatic - Sensor Door Systems", "Shower Cabin"
  ];

  const productionTechnologies = [
    "Aluminum double head CNC cutting machine", "Aluminum single head CNC cutting machine",
    "Aluminum corner press machine", "Aluminum milling machines", "Aluminum notching machine",
    "4-axis milling machine", "Powder coating processing machines", "Laser welding machine"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-red-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mb-12">
            <SectionTitle icon={<Info size={36} />} title="About Us" />
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Thanks to the importance given to the quality of materials used in production and our application solutions during the assembly phase, all products applied within spaces turn into valuable investments in the future. Our product development department produces solutions to meet our customers' demands and offers the comfort of the future with an emphasis on elegant designs, durability, and ease of use.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img  alt="High-quality aluminum profiles and production details" className="rounded-lg shadow-md w-full h-auto object-cover max-h-80" src="https://images.unsplash.com/photo-1665722651750-2b11a3de10ce" />
              </div>
              <div>
                <img  alt="Aluminum application in modern architectural design" className="rounded-lg shadow-md w-full h-auto object-cover max-h-80" src="https://images.unsplash.com/photo-1608539733354-2b217b4d9da7" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 mb-12">
            <SectionTitle icon={<Building size={36} />} title="Construction Services" />
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-2">
                {constructionServices.slice(0, Math.ceil(constructionServices.length / 2)).map(service => (
                  <ListItem key={service}>{service}</ListItem>
                ))}
              </ul>
              <ul className="space-y-2">
                {constructionServices.slice(Math.ceil(constructionServices.length / 2)).map(service => (
                  <ListItem key={service}>{service}</ListItem>
                ))}
              </ul>
            </div>
            <img  alt="Collage of various construction services" className="mt-8 rounded-lg shadow-md w-full h-auto object-cover max-h-96" src="https://images.unsplash.com/photo-1588943853291-87380027de71" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
              <SectionTitle icon={<HardHat size={36} />} title="Glass Consultancy" />
              <ul className="space-y-3 mb-6">
                <ListItem>We meet one-on-one with decision-makers throughout all processes up to the glass selection stage in your projects and offer solution partnerships for their problems.</ListItem>
                <ListItem>We perform thermal breakage, performance, and static calculations for your projects.</ListItem>
                <ListItem>We present our glass specification recommendations based on our calculations.</ListItem>
                <ListItem>We offer the right glass solutions according to the needs of your projects.</ListItem>
                <ListItem>We provide sample and mock-up support requested for your projects.</ListItem>
              </ul>
              <img  alt="Glass consultancy and project planning" className="rounded-lg shadow-md w-full h-auto object-cover max-h-72" src="https://images.unsplash.com/photo-1699421073679-d95e9c1611d7" />
            </div>

            <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
              <SectionTitle icon={<Settings size={36} />} title="Production Technologies" />
              <ul className="space-y-2 mb-6">
                {productionTechnologies.map(tech => (
                  <ListItem key={tech}>{tech}</ListItem>
                ))}
              </ul>
              <img  alt="Modern aluminum production machinery" className="rounded-lg shadow-md w-full h-auto object-cover max-h-72" src="https://images.unsplash.com/photo-1696347751435-9fa98fa8532c" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
              <SectionTitle icon={<Target size={36} />} title="Our Mission" />
              <motion.p 
                className="text-gray-700 mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                To continuously improve our product and service quality to meet customer demands and expectations at the highest level, and to establish solution-oriented communication with our consumers through strong interaction. Our company focuses on providing services with the newest and highest applicable technology and methods in its fields of operation.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                To meet or exceed customer expectations. To provide our customers with maximum quality product comfort and to offer trouble-free solutions that will add value to their living spaces for many years.
              </motion.p>
              <img  alt="A target and arrow representing the mission" className="mt-6 rounded-lg shadow-md w-full h-auto object-cover max-h-60" src="https://images.unsplash.com/photo-1699064831766-3016cf448cb6" />
            </div>

            <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
               <SectionTitle icon={<Eye size={36} />} title="Our Vision" />
              <motion.p 
                className="text-gray-700 mb-4 leading-relaxed"
                 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                While creating differences to achieve lasting superiority, we work to build the best structures for our customers by offering corporate-level solutions in small, medium, and large-scale projects, in the manufacturing sector, and with professional assembly services.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                 initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                To keep user and employee satisfaction at the highest level in the construction sector, both domestically and with superior technology and different productions, and to add brand value to the sector.
              </motion.p>
              <img  alt="Binoculars looking towards the future, representing vision" className="mt-6 rounded-lg shadow-md w-full h-auto object-cover max-h-60" src="https://images.unsplash.com/photo-1559780529-cd8d39cd23c1" />
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;