import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex bg-slate-200">
      <div className="size-1/2 p-3">
        <Image
          className="w-auto h-auto"
          src="/espe-logo.png"
          alt="ESPE Logo"
          width={175}
          height={175}
          priority
        />
      </div>
      <div className="size-1/2 text-right">
        <button className="p-3">Perfil</button>|
        <button className="p-3">Salir</button>
      </div>
    </header>
  )
}
