import Directory from "../../components/directory/directory.component";
import {categories} from "./home.directory";

const Home=()=> {
    return <Directory categories={categories}  />;
}

export default Home;