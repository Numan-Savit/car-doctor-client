
// image import banner section

import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';


const Banner = () => {
    return (
        

        <div className="carousel w-full h-[600px]">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex items-center justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide4" className="btn btn-circle mr-5 ">❮</a> 
                  <a href="#slide2" className="btn btn-circle bg-orange-500 text-red-950">❯</a>
                </div>

                {/* Banner section title and paragraph and btn */}

                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                  <div className='text-white space-y-7 w-1/3 ml-10'>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are Many Variations Of Passages Of Avilable But tThe Majority Have Suffered Alternation in Some From.</p>
                    <div className='flex'>
                        <div><button className="btn btn-active btn-secondary mr-5">Discover More</button></div>
                        <div><button className="btn btn-outline btn-warning">Latest Project</button></div>
                    </div>
                  </div>
                </div>

              </div> 
              <div id="slide2" className="carousel-item relative w-full">
              <img src={img4}className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
        </div>
    );
};

export default Banner;