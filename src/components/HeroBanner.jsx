const HeroBanner = () => {
    return (
      <div className="relative bg-[#B71C1C] text-white py-16 sm:py-20 lg:py-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632989073197-58b68fddcd02')" }}></div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Adopt a Pet Today
            </h1>
            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-[#FFCDD2]">
              Find your furry friend from our shelter
            </h2>
            <p className="mt-6 text-md sm:text-lg lg:text-xl text-[#FFCDD2] max-w-2xl mx-auto">
              We believe every pet deserves a loving home. Browse through our available pets and give them a second chance to find happiness!
            </p>
            
            {/* Action Button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-8 py-3 text-lg sm:text-xl font-medium text-[#B71C1C] bg-[#FFCDD2] rounded-lg shadow-md hover:bg-[#FF8A80] hover:text-white transition-all"
              >
                See Available Pets
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroBanner;
  