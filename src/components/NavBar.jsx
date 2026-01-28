export default function Navbar({ sections }) {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Johnson Tran</h2>
      <ul>
        <li onClick={() => scrollTo(sections.about)}>About</li>
        <li onClick={() => scrollTo(sections.projects)}>Projects</li>
        <li onClick={() => scrollTo(sections.contact)}>Contact</li>
      </ul>
    </nav>
  );
}
