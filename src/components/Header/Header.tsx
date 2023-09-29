import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { RandomArticle } from "../../services/RandomArticle";
// import "./Header.css";

interface Props {
  shadow: boolean;
}

function Header(props: Props) {
  // const { shadow } = props;
  const [scrolled, setScrolled] = useState<boolean>(false);
  // const navigate = useNavigate();

  useEffect(() => {
    if (!window.onscroll) {
      window.onscroll = () => {
        setScrolledFromWindow(scrolled, setScrolled);
      };
    }

    // returning a function cleans up during component dismount
    return () => {
      window.onscroll = null;
    };
  }, [scrolled]);

  // const showShadow = shadow ? "shadow-md" : "";
  // const headerClass = scrolled ? "scrolled" : showShadow;
  // // const logoLightTextClass = scrolled ? '' : 'light-text';
  // const logoClass = scrolled ? "logo scrolled-logo" : "logo";

  return (
    <header className="bg-gray-100 flex justify-between items-center py-10">
      <Link className="no-underline uppercase text-xl font-bold " to="/">
        <img src="logo.jpg" alt="logo" className="w-12" />
      </Link>

      <nav className="">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 space-x-4">
          {/* <Link
            className="no-underline uppercase text-sm  text-teal-500 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-400"
            to="/"
          >
            Projects
          </Link> */}

          <Link
            className="no-underline uppercase text-sm  text-teal-500 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-400"
            to="https://flowcv.com/resume/jps5stii67"
            target="_blank"
          >
            Resume
          </Link>
        </ul>
      </nav>
      {/* <button
        onClick={async (event) => {
          const randomArticle = await new RandomArticle().getRandomArticle();
          navigate(`/article/${randomArticle.slug}`);
        }}
      >
        Go to random article
      </button> */}
    </header>
  );
}

function setScrolledFromWindow(
  scrolled: boolean,
  setScrolled: (value: boolean) => void
) {
  const scrollPx = 100;
  if (window.scrollY >= scrollPx && scrolled === false) {
    setScrolled(true);
  } else if (window.scrollY < scrollPx && scrolled === true) {
    setScrolled(false);
  }
}

export default Header;
