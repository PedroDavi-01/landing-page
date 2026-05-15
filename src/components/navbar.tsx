import Link from "next/link";
import { LaptopMinimal } from 'lucide-react';
import { FaGithub } from "react-icons/fa";


export default async function Navbar() {


  return (
    <nav className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="#"
          className="font-bold text-xl text-blue-600 tracking-tight"
        >
          <div className="flex items-center gap-2">
            <span>Landing Page </span>
            <LaptopMinimal size={18}/>
          </div>
        </Link>

        <div className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub size={18}/>
              </Link>
        </div>
      </div>
    </nav>
  );
}