import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex bg-slate-200 p-3">
        <Image
          className="w-auto h-auto"
          src="/espe-logo.png"
          alt="ESPE Logo"
          width={175}
          height={175}
          priority
        />
    </header>
  )
}
