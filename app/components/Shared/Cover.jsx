const Cover = ({ img, title, description }) => {
  return (
    <div className="">
      <div
        className="hero min-h-screen mb-20"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "bottom center",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="w-8/12 mx-auto text-center bg-[#15151599] text-white py-10 px-10 flex flex-col items-center">
          <div className="w-full md:w-10/12 mx-auto">
            <h1 className="mb-5 text-2xl md:text-5xl font-cinzel">{title}</h1>
            <p className="mb-5 font-inter text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
