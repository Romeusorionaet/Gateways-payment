'use client'

export function Header() {
  return (
    <header className="bg-slate-900 p-4">
      <div className="flex items-center gap-4">
        <p>Notificações</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
          {0}
        </div>
      </div>
    </header>
  )
}
