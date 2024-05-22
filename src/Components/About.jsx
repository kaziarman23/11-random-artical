

function About() {
  return (
    <div className="w-full h-auto bg-sky-800">
        <div className="text-center p-4 text-black ">
        <h1><b>Bird Migration</b></h1>
        </div>
        <div className="flex justify-center items-center h-80">
            <div className="w-1/2 h-80">
                <img className="m-auto rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Vulture_19o05.jpg/330px-Vulture_19o05.jpg" alt="about-img" />
            </div>
            <div className="w-1/2 h-80 ml-10 mr-10 text-justify">
                <h1>Bird migration is the regular seasonal movement, often north and south, between breeding and wintering grounds. Many species of bird migrate, typically by flying. Migration carries high costs in predation and mortality, and is driven primarily by the availability of food. It occurs mainly in the Northern Hemisphere.Migration of species such as storks, turtle doves, and swallows was recorded as many as 3,000 years ago by ancient Greek authors, including Homer and Aristotle, and in the Book of Job. More recently, Johannes Leche began recording dates of arrivals of spring migrants in Finland in 1749, and modern scientific studies have used techniques including bird ringing and satellite tracking to trace migrants. Threats to migratory birds have grown with habitat destruction, especially of stopover and wintering sites, as well as structures such as power lines and wind farms.</h1>
            </div>
        </div>
    </div>
  )
}

export default About