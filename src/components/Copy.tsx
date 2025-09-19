import { useState } from "react"

const Copy = ({copyText} : any) => {
  const [copyStatus, setCopyStatus] = useState("")
  const textWillCopy = `${copyText}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textWillCopy)
      setCopyStatus("copiado")
      setTimeout(() => setCopyStatus(""), 2000)
    } catch (error) {
      console.error("Failed to copy: ", error);
      setCopyStatus("Failed to copy.");
    }
  }

  return (
    <button className="p-4 hoverText text-[var(--AllColors)] dark:text-white rounded-r-xl border-l-2 border-[var(--AllColors)] dark:border-white hoverButton hover:bg-[var(--AllColors)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--AllColors)] cursor-pointer"
      onClick={handleCopy}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    </button>
  )
}

export default Copy
