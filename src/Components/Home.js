import Navbar from "./Navbar";
import AppTable from "./AppTable";

function Home() {
    return (
        <div className="bg-light" style={{height: "100vh"}}>
            <Navbar/>
            <div className="p-5 mt-3">
                <AppTable/>
            </div>
        </div>
    );
}

export default Home;