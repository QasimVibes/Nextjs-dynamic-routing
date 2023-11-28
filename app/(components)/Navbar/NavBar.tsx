import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar-blog">
    <div className="nav-container-blog">
      <Link href={'/'} className="nav-link-blog">Home</Link>
      <Link href={'/blog'} className="nav-link-blog">Blog</Link>
    </div>
  </nav>
  )
}
