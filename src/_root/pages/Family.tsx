

const Family = () => {
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Family Background</h2>
      </div>

      {/* Combined Family Section */}
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Family Members</h3>
      </div>
      <div className="flex flex-col gap-9 w-full max-w-5xl mb-10">
        <div className="bg-dark-3 p-5 rounded-xl flex flex-col md:flex-row gap-8">
          {/* Family Image */}
          <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center items-center">
            <img 
              src="/assets/images/family_pic.jpeg" 
              alt="Family" 
              className="rounded-lg object-cover w-full max-h-120"
            />
          </div>
          
          {/* Family Information */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Parents Section */}
            <div className="mb-8">
              <h4 className="h4-bold text-light-1 mb-4">Parents</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-light-2 font-medium">Father:</p>
                  <p className="text-light-1 text-lg font-semibold">Rally T. Kima</p>
                </div>
                <div>
                  <p className="text-light-2 font-medium">Mother:</p>
                  <p className="text-light-1 text-lg font-semibold">Raquel G. Kima</p>
                </div>
              </div>
            </div>
            
            {/* Children Section */}
            <div>
              <h4 className="h4-bold text-light-1 mb-4">Children</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  <p className="text-light-1 text-lg">Karen Kristine Joy G. Kima</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  <p className="text-light-1 text-lg">Reggie Mark G. Kima</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  <p className="text-light-1 text-lg">Rally G. Kima Jr</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
