import Link from "next/link";
import { LaptopMinimal } from 'lucide-react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";


export default async function Navbar() {


  return (
    <nav className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="#"
          className="font-bold text-xl text-blue-600 tracking-tight"
        >
          <div className="flex items-center gap-2">
            <span className="font-sm font-extrabold text-blue-600">Portfolio</span>
            <LaptopMinimal size={18}/>
          </div>
        </Link>

        <div className="flex items-center gap-6">
              <a 
                href="https://github.com/PedroDavi-01" 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FaGithub size={18}/>
              </a>
              <a 
                href="https://www.linkedin.com/in/pedro-davi-10b923356/" 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={18}/>
              </a>
        </div>
      </div>
    </nav>
  );
}