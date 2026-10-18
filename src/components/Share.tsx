import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

const Share = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState("")
  const [currentUrl, setCurrentUrl] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setCurrentUrl(window.location.href)
    setIsMounted(true)
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

  const textWillCopy = `👋 Hi, I'm Antonio Maldonado. Check out my projects & links ➭ ${currentUrl}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textWillCopy)
      setCopyStatus("✅ Link copied to clipboard!")
      setTimeout(() => setCopyStatus(""), 2000)
    } catch (error) {
      console.error("Copy failed: ", error)
      setCopyStatus("Failed to copy link.")
    }
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  const modalContent = isOpen ? (
    <div 
      onClick={handleBackdropClick}
      className="font-geist text-slate-900 dark:text-white fixed inset-0 bg-black/40 backdrop-blur-xs z-[9999] flex items-center justify-center p-4 min-h-screen w-screen"
    >
      <div className="relative w-full max-w-sm rounded-3xl bg-white/95 dark:bg-slate-950/95 border border-black/10 dark:border-white/15 p-6 shadow-xl flex flex-col items-center gap-5 my-auto">
        
        <button
          className="cursor-pointer absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors"
          onClick={() => setIsOpen(false)}
          title="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>

        <div className="w-full text-center mt-2">
          <span className="font-kode text-[10px] tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">// QUICK LINK</span>
          <h3 className="text-lg font-bold mt-4">Share digital card</h3>
        </div>

        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 font-semibold text-sm rounded-xl border border-black/10 dark:border-white/20 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-all cursor-pointer shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
          <span>Copy URL to clipboard</span>
        </button>

        {copyStatus && (
          <p className="font-kode text-xs text-center font-semibold text-emerald-600 dark:text-emerald-400">
            {copyStatus}
          </p>
        )}

      </div>
    </div>
  ) : null

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-90"
        title="Share profile"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-link"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      </button>

      {isMounted && modalContent ? createPortal(modalContent, document.body) : null}
    </>
  )
}

export default Share