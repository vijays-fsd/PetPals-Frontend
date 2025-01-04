const Footer = () => {
    return (
      <footer className="bg-[#B71C1C] text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
            {/* About Us Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-md text-[#FFCDD2]">
                We are dedicated to helping pets find loving homes. Our shelter is committed to giving every animal the care they deserve.
              </p>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-md text-[#FFCDD2]">Email: info@petshelter.com</p>
              <p className="text-md text-[#FFCDD2]">Phone: +1 (123) 456-7890</p>
              <p className="text-md text-[#FFCDD2]">Location: 123 Pet Shelter St, City, Country</p>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex justify-center sm:justify-start gap-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFCDD2] hover:text-white transition-all"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFCDD2] hover:text-white transition-all"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFCDD2] hover:text-white transition-all"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-12 text-center text-sm text-[#FFCDD2]">
            <p>&copy; 2024 Pet Shelter. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  