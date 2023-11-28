import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="home">
        <nav id="home-navbar">
          <Link href={'/'}>Home</Link>
          <Link href='/blog'>Blog</Link>
        </nav>
        <div id="home-properties">
          <h1>Welcome To Our Blogs</h1>
          <button>
            <Link href="/blog" style={{ color: "white" }}>
              Discover More
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
