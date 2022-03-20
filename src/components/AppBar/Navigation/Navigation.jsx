import { useSelector } from "react-redux";
import { AuthNav } from "../Auth-nav/Auth-nav";
import { MainNav } from "../Main-nav/Main-nav";
import { Navigate } from "./Navigation.styled";
import { UserMenu } from "../UserMenu/UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Navigate>
        <div>
        <MainNav />
        </div>
        <div>
        {isLoggedIn ? (<UserMenu/>) : (<AuthNav/>)}
        </div>
    </Navigate>
  );
};

export default Navigation;
