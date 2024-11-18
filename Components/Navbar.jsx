import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 flex justify-between items-center w-full px-8 py-3 bg-[#815854] text-[#F9EBDE]">
        <div className="text-3xl uppercase font-semibold">logo</div>
        <div className="flex gap-8">
          {["home", "features", "services", "our work", "contact"].map(
            (item, index) => (
              <h1
                className={`capitalize text-xl cursor-pointer ${index === 4 && "ml-40"}`}
                key={index}
              >
                {item}
              </h1>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
