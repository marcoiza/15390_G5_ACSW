import Image from "next/image";
import logoEspe from "@/public/espe-logo.png";

export default function Header() {
  return (
    <header className="flex bg-slate-200">
      <div className="size-1/2 p-3">
        <Image src={logoEspe} alt="Logo" width={175} height={175} />
      </div>
      <div className="size-1/2 text-right">
        <button className="p-3">Perfil</button>|
        <button className="p-3">Salir</button>
      </div>
    </header>
  );
}
