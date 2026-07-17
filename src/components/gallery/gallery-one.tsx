import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';
import flower_01 from '@/assets/img/flower-portfolio/flower-01.jpeg';
import flower_02 from '@/assets/img/flower-portfolio/flower-02.jpeg';
import flower_03 from '@/assets/img/flower-portfolio/flower-03.jpeg';
import flower_04 from '@/assets/img/flower-portfolio/flower-04.jpeg';
import flower_05 from '@/assets/img/flower-portfolio/flower-05.jpeg';
import flower_06 from '@/assets/img/flower-portfolio/flower-06.jpeg';
import flower_07 from '@/assets/img/flower-portfolio/flower-07.jpeg';
import flower_08 from '@/assets/img/flower-portfolio/flower-08.jpeg';
import flower_09 from '@/assets/img/flower-portfolio/flower-09.jpeg';
import flower_10 from '@/assets/img/flower-portfolio/flower-10.jpeg';
import flower_11 from '@/assets/img/flower-portfolio/flower-11.jpeg';
import flower_12 from '@/assets/img/flower-portfolio/flower-12.jpeg';
import flower_13 from '@/assets/img/flower-portfolio/flower-13.jpeg';
import flower_14 from '@/assets/img/flower-portfolio/flower-14.jpeg';
import flower_15 from '@/assets/img/flower-portfolio/flower-15.jpeg';
import flower_16 from '@/assets/img/flower-portfolio/flower-16.jpeg';
import flower_17 from '@/assets/img/flower-portfolio/flower-17.jpeg';
import majestic_01 from '@/assets/img/flower-portfolio/majestic-01.jpeg';
import majestic_02 from '@/assets/img/flower-portfolio/majestic-02.jpeg';
import majestic_03 from '@/assets/img/flower-portfolio/majestic-03.jpeg';
import majestic_04 from '@/assets/img/flower-portfolio/majestic-04.jpeg';
import majestic_05 from '@/assets/img/flower-portfolio/majestic-05.jpeg';
import majestic_06 from '@/assets/img/flower-portfolio/majestic-06.jpeg';
import majestic_07 from '@/assets/img/flower-portfolio/majestic-07.jpeg';
import majestic_08 from '@/assets/img/flower-portfolio/majestic-08.jpeg';


const gallery_images = [
  majestic_01,
  majestic_02,
  majestic_03,
  majestic_04,
  majestic_05,
  majestic_06,
  majestic_07,
  majestic_08,
  flower_01,
  flower_02,
  flower_03,
  flower_04,
  flower_05,
  flower_06,
  flower_07,
  flower_08,
  flower_09,
  flower_10,
  flower_11,
  flower_12,
  flower_13,
  flower_14,
  flower_15,
  flower_16,
  flower_17,
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  return (
    <div id="portfolio" className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={45} direction='left'>

                  {gallery_images.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <Image src={g} alt="flower portfolio arrangement" sizes="420px" />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
