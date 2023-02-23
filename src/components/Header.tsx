import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row justify-between h-16 items-center border-b-2 border-slate-800">
      <div className="font-bold md:text-2xl px-4 md:flex hidden">
        <Link to="/" className="hover:animate-pulse">Rodrigo Dev</Link>
      </div>
      <ul className="flex md:w-96 w-full justify-between gap-5 md:text-lg font-thin md:font-normal transition">
        <li><Link to="/" className="p-2 items-center justify-center hover:border-b-2 hover:border-cyan-600 hover:text-cyan-600">Início</Link></li>
        <li><Link to="/#about" className="p-2 items-center justify-center hover:border-b-2 hover:border-cyan-600 hover:text-cyan-600">Sobre</Link></li>
        <li><Link to="/projects" className="p-2 items-center justify-center hover:border-b-2 hover:border-cyan-600 hover:text-cyan-600">Projetos</Link></li>
        <li><Link to="/#contact" className="p-2 items-center justify-center hover:border-b-2 hover:border-cyan-600 hover:text-cyan-600">Contato</Link></li>
      </ul>
    </div>
  )
}