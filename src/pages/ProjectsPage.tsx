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
        <div className="grid grid-cols-1 gap-4 mt-6">
          {/* First entry */}
          <div className="grid-flow-row-dense w-1/2 justify-center grid grid-cols-3 grid-rows-3">
            <div className="col-start-1 col-span-1 col-end-2 row-end-2">
              <img
                src="/wam.png"
                alt="Placeholder"
                className="w-full h-auto mx-5"
              />
            </div>
            <div className="col-start-3 row-start-1">
              Lorum ipsum dolor sit amet
            </div>
            <div className="col-start-3 row-start-2 row-end-3">
              Lorum ipsum dolor sit amet 2
            </div>
          </div>
          {/* Second entry */}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
