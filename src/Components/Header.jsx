

function Header() {
  return (
  <>
    <div className="overflow-hidden w-full  h-17">
    <div className="flex justify-center items-center  list-none mt-4">
        <ul className="flex justify-center items-center">
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">Home</li>
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">About</li>
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">Article</li>
        <li className="p-4  cursor-pointer text-white hover:bg-blue-200 hover:text-black rounded-full">Contact Us</li>
        </ul>
    </div>
    </div>  
  </>
  )
}

export default Header