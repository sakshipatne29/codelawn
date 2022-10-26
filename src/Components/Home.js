import Navbar from "./Navbar";
import AppTable from "./AppTable";

function Home() {
    return (
        <>
            <Navbar/>
            <div className="container mt-5">
                <AppTable/>
            </div>
        </>
    );
}

export default Home;