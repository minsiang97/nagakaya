import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import company from './images/company.jpg'
import nagakaya from './images/nagakaya.png'
import quality from './images/quality.png'
import license from './images/license.png'
import satisfaction from './images/satisfaction.png'
import motor from './images/factory.jpg'
import motor2 from './images/factory2.jpg'
import Aos from 'aos'
import {MdPhoneInTalk, MdLocationOn, MdEmail} from 'react-icons/md'
import { SocialIcon } from 'react-social-icons';
import {RiCheckFill} from 'react-icons/ri'
import "aos/dist/aos.css"
import './App.css';

function App() {
  useEffect(() => {
    Aos.init({duration : 1000})
  }, [])
  return (
    <>
    <Container>
      <Row>
        <div className="title-div">
          <h1 className="nagakaya mr-2">NAGA KAYA</h1>
          <h2 className="align-bottom title mr-2">INDUSTRIES</h2>
          <h3 className="align-bottom title">SDN.BHD.</h3>
        </div>
      </Row>
    </Container>
    <Container className="mt-5 mb-5">
      <Row>
        <img src={company} className="w-100"></img>
      </Row>  
    </Container>
    <Container className="mt-5 pb-5">
      <div data-aos="fade-up" className="text-center about-us">
        <h1 className="about-us-title">About Us</h1>
      </div>
      <Row className="mt-5 justify-content-around">
        <Col md={6} xs={12}>
          <div data-aos="fade-up" className="about-us">
            <p><span className="name">NAGAKAYA</span> is one of the manufacturer in Malaysia producing high quality, safety and durable motor-
    cycle tyres, bicycle tyre . Our company will be investing into the production of Solid tyre and truck tyre in 2020 and produce quality tyres with highest quality compounding technology, focusing in environmental friendly production technique using Biomass fuel and Green Energy.</p>
            <p>In 2020, we expanded our marketing into Online business using our local internet selling network called LAZADA and SHOPEE so that we can sell our product directly to the end user, under the brand FARELY. Further we also aim to sell more high quality motor-cycle to heavy usage end user like courier service and food delivery staff all over Malaysia through our internet system.</p>
            <p>TWO of our main brand are FARELY & UNITED TYRE, and there are also some other  OEM brand in Malaysia like MICHI-YAMA, ZIME, DUROMAX, TERRA, FULLRUN and YINBAO.</p>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div data-aos="fade-up" className="about-us">
          <p>We are also one of the approved vendor to supply tyre to our National Motor-cycle maker MODENAS under the brand EMOS TYRE. And we are to enter other motor-cycles maker after we have expanded our production capacity in 2021.</p>
            <p>We will constantly expanding our product range and sizes of our motorcycle tyres like 120/70 x 17 and 80/90 x 14” by 2021.  and also marketing motorcycle And motor-cycle Engine Oil , spare parts and accessories will be also added to our internet selling so to achieve a higher sales volume thus  offering the best selection of quality product to all our customer.</p>
            <p>By 2020, we will be collaborating with Nano Malaysia Sdn. Bhd. in the development of Nano Silica technology using Biomass system , to use as one of our Green materials for the production of our tyre which will improve our quality further and also more Environmental friendly .</p>
            
          </div>
          
        </Col>
      </Row>
    </Container>
    <Container className="mb-5">
      <Row className="justify-content-center">
        <Col md={9} xs={12}>
          <div data-aos="fade-right" className="text-center">
            <img src={nagakaya} className="w-100"></img>
          </div>
        </Col>
      </Row>
        
    </Container>
    <Container className="mt-5 label-container">
      <Row className="justify-content-center">
        <Col md={4} xs={12} className="text-center">
          <div data-aos="fade-left">
            <img src={quality} className="label"></img>
            <p className="label-text">Top Quality Materials</p>
          </div>
          
        </Col>
        <Col md={4} xs={12} className="text-center">
          <div data-aos="fade-left">
            <img src={license} className="label"></img>
            <p className="label-text">Bonded & Insured</p>
          </div>

        </Col>
        <Col md={4} xs={12} className="text-center">
          <div data-aos="fade-left">
            <img src={satisfaction} className="label"></img>
            <p className="label-text">Best Price with On Time Delivery</p>
          </div>

        </Col>
      </Row>
    </Container>
    <Container className="mt-5 pb-5 vision-mission">
      <Row>
        <Col md={6} xs={12}>
          <div data-aos="fade-right">
            <img src={motor} className="w-100"></img>
          </div>
          
        </Col>
        <Col md={6} xs={12} className="vision">
          <div data-aos="fade-left" className="vision-div">
            <p className="vision-title">Vision & Mission</p>
            <p>We strive to become the highest standard and world-class tyre company, with a strong global brand identity and a loyal customer base.</p>
            <p>To create and retain lifelong customers by providing the best products and the finest service.</p>
            <p>Only the best acceptable –and the best cam always be better. Delivering quality product and excellent service is the responsibility of every NAGAKAYA Industries employee and earns the long term loyalty of our customers.</p>
          </div>
          
        </Col>
      </Row>
      <Row className="flex-row-reverse mt-5 pt-5">
        <Col md={6} xs={12}>
          <div data-aos="fade-left">
            <img src={motor2} className="w-100"></img>
          </div>
          
        </Col>
        <Col md={6} xs={12} className="value">
          <div data-aos="fade-right" className="value-div">
            <p className="value-title">Our Values</p>
            <ul className="value">
              <li>Develop highly discipline, professional, efficient and agile work force.</li>
              <li>Delivering quality product and excellent service is the responsibility of our employee.</li>
              <li>Achieve world class tyre manufacturer in competitive orientation, communication and approaches.</li>
              <li>Focus on customer needs, understand customers requirement and committed to customers strategy.</li>
              <li>Cultivate safety and camaraderie in the workplace.</li>
            </ul>
          </div>
          
        </Col>
      </Row>
    </Container>
    <Container className="choose-us-container">
      <div data-aos="slide-right">
        <h1 className="why-us">Why Us?</h1>
      </div>
      <div data-aos="slide-right">
        <p className="choose-us-text">We are one of the leading tyre manufacturer in Malaysia and we've been here for years!</p>
      </div>
      <Row data-aos="slide-right" className="mt-5 mb-5">
        <Col md={1} xs={2}>
          <RiCheckFill size={50} color="rgb(36, 157, 227)"></RiCheckFill>
        </Col>
        <Col md={6} xs={10}>
          <p className="pt-2 text">Product in good quality</p>
        </Col>  
      </Row>
      <Row data-aos="slide-right" className="mt-5 mb-5">
        <Col md={1} xs={2}>
          <RiCheckFill size={50} color="rgb(36, 157, 227)"></RiCheckFill>
        </Col>
        <Col md={6} xs={10}>
          <p className="pt-2 text">More than 10 years professional experience</p>
        </Col>  
      </Row>
      <Row data-aos="slide-right" className="mt-5 mb-5">
        <Col md={1} xs={2}>
          <RiCheckFill size={50} color="rgb(36, 157, 227)"></RiCheckFill>
        </Col>
        <Col md={6} xs={10}>
          <p className="pt-2 text">Good reputation in the end-consumer market</p>
        </Col>  
      </Row>
    </Container>



    <Container fluid className="contact-container">
      <Row className="justify-content-center mt-5">
        <Col md={5} xs={12}>
          <p className="location">Locate Us At :</p>
          <Row>
            <Col lg={1} md={2} xs={2}>
              <MdLocationOn size={30}></MdLocationOn>
            </Col>
            <Col md={10} xs={9}>
              <p>No 2A, Laluan Perusahaan Menglembu 10, Kawasan Perusahaan Menglembu,31450,Ipoh.</p>
            </Col>
          </Row>
          
        </Col>
        <Col md={5} xs={12}>
          <p className="location">Contact :</p>
          <Row>
            <Col lg={1} md={2} xs={2}>
              <MdPhoneInTalk size={30}></MdPhoneInTalk>
            </Col>
            <Col md={10} xs={9}>
              <p>016-5508826</p>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col lg={1} md={2} xs={2}>
              <MdEmail url="mailto:nagakaya.com@gmail.com" size={30}></MdEmail>
            </Col>
            <Col md={10} xs={9}>
              <p>nagakaya.com@gmail.com</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
    
    </>
  );
}

export default App;
