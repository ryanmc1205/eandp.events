
import React from "react";

const GallerySection = () => {
  const galleryImages = [
    "/lovable-uploads/RAGartistry-1629-3_cropped.webp",
    "/lovable-uploads/RAGartistry-9023-2_cropped.webp",
    "/lovable-uploads/suparnasaurabh12_cropped.webp",
    "/lovable-uploads/Shivani_Sagar-3729.webp", 
    "/lovable-uploads/keriadam-w0199-x3.webp",
    "/lovable-uploads/fenglongphoto-7146-preview-jpeg.webp"
  ];

  return (
    <section id="gallery" className="section-container bg-charcoal text-white py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-white text-center">Now, See for Yourself.</h2>
      <p className="text-lg mb-12 text-center">
       <div className="text-center text-white space-y-4 text-lg md:text-xl">
  <p>Real moments. Real memories.</p>
</div>


        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-md aspect-square hover:shadow-lg transition-shadow cursor-pointer group relative"
            >
              <img loading="lazy"
                src={image}
                alt={`Wedding event photo ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
