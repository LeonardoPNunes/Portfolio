import { useSelector } from "react-redux";

import Loading from "../components/Loading";

import AboutMe from "../views/AboutMe";
import Contact from "../views/Contact"
import Home from "../views/Home";
import Projects from "../views/Projects";
import Header from "../components/Header";
import { GlobalContainer } from "./style";

const AllRoutes = () =>{
  const { loading } = useSelector(state => state.loading)

    return(
    <GlobalContainer>
        {loading &&
          <Loading />
        }
          <Header/>
          <Home />
          <AboutMe />
          <Projects/>
          <Contact/>
    </GlobalContainer>
    )
}
export default AllRoutes