import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <div
                className="w-full h-screen"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    backgroundSize: "1367px 640px",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Header />
                <main>{/* outlet */}</main>
                <Footer />
            </div>
        </>
    );
}

export default App;
