import { useState } from "react"

const Copy = ({ copyText }: { copyText: string }) => {
  const [copyStatus, setCopyStatus] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopyStatus(true)
      setTimeout(() => setCopyStatus(false), 2000)
    } catch (error) {
      console.error("Failed to copy: ", error)
      setCopyStatus(false)
    }
  }

  return (
    <button 
      onClick={handleCopy}
      className="cursor-pointer p-2 rounded-xl text-slate-400 dark:text-slate-500 group-hover:text-[var(--brandLight)] dark:group-hover:text-[var(--brandDark)] hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
      title="Copiar datos al portapapeles"
    >
      {copyStatus ? (
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
          className="lucide lucide-check-check text-[var(--brandLight)] dark:text-[var(--brandDark)] transition-colors"
        >
          <path d="M18 6 7 17l-5-5" />
          <path d="m22 10-7.5 7.5L13 16" />
        </svg>
      ) : (
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
          className="lucide lucide-copy transition-colors"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
    </button>
  )
}

export default Copy