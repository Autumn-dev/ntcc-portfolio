function ProjectsPage() {
  return (
    <main>
      {/* Header */}
      <div className="sketchy-border relative font-semibold font-stretch-expanded w-5/6 mx-auto text-white py-10 mt-3 bg-black text-6xl">
        Projects
      </div>
      {/* Main Content */}
      <div className="sketchy-border w-5/6 mx-auto mt-10 py-10 bg-black">
        <p className="text-white text-lg">Here are some of my projects!</p>
        {/* Start of project entries */}
        <div className="grid grid-cols-1 gap-2 mt-6">
          {/* First entry */}
          <div className="w-full grid grid-cols-[1fr,1fr] grid-rows-2">
            <div className="col-start-1 row-span-2">
              <img
                src="/wam.png"
                alt="Placeholder"
                className="w-full h-auto aspect-3/2"
              />
            </div>
            <div className="col-start-2 row-start-1 h-fit">
              Lorum ipsum dolor sit amet [TITLE]
            </div>
            <div className="col-start-2 row-start-2">
              Lorum ipsum dolor sit amet 2 [DESC]
            </div>
          </div>
          {/* Second entry */}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
