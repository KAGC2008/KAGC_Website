import HeroBanner from "@components/Home/HeroBanner";

const YTIFrame = ({ data }) => {
  return (
    <div className="relative mx-auto">
      <iframe
        src={data}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="YouTube Video Player"
        className="rounded-lg shadow-2xl md:w-[700px] md:h-[400px] mx-auto "
      />
    </div>
  );
};

const Home = (props) => {
  const { data } = props;
  return (
    <>
      <HeroBanner data={data.heroBanner} />
      <div className="relative md:-mt-[40px] -mt-10 z-10">
        <YTIFrame data={data.YTiframe} />
      </div>
    </>
  );
};

export default Home;
