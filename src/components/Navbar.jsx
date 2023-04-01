export const Navbar = () => {
  return (
    <nav className="fixed flex justify-center items-center gap-60 bg-blue-bg h-20 w-full f-montserrat">
      <h1 className="text-4xl font-black text-darkb-bg uppercase">Food Delivery</h1>
      <ul className="flex justify-center items-center text-lg gap-20 text-secondary-blue">
        <li className="font-thin text-xl bg-blue-button rounded-full w-32 p-2 text-center hover:text-darkb-bg">
          <a href="#home">Home</a>
        </li>
        <li className="font-thin text-xl bg-blue-button rounded-full w-32 p-2 text-center hover:text-darkb-bg">
          <a href="">About Us</a>
        </li>
        <li className="font-thin text-xl bg-blue-button rounded-full w-32 p-2 text-center hover:text-darkb-bg">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  )
}