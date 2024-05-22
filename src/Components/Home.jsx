function Home() {
    return (
        <>
            <div className="w-full h-auto bg-sky-800 mt-5  overflow-hidden">
                <div className="text-center text-black my-7 text-xl ">
                    <h1><b>Birds are love to fly.</b></h1>
                    <hr className="w-1/2 mx-auto my-4 " />
                </div>
                <div className="flex justify-center items-center h-80">
                    <div className="w-1/2">
                        <img className="rounded-xl block m-auto size-64" src="https://images.unsplash.com/photo-1554409011-d874157657b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJpcmR8ZW58MHx8MHx8fDA%3D" alt="bird-image" />
                    </div>
                    <div className="w-1/2 ml-5 mr-5 text-justify">
                        <h2><b>BIRDS</b> are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5.5 cm bee hummingbird to the 2.8 miter common ostrich. </h2>
                        <p>
                            <a className="underline-0 mt-5 text-black hover:text-orange-600 my-5" href="https://en.wikipedia.org/wiki/Bird">like to read more...</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
