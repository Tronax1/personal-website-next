import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                     <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                     <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                     <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                     <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resume">
                     <a>Resume</a>
                    </Link>
                </li>
            </ul>
        </nav>
    ) 
}
export default Navbar