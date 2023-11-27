import Banner from '../../../public/banner.jpg'

const BannerSection = () => {
    return (
        <div
        className="hero min-h-[70vh]"
        style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            objectFit:'cover'
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-2 text-5xl font-bold">Ship Anywhere, Anytime with Ease</h1>
            <p className="mb-5">
            Simplify Shipping with Our Online Platform
            </p>
            <input type="text" placeholder="Search Your Service Here" className="input input-bordered input-md w-full max-w-xs mr-1" />
            <button className="btn px-8 text-white bg-[#3b0032] border-none hover:text-[#F7FF00] hover:bg-[#3b0032d7]">Search</button>
          </div>
        </div>
      </div>
    );
};

export default BannerSection;