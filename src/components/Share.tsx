import { useState, useEffect } from "react"

const Share = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState("")
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const textWillCopy = `👋 Hola, soy Antonio Maldonado. Aquí puedes ver todas mis redes y proyectos ➭ ${currentUrl}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textWillCopy)
      setCopyStatus("✅ Enlace copiado ✨")
      setTimeout(() => setCopyStatus(""), 2000)
    } catch (error) {
      console.error("Failed to copy: ", error)
      setCopyStatus("Error al copiar.")
    }
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <li
        onClick={() => setIsOpen(true)}
        className="cursor-pointer select-none p-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        title="Compartir tarjeta"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
          <path d="M12 2v13"/>
          <path d="m16 6-4-4-4 4"/>
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
        </svg>
      </li>

      {isOpen && (
        <div 
          onClick={handleBackdropClick}
          className="font-kode text-black dark:text-white fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4"
        >
          {/* Se añade cursor-default para que los clics dentro de la tarjeta no la cierren accidentalmente */}
          <div className="rounded-2xl relative w-full max-w-sm bg-white dark:bg-black border-2 border-black dark:border-white p-6 shadow-xl flex flex-col items-center gap-6 cursor-default">
            
            <button
              className="cursor-pointer absolute top-3 right-3 p-1 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>

            <div className="w-full text-center mt-6">
              <h3 className="text-lg font-bold">✨ Comparte mi tarjeta digital</h3>
              <p className="text-xs opacity-75 mt-2">Ayúdame compartiendo este perfil</p>
            </div>

            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 font-medium rounded-2xl border-2 border-black dark:border-white bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 ease-in cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 17H7A5 5 0 0 1 7 7h2"/>
                <path d="M15 7h2a5 5 0 1 1 0 10h-2"/>
                <line x1="8" x2="16" y1="12" y2="12"/>
              </svg>
              <span>Copiar enlace</span>
            </button>

            {copyStatus && (
              <p className="font-bold text-sm text-green-600 dark:text-green-400">
                {copyStatus}
              </p>
            )}

          </div>
        </div>
      )}
    </>
  )
}

export default Share