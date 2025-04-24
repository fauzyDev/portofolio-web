import React from "react";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = React.useRef()
  const activeBox = React.useRef()

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
  }

  React.useEffect(() => {
    initActiveBox()
    window.addEventListener('resize', initActiveBox)
    return () => window.removeEventListener('resize', initActiveBox);
  }, [])

  const activeLink = (event) => {
    lastActiveLink.current?.classList.remove('active')
    event.target.classList.add('active')
    lastActiveLink.current = event.target

    activeBox.current.style.top = event.target.offsetTop + 'px'
    activeBox.current.style.left = event.target.offsetLeft + 'px'
    activeBox.current.style.width = event.target.offsetWidth + 'px'
    activeBox.current.style.height = event.target.offsetHeight + 'px'
  }

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Tools',
      link: '#tools',
      className: 'nav-link'
    },
    {
      label: 'Project',
      link: '#project',
      className: 'nav-link'
    },
    {
      label: 'Certificate',
      link: '#certificate',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    },
    {
      label: 'STAR-X AI',
      link: '/starx-ai',
      className: 'nav-link'
    }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({
        label, link, className, ref
      }, key) => (
        <a href={link} key={key} ref={ref} className={className} onClick={activeLink}>
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}>
      </div>
    </nav>
  );
}

export default Navbar;
