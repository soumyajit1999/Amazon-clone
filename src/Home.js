import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './Home.css';
import Product from './Product';

function Home(){
    return (
    <div className="home">
      <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
    <MDBCarouselInner>
      <MDBCarouselItem itemId="1">
        <MDBView>
          <img
            className="d-block"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/Sept2020/Sept_SVD/Sept_ICICI_Hero/herotatoricici_3000x1200._CB406129560_.jpg"
            alt="First slide"
          />
        </MDBView>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_3000x1200._CB407658175_.jpg"
              alt="Second slide"
            />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Jewellery/GW/unrec/GW_PC_3000-1200._CB406737490_.jpg"
              alt="Third slide"
            />
          </MDBView>
          </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/herotator_gw_pigeon_3000x1200._CB404927677_.jpg"
              alt="Fourth slide"
            />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img
                  className="d-block"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/August/Headsets/realmeClassic/salenow/Tall_hero_3000x1200._CB407739539_.jpg"
                  alt="Fifth slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>


      {/*Product id, title, price, rating, image */}
      <div className="home-row">
      <Product 
      id= "12321341"
      title="The Lean Startup: How Constant Innovation creates"
      price={1200}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
      />
      <Product 
      id= "12321341"
      title="Mi Smart Band 4- India's No.1 Fitness Band"
      price={2229}
      rating={5}
      image="https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_UY327_FMwebp_QL65_.jpg"
      />
      <Product 
      id= "89329899"
      title="Lifelong Power Pro 500-Watt Mixer Grinder with Jars"
      price={1249}
      rating={4}
      image="https://m.media-amazon.com/images/I/612Wn2npFkL._AC_UY327_FMwebp_QL65_.jpg"
      />
      <Product 
      id= "19098079"
      title="Wired Stereo Gaming Headset"
      price={3456}
      rating={5}
      image="https://m.media-amazon.com/images/I/71mmXKj-96L._AC_UY327_FMwebp_QL65_.jpg"
      />
       <Product
      id= "19098079"
      title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM)"
      price={17499}
      rating={3}
      image="https://images-eu.ssl-images-amazon.com/images/I/41+xWzgV8jL._AC_US240_FMwebp_QL65_.jpg"
      />
      </div>
      <div className="home-row">
      <Product 
      id= "12321340"
      title="Mi Notebook 14"
      price={43999}
      rating={5}
      image="https://images-eu.ssl-images-amazon.com/images/I/41VYtP5KUHL._AC_US240_FMwebp_QL65_.jpg"
      />
      <Product 
      id= "45673890"
      title="Fluke Pocket Digital Multimeter"
      price={3200}
      rating={5}
      image="https://images-eu.ssl-images-amazon.com/images/I/41M5ekG6ZVL._AC_US240_FMwebp_QL65_.jpg"
      />
      <Product 
      id= "12321341"
      title="Amazon-Brand-Solimo 2 Door FoldableWardrobe"
      price={1599}
      rating={5}
      image="https://m.media-amazon.com/images/I/91p-I01HXEL._AC_UL480_FMwebp_QL65_.jpg"
      />
      <Product 
      id= "12329340"
      title="Amazon Brand-Solimo Fabric"
      price={699}
      rating={4}
      image="https://m.media-amazon.com/images/I/A1nKCh+iiNL._AC_UL480_FMwebp_QL65_.jpg"
      />
      <Product 
      id= "12321341"
      title="Echo Plus(2nd Gen) Premium Sound Powered by Dolby"
      price={9999}
      rating={4}
      image="https://images-eu.ssl-images-amazon.com/images/I/61ZJvf5xWBL._AC_UL320_SR320,320_.jpg"
      />
      </div>
      <div className="home-row">
      <Product 
      id= "12321341"
      title="Herbal Strategi Cold Fogging Outdoor liquid- 1L"
      price={770}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/61ygmI064TL._SY879_.jpg"
      />
      <Product 
      id= "12321901"
      title="Alloy Solly's Men Polo-Red T-Shirt"
      price={699}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/81A-qjE28yL._UY879_.jpg"
      />
      <Product 
      id= "12321341"
      title="Anni Designer Indian Women's Kalamkari Silk Saree"
      price={2428}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/910KJPiGcYL._UY879_.jpg"
      />
      <Product 
      id= "12321341"
      title="VOUCH Blue Medical PPT"
      price={369}
      rating={5}
      image="https://images-eu.ssl-images-amazon.com/images/I/41sTz5yXSXL._AC_SX184_.jpg"
      />
      <Product 
      id= "12321341"
      title="Other Rayon Anarkali Saree"
      price={2229}
      rating={5}
      image="https://m.media-amazon.com/images/I/41RK2J7bo+L.__AC_SY200_.jpg"
      />
      </div>
    </div>

    );
  }
  
  export default Home;
  
       
