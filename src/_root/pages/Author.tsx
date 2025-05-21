const Author = () => {
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">About the Author</h2>
      </div>

      <div className="flex flex-col gap-9 w-full max-w-5xl mt-10">
        <div className="bg-dark-3 p-8 rounded-xl flex flex-col items-center">
          {/* Author Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary-500">
            <img 
              src="/assets/images/cima_prof.jpg" 
              alt="Karen Kristine Joy G. Kima" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Author Details */}
          <div className="w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="h4-bold text-light-1 mb-4">Personal Information</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-light-2 w-32">Name:</span>
                    <span className="text-light-1 font-medium">Karen Kristine Joy G. Kima</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Age:</span>
                    <span className="text-light-1 font-medium">20</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Address:</span>
                    <span className="text-light-1 font-medium">Jose Abad Santos, Davao Occidental</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Date of Birth:</span>
                    <span className="text-light-1 font-medium">November 18, 2004</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Place of Birth:</span>
                    <span className="text-light-1 font-medium">Thomas Lachica Private Hospital</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="h4-bold text-light-1 mb-4">Additional Details</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-light-2 w-32">Civil Status:</span>
                    <span className="text-light-1 font-medium">Single</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Height:</span>
                    <span className="text-light-1 font-medium">5'4"</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Weight:</span>
                    <span className="text-light-1 font-medium">50kg</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Citizenship:</span>
                    <span className="text-light-1 font-medium">Filipino</span>
                  </li>
                  <li className="flex">
                    <span className="text-light-2 w-32">Religion:</span>
                    <span className="text-light-1 font-medium">Roman Catholic Church</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="h4-bold text-light-1 mb-4">Hobbies</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-dark-4 text-light-1 py-1 px-3 rounded-full">Gym</span>
                <span className="bg-dark-4 text-light-1 py-1 px-3 rounded-full">Dancing</span>
                <span className="bg-dark-4 text-light-1 py-1 px-3 rounded-full">Eating</span>
                <span className="bg-dark-4 text-light-1 py-1 px-3 rounded-full">Sleeping</span>
              </div>
            </div>

            <div>
              <h4 className="h4-bold text-light-1 mb-4">Skills</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></div>
                  <p className="text-light-1">I'm good at handling responsibilities and working in a team.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3"></div>
                  <p className="text-light-1">I have skills in video editing and Graphic design.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
