const ChefService = () => {
  return (
    <div className="my-28 w-11/12 md:max-w-5xl mx-auto">
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(../../../../public/assets/home/chef-service.jpg)",
            backgroundPosition: 'bottom center'
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="w-10/12 mx-auto text-center bg-white text-black py-10 px-10 flex flex-col items-center">
          <div className="w-full md:w-10/12 mx-auto">
            <h1 className="mb-5 text-2xl md:text-5xl font-cinzel">Bistro Boss</h1>
            <p className="mb-5 font-inter text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
