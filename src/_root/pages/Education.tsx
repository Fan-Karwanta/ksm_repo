

const Education = () => {
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Educational Background</h2>
      </div>

      {/* Tertiary Education */}
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Tertiary</h3>
      </div>
      <div className="flex flex-col gap-9 w-full max-w-5xl">
        <div className="bg-dark-3 p-5 rounded-xl flex flex-col md:flex-row gap-5">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
            <img 
              src="/assets/images/tertiary_pic.jpeg" 
              alt="SPAMAST" 
              className="rounded-lg object-cover w-full max-h-60"
            />
          </div>
          <div className="flex-1">
            <h4 className="h4-bold text-light-1 mb-2">Southern Philippines Agri-Business and Marine and Aquatic School of Technology (SPAMAST)</h4>
            <p className="text-light-2">Main Campus Poblacion, Malita, Davao Occidental</p>
            <p className="text-light-2 mt-2">SY 2021 - PRESENT</p>
            <p className="text-light-1 mt-4 font-semibold">Course: Associate in Computer Technology</p>
          </div>
        </div>
      </div>

      {/* Senior High School */}
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Senior High School</h3>
      </div>
      <div className="flex flex-col gap-9 w-full max-w-5xl">
        <div className="bg-dark-3 p-5 rounded-xl flex flex-col md:flex-row gap-5">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
            <img 
              src="/assets/images/senior_highschool.jpeg" 
              alt="JASNHS" 
              className="rounded-lg object-cover w-full max-h-60"
            />
          </div>
          <div className="flex-1">
            <h4 className="h4-bold text-light-1 mb-2">Jose Abad Santos National High School (JASNHS)</h4>
            <p className="text-light-2 mt-2">SY 2020 - 2021</p>
            <p className="text-light-1 mt-4 font-semibold">Strand: Humanities and Social Sciences (HUMSS)</p>
          </div>
        </div>
      </div>

      {/* Junior High School */}
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Junior High School</h3>
      </div>
      <div className="flex flex-col gap-9 w-full max-w-5xl">
        <div className="bg-dark-3 p-5 rounded-xl flex flex-col md:flex-row gap-5">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
            <img 
              src="/assets/images/jhs_pic.jpeg" 
              alt="TABNHS" 
              className="rounded-lg object-cover w-full max-h-60"
            />
          </div>
          <div className="flex-1">
            <h4 className="h4-bold text-light-1 mb-2">Tabayon National High School (TABNHS)</h4>
            <p className="text-light-2 mt-2">SY 2020 - 2021</p>
          </div>
        </div>
      </div>

      {/* Primary Education */}
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Primary (Elementary)</h3>
      </div>
      <div className="flex flex-col gap-9 w-full max-w-5xl mb-10">
        <div className="bg-dark-3 p-5 rounded-xl flex flex-col md:flex-row gap-5">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
            <img 
              src="/assets/images/elementary_pic.jpeg" 
              alt="SFES" 
              className="rounded-lg object-cover w-full max-h-60"
            />
          </div>
          <div className="flex-1">
            <h4 className="h4-bold text-light-1 mb-2">San Felipe Elementary School (SFES)</h4>
            <p className="text-light-2 mt-2">SY 2015 - 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
