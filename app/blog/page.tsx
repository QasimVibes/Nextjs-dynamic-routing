import Link from "next/link";
import Image from 'next/image'
import NavBar from "../(components)/Navbar/NavBar";

interface Item {
  id: number;
  image: string;
  dtCategory: string;
  heading: string;
  url: string;
  shortDesc: string;
}
async function fetchData(): Promise<Item[]> {
  const response = await fetch("http://localhost:3000/api", {
    next: {
      revalidate: 60,
    },
  });
  const result = await response.json();
  return result as Item[];
}
export default async function Blog() {
  const items = await fetchData();

  return (
    <>
    <NavBar/>
      <section id="blog">
        <div className="blog-heading">
          <span>My Recent Posts</span>
          <h3>My Blog</h3>
        </div>
        <div className="blog-container">
          {items.map((item) => (
            <div className="blog-box" key={item.id}>
              <div className="blog-img">
                <Image src={item.image} alt="blog" width={'680'} height={'450'} />
              </div>
              <div className="blog-text">
                <span>{item.dtCategory}</span>
                <Link href={`/blog/${item.url}`} className="blog-title">
                  {item.heading}
                </Link>
                <p>{item.shortDesc}</p>
                <Link href={`/blog/${item.url}`}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
