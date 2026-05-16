
import { redirect } from "next/navigation";


export default async function LandingPage() {

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-slate-50 px-4 text-center">
      <main className="max-w-3xl space-y-6">
        
        <h1 className="text-5xl md:text-7xl py-2 font-extrabold text-slate-900 tracking-tight">
          Portfolio<br />
          <span className="text-blue-600">Profissional.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
          Meus projetos, habilidades e experiências em um só lugar. Descubra como posso contribuir para o seu sucesso profissional.
        </p>
      </main>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full">
        <a href="https://chronos-pomodoro-orpin.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left">
          <p className="text-2xl mb-2">⏱️</p>
          <h3 className="font-bold text-slate-900">Chronos Pomodoro</h3>
          <p className="text-slate-500 text-sm">Uma solução inteligente para gerenciar seu tempo e otimizar seu estudo.</p>
        </div>
        </a>

        <a href="https://nexus-loja-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left">
          <p className="text-2xl mb-2">🎮</p>
          <h3 className="font-bold text-slate-900">Nexus Gaming</h3>
          <p className="text-slate-500 text-sm">Uma ecommerce de jogos que une a tecnologia e a diversão.</p>
        </div>
        </a>
        <a href="https://brinquedo-estoque-44hh.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left">
            <p className="text-2xl mb-2">📈</p>
            <h3 className="font-bold text-slate-900">Recanto Estoque</h3>
            <p className="text-slate-500 text-sm">Uma solução completa para gerenciar seu estoque e otimizar seus processos de venda.</p>
          </div>
        </a>
      </section>

      <footer className="mt-20 py-8 text-slate-400 text-sm border-t w-full max-w-5xl">
        © {new Date().getFullYear()} Potfolio - Pedro Davi.
      </footer>
    </div>
  );


}