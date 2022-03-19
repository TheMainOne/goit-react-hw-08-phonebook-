import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const MainNav = () => {
  const resolvedHome = useResolvedPath("/");
  const resolvedPhonebook = useResolvedPath("/phonebook");
  const matchHome = useMatch({ path: resolvedHome.pathname, end: true });
  const matchPhonebook = useMatch({
    path: resolvedPhonebook.pathname,
    end: true,
  });

  return (
    <ul>
      <li>
        <Link to={"/"} style={{ color: matchHome ? "red" : "inherit" }}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/phonebook"}
          style={{ color: matchPhonebook ? "red" : "inherit" }}
        >
          Phonebook
        </Link>
      </li>
    </ul>
  );
};
