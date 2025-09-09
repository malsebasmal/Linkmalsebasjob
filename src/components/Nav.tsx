import Share from "@components/Share"
import ColorTheme from "@components/ColorTheme"

const Nav = () => {
  return (
    <header className="w-full px-8 mb-8">
      <nav>
        <ul>
          <li>
            <Share />
          </li>
          <li>
            <ul>
              <li>
              </li>
              <ColorTheme />
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav