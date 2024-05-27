"use client";
import { lazy, Suspense, useState, useTransition } from "react";

const wait = (time: number) => {
  return new Promise((resolve) => {
    console.log(resolve.name);
    setTimeout(resolve, time);
  });
};

const About = lazy(() => wait(3000).then(() => import("./About")));
const Post = lazy(() => wait(3000).then(() => import("./Post")));
import Contact from "./Contact";

const Home = (): React.JSX.Element => {
  const [isPending, setTransition] = useTransition();
  const [page, setPage] = useState<"home" | "about" | "contact" | "post">(
    "home"
  );

  return (
    <main>
      <nav>
        <ol>
          <li>
            <button onClick={() => setPage("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setPage("about")}>About</button>
          </li>
          <li>
            <button onClick={() => setPage("contact")}>Contact</button>
          </li>
          <li>
            <button onClick={() => setTransition(() => setPage("post"))}>
              Post
            </button>
          </li>
        </ol>
      </nav>

      <section>
        {page === "home" ? (
          <h1>Home Page</h1>
        ) : page === "about" ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            {/* Here after 'page' state changes and set to 'about' and it will fallback to Loading... until 'About' component will get fetched */}
            {/* In this example, the About component get fetches with a Suspense-enabled. When you click the About” tab, the About component suspends, causing the closest loading fallback to appear: */}
            <About />
          </Suspense>
        ) : page === "contact" ? (
          // Hiding the entire Home component page and showing a loading indicator leads to a jarring user experience. If you add useTransition to TabButton, you can instead indicate display the pending state in the tab button instead.
          <Contact />
        ) : (
          <Post />
        )}
        {isPending ? <h1>Post page is loading...</h1> : null}
      </section>
    </main>
  );
};

export default Home;
