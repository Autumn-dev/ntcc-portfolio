function ProjectsPage() {
  return (
    <main>
      {/* Header */}
      <div className="relative font-semibold font-stretch-expanded w-5/6 mx-auto text-white py-10 mt-3 bg-black text-6xl">
        Projects
      </div>
      {/* Main Content */}
      <div className="w-5/6 mx-auto mt-10 py-10 bg-black">
        <p className="text-white text-lg">Here are some of my projects!</p>
        <div className="grid grid-cols-1 gap-4 mt-6">
          {/* First entry */}
          <div className="grid-flow-row-dense w-1/2 justify-center grid grid-cols-2 grid-rows-3">
            <div className="col-start-1 row-span-3 col-span-2">
              <img
                src="/wam.png"
                alt="Placeholder"
                className="w-400-px h-400-px object-cover"
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
