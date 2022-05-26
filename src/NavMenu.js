export const NavMenu = () => {
  const navigate = section => {
    const elementId = section + '-element'
    const element = document.getElementById(elementId)
    const offSet = window.innerWidth > 750 ? 41 : 31
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offSet

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
  return (
    <div className="nav-menu-wide">
      <div className="nav-menu">
        {["home", "about", "skills", "projects", "contact"].map((sectionName, index) =>
          <div
            className={`nav-menu-block ${index === 0 && "nav-menu-block-first"}`}
            key={index}
            onClick={() => navigate(sectionName)}
          >
            <div className="nav-menu-text">
              {sectionName.toUpperCase()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
