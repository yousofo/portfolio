import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="nav left-0 w-screen fixed bottom-0 pb-8 sm:bg-transparent ">
      <div className="nav-con  relative flex justify-center p-1 m-auto gap-1.5 w-max rounded-md text-foreground bg-opacity-30 bg-foreground">
        <button
          id="aboutBtn"
          className="about transition-colors cursor-pointer flex items-center px-3 rounded-md gap-1 bg-background bg-opacity-90"
        >
          About
        </button>
        <ul className="links [&>*]:rounded-md [&>*] [&>*]:bg-background [&>li]:bg-opacity-90 flex text-ntext gap-1 rounded-lg items-center text-sm ml:text-base [&>LI]:transition-colors">
          <li className="border border-transparent p-2 " id="workBtn">
            Recent Works
          </li>
          <li className="border border-transparent p-2 " id="contactBtn">
            Contact &amp; CV
          </li>
          <li
            className="border border-transparent [&>*]:rounded-md text-background "
            id="contactBtn"
          >
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
}
