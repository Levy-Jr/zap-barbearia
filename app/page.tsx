import Image from "next/image";
import Logo from "/public/zapbarbearia/logo.svg"
import CellPhone from "/public/zapbarbearia/cell-phone.svg"
import WppBg from "/public/zapbarbearia/whatsapp-background.webp"
import ArrowIcon from "/public/zapbarbearia/arrow.svg"
import Robot from "/public/zapbarbearia/robot.svg"
import Package from "/public/zapbarbearia/package.svg"
import Link from "next/link";
import PlanSection from "@/components/plan-section";
import FaqList from "@/components/faq-list";

const Home = () => {
  return (
    <>
      <header className="w-container mx-auto pt-10">
        <Image
          src={Logo}
          alt="Logo"
        />
      </header>
      <main>
        <section className="w-container flex items-center mx-auto">
          <div className="">
            <h1 className="text-6xl max-w-[20ch] font-extrabold">Sua barbearia autônoma com <span className="bg-gradient-to-r from-[#4CCF80] to-[#06857E] bg-clip-text text-transparent">I.A</span></h1>
            <Link
              className="inline-flex shadow-xl shadow-black/20 text-white gap-4 bg-gradient-to-r from-primary-green to-[#04837D] rounded-full py-3 px-8 mt-9 text-4xl font-semibold"
              href="#plans"
            >
              Planos
              <Image
                src={ArrowIcon}
                alt="Seta"
              />
            </Link>
          </div>
          <div>
            <Image
              src={WppBg}
              alt="Whatsapp background"
            />
          </div>
        </section>
        <section className="w-container mx-auto text-center pt-24">
          <h2 className="text-6xl font-bold mb-5">Preocupe-se somente em cortar</h2>
          <div className="bg-white pt-20 pb-14 lg:px-14 rounded-[1.25rem]">
            <h3 className="text-5xl font-bold max-w-[19ch] mx-auto">Deixe o atendimento com a gente!</h3>
            <p className="mt-12 mb-5 leading-[1.2]">Com o ZapBarbearia, seu tempo é dedicado ao que importa: o atendimento ao cliente. Nossa Inteligência Artificial cuida de todo o resto. Agendamentos, respostas automáticas e lembretes para os clientes, tudo funcionando de maneira autônoma no WhatsApp. Nunca mais perca controle da agenda ou deixe clientes esperando. Você foca no serviço, a tecnologia faz o restante.</p>
            <ul className="*:bg-gradient-to-r grid grid-cols-2 leading-[1.2] gap-5 *:px-5 *:rounded-2xl *:pt-5 text-start">
              <li className="from-[#E0FFEF] to-[#F5FBD9]">
                <article className="flex">
                  <div>
                    <h4 className="text-2xl font-semibold pb-4">Mais produtividade</h4>
                    <p>Clientes não querem complicação. Com 3 mensagens no WhatsApp, o agendamento está feito. Com uma integração simples e automática, eles recebem respostas, lembretes e você mantém o controle total da sua agenda.</p>
                  </div>
                  <Image
                    className="w-[min(100%,11.25rem)]"
                    src={WppBg}
                    alt="Celular"
                  />
                </article>
              </li>
              <li className="from-[#D6FFF2] to-[#DBFDFF]">
                <article>
                  <div>
                    <h4 className="text-2xl font-semibold pb-[.625rem]">Sem formulários</h4>
                    <p>Esqueça os formulários, aplicativos e links confusos. No ZapBarbearia, seus clientes agendam o serviço em 3 mensagens rápidas no WhatsApp, e a I.A. cuida do resto!</p>
                  </div>
                  <Image
                    src={CellPhone}
                    alt="Celular"
                  />
                </article>
              </li>
              <li className="from-[#FFEFCF] to-[#F8FACC]">
                <article>
                  <div>
                    <h4 className="text-2xl font-semibold pb-3">Ofereça pacotes!</h4>
                    <p>Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
                  </div>
                  <Image
                    src={Package}
                    alt="Pacote"
                  />
                </article>
              </li>
              <li className="from-[#003D3D] text-white to-[#008861]">
                <article>
                  <div>
                    <h4 className="text-2xl font-semibold pb-4">Customize sua abordagem com nosso robô.</h4>
                    <p>Faça pacotes para seus clientes e deixe que nossa IA identifique quem faz parte dos pacotes e gerencie as reservas de forma automática.</p>
                  </div>
                  <Image
                    src={Robot}
                    alt="Robô"
                  />
                </article>
              </li>
            </ul>
          </div>
          <p className="text-[3.5rem] my-24 leading-[1.1] font-medium text-start">Com o <span className="bg-gradient-to-r from-[#04837D] to-primary-green bg-clip-text text-transparent">ZapBarbearia</span>, o controle de agendamentos, respostas e notificações automáticas para seus clientes é feito de forma inteligente e eficiente. Enquanto você se concentra no que faz de melhor – cortar e cuidar dos cabelos – nossa I.A. organiza sua agenda, garante que seus clientes sejam avisados e evita erros de agendamento. Mais tempo para você, mais satisfação para seus clientes.</p>
        </section>
        <section className="w-container mx-auto bg-white rounded-[1.25rem] px-14 pb-16 pt-20">
          <h2 className="text-center text-5xl font-bold">CRM integrado</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <section className="w-lg-container mx-auto">
          <h2 className="text-center font-bold text-5xl">Como usar o ZapBarbearia?</h2>
          <div></div>
        </section>
        <PlanSection />
        <section className="bg-white py-28">
          <div className="w-[min(56.25rem,90%)] mx-auto">
            <p className="text-base font-light text-center">FAQ ZAP BARBEARIA</p>
            <h2 className="text-2xl text-center md:text-5xl font-extrabold lg:text-6xl mt-[.625rem] mb-12">DÚVIDAS FREQUENTES</h2>
            <FaqList />
          </div>

        </section>
      </main>
      <footer className="bg-black text-white pt-24 pb-8 relative overflow-hidden">
        <div className="w-container mx-auto flex relative z-10">
          <div>
            <Link className="block" href="#">
              <Image src={Logo} alt="Home" />
            </Link>
          </div>
          <div>
            <nav>
              <ul>
                <li>Início</li>
                <li>Passo a passo</li>
                <li>Dúvidas</li>
                <li>Planos</li>
                <li>Como funciona</li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="text-center z-10 relative">Todos os direitos reservados.</p>
        <div className="absolute aspect-square w-[50rem] right-1/2 translate-x-1/2 bottom-[-200%] [background-image:radial-gradient(circle,rgba(77,208,128,1)_0%,rgba(255,255,255,0)_75%)] opacity-70"></div>
      </footer>
    </>
  );
}

export default Home