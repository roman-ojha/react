"use client";
import { lazy, Suspense, useState } from "react";

const wait = (time: number) => {
  return new Promise((resolve) => {
    console.log(resolve.name);
    setTimeout(resolve, time);
  });
};

const About = lazy(() => wait(3000).then(() => import("./About")));
// import About from "./About";
import Contact from "./Contact";

const Home = (): React.JSX.Element => {
  const [page, setPage] = useState<"home" | "about" | "contact">("home");
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
        </ol>
      </nav>

      <section>
        {page === "home" ? (
          <h1>Home Page</h1>
        ) : page === "about" ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ) : (
          <Contact />
        )}
      </section>
    </main>
  );
};

export default Home;
