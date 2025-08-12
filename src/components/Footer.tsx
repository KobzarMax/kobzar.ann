export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white text-center text-gray-500 text-[10px] md:text-xs px-4 pt-[2.5vh] lg:pt-0 lg:pb-[4vh] pb-[2.5vh] leading-[1.6] md:space-y-2 space-y-1">
      <p className="text-center uppercase">Anna Kobzar - Fashion model</p>
      <p className="text-center">© {currentYear} All rights reserved.</p>
      {/* <p className="text-center"></p> */}
    </footer>
  );
}
