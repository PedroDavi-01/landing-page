
import { Code2, Layout, Database, GitBranch, CloudLightning } from 'lucide-react'; 


export default async function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">

      <div className="flex flex-col items-center justify-center pt-20 px-4 text-center w-full">
        <main className="max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl py-2 font-extrabold text-slate-900 tracking-tight">
            Portfólio<br />
            <span className="text-blue-600">Profissional.</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
            Meus projetos, habilidades e experiências em um só lugar. Descubra como posso contribuir para o seu sucesso profissional.
          </p>
        </main>

        {/*  Seção de Skills  */}
        <section className="mt-24 max-w-5xl w-full text-left px-2">
          <div className="flex items-center gap-2 mb-8">
            <span className="h-px w-8 bg-blue-600"></span>
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase">Core Stack & Techs</h2>
          </div>

          {/* Grid das stacks, etc */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            
            {/* React - Card Grande destacado */}
            <div className="md:col-span-3 bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-md p-6 rounded-2xl border border-cyan-500/20 shadow-sm hover:scale-[1.02] hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex justify-between items-start">
                <Code2 className="text-cyan-500 group-hover:rotate-12 transition-transform duration-300" size={32} />
                <span className="text-[10px] font-bold text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded-full">Frontend</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mt-4">React.js</h3>
              <p className="text-slate-500 text-xs mt-1">Desenvolvimento de SPAs dinâmicas, arquitetura de componentes reaproveitáveis e gerenciamento eficiente de estados.</p>
            </div>

            {/* Next.js - Card Grande destacado */}
            <div className="md:col-span-3 bg-gradient-to-br from-slate-900/10 to-transparent backdrop-blur-md p-6 rounded-2xl border border-slate-900/20 shadow-sm hover:scale-[1.02] hover:border-slate-900/50 transition-all duration-300 group">
              <div className="flex justify-between items-start">
                <Layout className="text-slate-900 group-hover:scale-110 transition-transform duration-300" size={32} />
                <span className="text-[10px] font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded-full">Fullstack</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mt-4">Next.js</h3>
              <p className="text-slate-500 text-xs mt-1">Aplicações modernas utilizando App Router, renderização híbrida (SSR/SSG) e otimização impecável de performance e SEO.</p>
            </div>

            {/* Tailwind CSS - Card Médio */}
            <div className="md:col-span-2 bg-gradient-to-br from-sky-400/10 to-transparent backdrop-blur-md p-5 rounded-2xl border border-sky-400/20 shadow-sm hover:scale-[1.02] hover:border-sky-400/50 transition-all duration-300 group">
              <Code2 className="text-sky-400 group-hover:-translate-y-1 transition-transform duration-300" size={24} />
              <h3 className="font-bold text-slate-900 text-base mt-3">Tailwind CSS</h3>
              <p className="text-slate-500 text-xs mt-1">Estilização ágil com classes utilitárias, garantindo interfaces responsivas, limpas e altamente customizáveis.</p>
            </div>

            {/* Docker - Card Médio */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-md p-5 rounded-2xl border border-blue-500/20 shadow-sm hover:scale-[1.02] hover:border-blue-500/50 transition-all duration-300 group">
              <Database className="text-blue-500 group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className="font-bold text-slate-900 text-base mt-3">Docker</h3>
              <p className="text-slate-500 text-xs mt-1">Conteinerização de aplicações, isolamento de ambientes de desenvolvimento e facilitação do workflow de produção.</p>
            </div>

            {/* Git & GitHub - Card Pequeno */}
            <div className="md:col-span-1 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-md p-5 rounded-2xl border border-orange-500/20 shadow-sm hover:scale-[1.02] hover:border-orange-500/50 transition-all duration-300 group text-center sm:text-left">
              <div className="w-fit mx-auto sm:mx-0">
                <GitBranch className="text-orange-500 group-hover:rotate-12 transition-transform duration-300" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mt-4">Git</h3>
              <p className="text-slate-400 text-[11px] mt-0.5">Controle de versão</p>
            </div>

            {/* Vercel - Card Pequeno */}
            <div className="md:col-span-1 bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-md p-5 rounded-2xl border border-purple-500/20 shadow-sm hover:scale-[1.02] hover:border-purple-500/50 transition-all duration-300 group text-center sm:text-left">
              <div className="w-fit mx-auto sm:mx-0">
                <CloudLightning className="text-purple-500 group-hover:animate-pulse transition-transform duration-300" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mt-4">Vercel</h3>
              <p className="text-slate-400 text-[11px] mt-0.5">Deploy & CI/CD</p>
            </div>

          </div>
        </section>

        {/* SEÇÃO DE PROJETOS */}
        <section className="mt-24 max-w-5xl w-full">
          <div className="flex items-center gap-2 mb-8 text-left px-2">
            <span className="h-px w-8 bg-blue-600"></span>
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase">Projetos em Destaque</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <a href="https://chronos-pomodoro-orpin.vercel.app/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left shadow-sm hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <p className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 w-fit">⏱️</p>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Chronos Pomodoro</h3>
                <p className="text-slate-500 text-sm mt-1">Uma solução inteligente para gerenciar seu tempo e otimizar seu estudo.</p>
              </div>
            </a>

            <a href="https://nexus-loja-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left shadow-sm hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <p className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 w-fit">🎮</p>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Nexus Gaming</h3>
                <p className="text-slate-500 text-sm mt-1">Uma ecommerce de jogos que une a tecnologia e a diversão.</p>
              </div>
            </a>

            <a href="https://brinquedo-estoque-44hh.vercel.app/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left shadow-sm hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <p className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 w-fit">📈</p>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Recanto Estoque</h3>
                <p className="text-slate-500 text-sm mt-1">Uma solução completa para gerenciar seu estoque e otimizar seus processos de venda.</p>
              </div>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 py-8 text-slate-400 text-sm border-t w-full max-w-5xl">
          © {new Date().getFullYear()} Portfolio - Pedro Davi.
        </footer>
      </div>
    </div>
  );
}