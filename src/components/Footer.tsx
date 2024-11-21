export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-8 text-gray-500">
      <p>© {currentYear} Magnates Empire. All rights reserved.</p>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-6 text-sm">
          <li><a href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
          <li><a href="/contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </footer>
  );
}