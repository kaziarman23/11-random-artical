

function Header() {
  return (
  <>
    <div className="overflow-hidden w-full  h-17">
    <div className="flex justify-center items-center  list-none mt-4">
        <li className="p-4 mr-auto cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">SkyBird</li>
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">Home</li>
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">About</li>
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">Artical</li>
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">Contact Us</li>
    </div>
    </div>  
  </>
  )
}

export default Header