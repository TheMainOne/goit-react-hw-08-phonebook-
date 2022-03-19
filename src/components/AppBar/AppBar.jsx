import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigation";
// import { UserMenu } from "./UserMenu/UserMenu";

const AppBar = () => {
    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <>
            <header>
                <Navigation />
        </header>
        </>
    )
}

export default AppBar;