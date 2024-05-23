function Article() {
    return (
        <div className="w-full h-auto bg-sky-800 mt-5  overflow-hidden">
            <div className="text-center text-black my-7 text-xl ">
                <h1>
                    <b>Article</b>
                </h1>
                <hr className="w-1/2 mx-auto my-4 " />
            </div>
            <div className="w-full h-auto">
                <div className="flex justify-center items-center gap-5 my-10">
                    <img
                        className="size-80 rounded-2xl"
                        src="https://images.unsplash.com/photo-1433321768402-897b0324c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJpcmR8ZW58MHx8MHx8fDA%3D"
                        alt=""
                    />
                    <img
                        className="size-80 rounded-2xl"
                        src="https://images.unsplash.com/photo-1541971126-d98efa910469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJpcmR8ZW58MHx8MHx8fDA%3D"
                        alt=""
                    />
                    <img
                        className="size-80 rounded-2xl"
                        src="https://images.unsplash.com/photo-1571391281715-092bfa58fa46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpcmR8ZW58MHx8MHx8fDA%3D"
                        alt=""
                    />
                </div>
                <div className="w-1/2 mx-auto text-center h-60 my-10">
                    <h1 className="text-justify">
                        Over 40% of key traits found in modern birds evolved
                        during the 60 million year transition from the earliest
                        bird-line archosaurs to the first maniraptoromorphs,
                        i.e. the first dinosaurs closer to living birds than to
                        Tyrannosaurus rex. The loss of osteoderms otherwise
                        common in archosaurs and acquisition of primitive
                        feathers might have occurred early during this phase.
                        After the appearance of Maniraptoromorpha, the next 40
                        million years marked a continuous reduction of body size
                        and the accumulation of neotenic (juvenile-like)
                        characteristics. Hypercarnivory became increasingly less
                        common while braincases enlarged and forelimbs became
                        longer. The integument evolved into complex, pennaceous
                        feathers.The oldest known paravian (and probably the
                        earliest avialan) fossils come from the Tiaojishan
                        Formation of China, which has been dated to the late
                        Jurassic period (Oxfordian stage), about 160 million
                        years ago.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Article;
