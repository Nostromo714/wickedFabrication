
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 pt-4 pb-12">
      <div className="container mx-auto px-4  text-center">
        <p>&copy; {new Date().getFullYear()} Wicked Fabrication. All rights reserved.</p>
        <p>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;