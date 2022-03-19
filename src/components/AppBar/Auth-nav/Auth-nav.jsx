import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const AuthNav = () => {
      const resolvedLogin = useResolvedPath("/login");
  const resolvedRegister = useResolvedPath("register");
      const matchLogin = useMatch({ path: resolvedLogin.pathname, end: true });
  const matchRegister = useMatch({
    path: resolvedRegister.pathname,
    end: true,
  });
    return (<ul>
                <li>
              <Link
                to={"/login"}
                style={{ color: matchLogin ? "red" : "inherit" }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/register"}
                style={{ color: matchRegister ? "red" : "inherit" }}
              >
                Registration
              </Link>
            </li>
    </ul>)
}