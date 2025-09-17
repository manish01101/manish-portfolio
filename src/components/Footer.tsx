import { year } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-5 space-x-1 bg-gray-100 shadow-2xl  border-t border-gray-200">
      <span className="font-semibold">&copy; {year}</span>
      <span className="font-bold">Manish Kumar.</span>
      <span>All rights reserved.</span>
    </div>
  );
};

export default Footer;
