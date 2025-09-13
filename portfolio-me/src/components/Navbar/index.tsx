

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex justify-end items-center p-6 text-sm text-gray-300">
        <div>
        <ul className="flex space-x-6 items-center mr-28">
            <li><a href="#about" className="hover:text-teal-400">01. About</a></li>
            <li><a href="#experience" className="hover:text-teal-400">02. Experience</a></li>
            <li><a href="#work" className="hover:text-teal-400">03. Work</a></li>
            <li><a href="#contact" className="hover:text-teal-400">04. Contact</a></li>
        </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
