import Link from "next/link";
import { LaptopMinimal, Download } from 'lucide-react'; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default async function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="#"
          className="font-bold text-xl text-blue-600 tracking-tight"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold text-blue-600">Portfólio</span>
            <LaptopMinimal size={18}/>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/PedroDavi-01" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <FaGithub size={18}/>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/pedro-davi-10b923356/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={18}/>
          </a>

          <span className="h-4 w-px bg-slate-200" />

          <a 
            href="/curriculo.pdf"
            download="Pedro_Davi_Curriculo.pdf" 
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm"
          >
            <span>Currículo</span>
            <Download size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}