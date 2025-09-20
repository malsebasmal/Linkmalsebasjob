import { useState } from "react"

const Share = () =>  {
  const [isOpen, setIsOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState("")
  const urlCurrent = window.location.href
  const textWillCopy = `👋 Hola, soy Antonio Maldonado. Aquí puedes ver todas mis redes y proyectos ➭ ${urlCurrent}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textWillCopy)
      setCopyStatus("✅ Enlace copiado ✨")
      setTimeout(() => setCopyStatus(""), 2000)
    } catch (error) {
      console.error("Failed to copy: ", error);
      setCopyStatus("Failed to copy.");
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  
  return (
    <>
      <li className="cursor-pointer" onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-icon lucide-share"><path d="M12 2v13"/><path d="m16 6-4-4-4 4"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/></svg>
      </li>

      {isOpen && (
        <div className="text-black font-kode dark:text-white fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="rounded-2xl relative w-xs md:w-md h-fit bg-white dark:bg-black border-2 p-4">
            <button className="cursor-pointer absolute top-0 right-0 p-4" onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <p className="text-lg font-bold">✨ Comparte mi tarjeta digital</p>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face%20with%20Smiling%20Eyes.png" alt="Grinning Face with Smiling Eyes" className="size-50" />
                <button className="cursor-pointer" onClick={handleCopy}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link2-icon lucide-link-2"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                </button>
                <p className="font-bold">{copyStatus}</p>
              </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Share