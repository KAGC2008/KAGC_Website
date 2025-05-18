const HeroBanner = ({ data }) => {
  return (
    <div class="relative bg-gradient-to-b from-black to-[#1E0E2F] text-white">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,173,4,0.2),transparent_70%)]"></div>
      <div class="relative z-10">
        <div className="justify-center items-center flex flex-col gap-4 md:h-[55dvh] max-md:px-4 max-md:py-20">
          <img src="./src/assets/logo.png" alt="" className="w-[100px] md:w-[150px]" />
          <h1 className="text-white text-[32px] md:text-[56px] font-bold">
            {data.title}
          </h1>
          <p className="text-gray-400 text-[16px] md:text-[24px]">
            {data.subTitle}
          </p>
          <div className="flex gap-4 justify-center items-center">
            <a
              href={data.youtubeURL.url}
              className="text-white bg-[#FF0000] px-4 py-2 hover:outline-1 hover:outline-[#FF0000] hover:outline-offset-3 hover:bg-transparent text-[16px] md:text-[24px] font-semibold transition-all"
            >
              ▶ {data.youtubeURL.text}
            </a>
            <a
              href={data.mapsURL.url}
              className="text-white hover:bg-[#FF0000] px-4 py-2 outline-1 outline-[#FF0000] hover:outline-0 bg-transparent text-[16px] md:text-[24px] font-semibold transition-all"
            >
              ⚲ {data.mapsURL.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
