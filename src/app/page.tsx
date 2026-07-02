"use client";

import React, { useState } from 'react';
import { Activity, TrendingUp, Target, ChevronRight, Dumbbell } from 'lucide-react';

// --- DADOS DO QUIZ (Mesmos de antes) ---
const QUESTIONS = [
  {
    title: "Qual o seu principal objetivo na academia hoje?",
    options: [
      { label: "Hipertrofia e Ganho de Massa", insight: "Para hipertrofia real, o segredo não é 'fazer força', é controle. O app ajustaria seu volume semanal para ficar entre 10 e 20 séries por grupo muscular, rastreando o tempo sob tensão exato." },
      { label: "Emagrecimento e Definição", insight: "O foco mudaria para periodizar treinos com blocos metabólicos. O app cruzaria essas informações com suas zonas de frequência cardíaca para maximizar a queima." },
      { label: "Força Bruta e Powerlifting", insight: "Aqui o app reduziria seu volume e aumentaria os intervalos de descanso, calculando automaticamente as porcentagens baseadas na sua Repetição Máxima (1RM)." }
    ]
  },
  {
    title: "Quantos dias por semana você consegue treinar com consistência?",
    options: [
      { label: "1 a 2 dias", insight: "Treinar pouco exige estímulo alto. O algoritmo adaptaria seu treino para 'Full Body' (corpo inteiro), garantindo que nenhum músculo fique para trás na semana." },
      { label: "3 a 4 dias", insight: "A divisão Upper/Lower (Superior/Inferior) seria a ideal configurada para você. O app equilibraria a intensidade para você não queimar a largada nos primeiros dias." },
      { label: "5 a 6 dias", insight: "Excelente consistência! O algoritmo montaria uma rotina Push/Pull/Legs focada em hipertrofia, calculando o tempo de recuperação exato para seu sistema nervoso central." }
    ]
  },
  {
    title: "Como você controla suas cargas e repetições de um treino para o outro?",
    options: [
      { label: "Tento lembrar de cabeça", insight: "A memória falha. Sem sobrecarga progressiva real, você estagna. É por isso que treinos de gaveta param de dar resultado após 2 meses." },
      { label: "Anoto no bloco de notas do celular", insight: "Você está no caminho certo, mas notas estáticas não te avisam quando é hora de fazer um 'deload' ou quando aumentar o peso. Falta inteligência nos dados." },
      { label: "Sigo a ficha padrão da academia", insight: "O maior perigo: treinos genéricos que não consideram seu histórico de esforço. A mesma ficha não serve para você e para o cara do lado." }
    ]
  }
];

export default function LandingPage() {
  // States do Quiz
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showInsight, setShowInsight] = useState(false);
  
  // States do Form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSelectOption = (index: number) => {
    if (showInsight) return;
    setSelectedOption(index);
    setShowInsight(true);
  };

  const handleNextStep = () => {
    setSelectedOption(null);
    setShowInsight(false);
    setCurrentStep(prev => prev + 1);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await fetch('SUA_URL_DO_FORMSPREE', { method: 'POST', body: JSON.stringify({ name, email }) });
    setSubmitted(true);
  };

  const scrollToValidation = () => {
    document.getElementById('validation-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-purple-500/30">
      
      {/* NAVBAR SIMPLES */}
      <nav className="fixed top-0 w-full bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="text-purple-500 w-8 h-8" />
            <span className="font-black text-2xl tracking-tighter">SingularFit</span>
          </div>
          <button 
            onClick={scrollToValidation}
            className="text-sm font-bold text-white bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full transition-colors"
          >
            Acesso Antecipado
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Efeito de luz de fundo imitando os neons do projeto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Em desenvolvimento na UFU
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              O Seu Corpo Não É Genérico. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Seu Treino Também Não.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
              Deixe as fichas de gaveta no passado. O SingularFit é a primeira plataforma que periodiza seu treino, monitora sua evolução de carga e ajusta seu volume semanal com inteligência baseada em dados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToValidation}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
              >
                Faça a Análise de Perfil
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MOCKUP VISUAL */}
          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-[3rem] blur-2xl transform rotate-6"></div>
            {/* O ideal é exportar o mockup do seu celular com as telas do app em PNG transparente e colocar na pasta public/ */}
            <div className="relative bg-[#121214] border border-zinc-800 rounded-[2.5rem] aspect-[1/2] shadow-2xl flex items-center justify-center overflow-hidden">
               <img src="/Images/mokup.png" alt="App Preview" className="w-full h-full object-cover" /> 
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-[#0d0d0f] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Métricas que geram resultados</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Você não constrói um físico no achismo. Nós trazemos as métricas que os atletas usam, direto para o seu bolso.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evolução de Carga Real</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Acompanhe o gráfico de evolução dos seus principais levantamentos. Saiba exatamente quando aplicar a sobrecarga progressiva nos treinos.
              </p>
            </div>

            <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Monitoramento Contínuo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Integração com zonas de frequência cardíaca, volume total de treino (tonelagem) e hidratação. O seu dashboard completo de saúde.
              </p>
            </div>

            <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Metas e Gamificação</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Estabeleça metas claras como "Perder 3kg" ou "Supino 100kg". Ganhe pontos e recompensas pela sua consistência semanal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ / FORMULÁRIO SECTION */}
      <section id="validation-section" className="py-24 px-4 relative">
        <div className="max-w-2xl mx-auto bg-[#121214] border border-purple-900/40 rounded-[2rem] p-6 md:p-12 shadow-2xl shadow-purple-900/10">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Descubra seu treino ideal</h2>
            <p className="text-gray-400">Responda a 3 perguntas rápidas e veja como a plataforma adaptaria a rotina para o seu corpo.</p>
          </div>

          {/* CÓDIGO DO QUIZ (Ligeiramente ajustado sem as margens extremas para caber no novo layout) */}
          {!submitted && currentStep < QUESTIONS.length && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-500 font-bold tracking-wider text-sm uppercase">Análise de Perfil</span>
                <span className="text-gray-500 text-sm">Passo {currentStep + 1} de {QUESTIONS.length}</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500"
                  style={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {currentStep < QUESTIONS.length && (
            <div className="animate-fade-in">
              <h3 className="text-xl md:text-2xl font-bold mb-6">{QUESTIONS[currentStep].title}</h3>
              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={showInsight && selectedOption !== idx}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between
                      ${selectedOption === idx ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/50' : 'border-zinc-800 bg-[#0a0a0c] hover:border-zinc-600'}
                      ${showInsight && selectedOption !== idx ? 'opacity-30 cursor-not-allowed' : ''}
                    `}
                  >
                    <span className="font-medium text-gray-200">{option.label}</span>
                  </button>
                ))}
              </div>

              {showInsight && selectedOption !== null && (
                <div className="mt-6 p-5 bg-[#0a0a0c] border border-purple-500/30 rounded-xl">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    <span className="text-purple-400 font-bold flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4" /> Inteligência SingularFit:
                    </span>
                    {QUESTIONS[currentStep].options[selectedOption].insight}
                  </p>
                  <button 
                    onClick={handleNextStep}
                    className="mt-6 w-full bg-purple-600 text-white font-bold py-3.5 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Próxima Pergunta
                  </button>
                </div>
              )}
            </div>
          )}

          {currentStep === QUESTIONS.length && !submitted && (
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-3">Chega de Fichas Genéricas.</h3>
              <p className="text-gray-400 mb-8">
                Deixe o SingularFit cuidar das planilhas enquanto você cuida do treino. Insira seus dados para entrar na lista VIP da versão Beta.
              </p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div>
                  <input 
                    type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Seu primeiro nome"
                    className="w-full bg-[#0a0a0c] border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="w-full bg-[#0a0a0c] border border-zinc-800 rounded-xl p-4 text-white focus:border-purple-500 outline-none transition-colors"
                  />
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                  Garantir Acesso Antecipado
                </button>
              </form>
            </div>
          )}

          {submitted && (
            <div className="text-center py-8 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mb-6 border border-purple-500/30">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Tudo certo, {name}!</h3>
              <p className="text-gray-400">
                Sua vaga na lista VIP está garantida. Em breve enviaremos as instruções para você dominar seus treinos.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-zinc-600 text-sm">
        <p>© 2026 Projeto Empreendedorismo UFU - SingularFit. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}