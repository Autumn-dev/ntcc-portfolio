function NavBurger() {
	return (
    <>
      <div className="rounded-full bg-black w-[50px] h-[50px] flex cursor-pointer flex-col justify-center gap-2 items-center" >
        <div className="h-1 w-1/3 bg-white" />
        <div className="h-1 w-2/3 bg-white" />
        <div className="h-1 w-1/3 bg-white" />
      </div>
    </>
  );
}

export default NavBurger;
