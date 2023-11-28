import NavBar from "@/app/(components)/Navbar/NavBar";

interface Item {
  image: string;
  dtCategory: string;
  heading: string;
  url: string;
  longDesc: string;
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

export default async function Slug({ params }: { params: { slug: string } }) {
  const items = await fetchData();
  const result = items.find((item) => item.url === params.slug);
  return (
    <>
    <NavBar/>
      {result ? (
          <div className="blog-container-single" id="main-content-single">
          <h1 className="blog-title-single" id="main-heading-single">{result.heading}</h1>
          <img className="blog-logo-single" src={result.image} alt="Logo"/>
          <div className="blog-text">
          <span>{result.dtCategory}</span>
          </div>
          <p className="blog-text-single">{result.longDesc}</p>
          <br />
          <p className="blog-text-single">{result.longDesc}</p>
        </div>
      ) : (
        <h2>Not Found</h2>
      )}
    </>
  );
}
