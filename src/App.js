import'./App.css';
import { IoIosMail ,IoIosArrowDown,IoIosStar, IoIosStarHalf,IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { HiSun } from "react-icons/hi";
import { FaWhatsapp,FaUniversity,FaHandPointRight } from "react-icons/fa";
import { TiSocialTwitter,TiSocialFacebook,TiSocialGooglePlus,TiSocialLinkedin,TiSocialInstagram,
  TiSocialYoutube,} from "react-icons/ti";
  import { PiQuotesFill } from "react-icons/pi";
  import { GiTeacher,GiUpgrade } from "react-icons/gi";
  import { MdSupportAgent } from "react-icons/md";
  import { FaHandsHoldingChild } from "react-icons/fa6";
  import {HiUserGroup,HiComputerDesktop } from "react-icons/hi2";

  import logo from'./image/logo.svg';
  import slider from'./image/slider img 1.webp';
  import offered1 from'./image/offered1.webp';
  import offered2 from'./image/offered2.webp'; 
  import offered3 from'./image/offered3.webp'; 
  import offered4 from'./image/offered4.webp'; 
  import offered5 from'./image/offered5.webp'; 
  import offered6 from'./image/offered6.webp';
  import about from'./image/aboutus.webp';
  import happyper from'./image/student.jpg';
  import happy1 from'./image/happy-students img.webp';
  import happy2 from'./image/happy student.png';
  import img1 from'./image/18.png';
  import img2 from'./image/15.png';
  import img3 from'./image/16.png';
  import img4 from'./image/5.png';
  import place1 from'./image/Zenex-Solutions.png';
  import place2 from'./image/templatemela.png';
  import place3 from'./image/sokf.png';
  import place4 from'./image/Lv-infotech01.png';
  import place5 from'./image/Codelab7.png';
  import flogo from'./image/footer logo.svg';
           
function App() {
  return (
    <div>
    {/* *********Top-Menu Start********* */}
    <div className='top-menu'>
    <div className='container'>
      <div className='flex'>
        <div className='flex'>
           <div className='flex top-right'>
        <IoIosMail></IoIosMail>
      <p className='top-text'>info@cdmi.in</p>
      </div>
      <div className='flex'>
        <HiSun></HiSun>
        <p className='top-text'>Verify Certificate</p>
      </div>
    </div>
    <div className='top-center'>
      <p>HAVE ANY QUESTION ? +91 90333 16003</p>
    </div>
    <div className='flex'>
              <TiSocialFacebook className='top-icon'></TiSocialFacebook> 
              <TiSocialTwitter className='top-icon'></TiSocialTwitter> 
              <TiSocialGooglePlus className='top-icon'></TiSocialGooglePlus>
              <TiSocialLinkedin className='top-icon'></TiSocialLinkedin>
              <TiSocialInstagram className='top-icon'></TiSocialInstagram>
              <TiSocialYoutube className='top-icon'></TiSocialYoutube>
              <FaWhatsapp className='top-icon'></FaWhatsapp>
    </div>
   </div>
   </div>
   </div>

   {/* Top-menu end */}

      {/* Main- Menu  Start*/}
      <div className='container'>
        <div className='flex main-menu'>
          <div className='main-logo'>
            <img src={logo}></img>
          </div>
          <div className='main-header'>
            <ul className='flexs'>
              <li><a>HOME</a></li>
              <li>COURSE <IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
              <li>ACTIVITIES<IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
              <li>BLOG </li>
              <li>KNOW US <IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
              <li>GET IN TOUCH</li>
              <li className='student'>STUDENT ZONE <IoIosArrowDown className='main-icon'></IoIosArrowDown></li>
            </ul>
          </div>
        </div>
      </div>

   {/* Main- Menu  End*/}


   {/* Main-Menu-Slider Start*/}

        <img src={slider} className='Slider-img'></img>
        
   {/* Main-Menu-Slider End*/}


   {/* OFFERED COURSES Start */}

  <div className='spacer container offered'>
      <p className='offered-s'>CREATIVE COURSES
        <div className='offered-courses' ></div>
      </p>
          <h1>OFFERED COURSES</h1>
          <div className='flex offered-row'>
            <div>
              <img src={offered1}></img>
              <h2>Devlopment courses</h2>
              <div className=' flex offered-row2'>
            <div>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStarHalf></IoIosStarHalf></i>
            </div>
                <button><a>Know more..!</a></button>
              </div>
            </div>  
            <div>
              <img src={offered2}></img>
              <h2>Design courses</h2>
              <div className=' flex offered-row2'>
            <div>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStarHalf></IoIosStarHalf></i>
            </div>
                <button><a>Know more..!</a></button>
              </div>
            </div>  

            <div>
              <img src={offered3}></img>
              <h2>Programming IT</h2>
              <div className=' flex offered-row2'>
            <div>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStarHalf></IoIosStarHalf></i>
            </div>
                <button><a>Know more..!</a></button>
              </div>
            </div>  

            <div>
              <img src={offered4}></img>
              <h2>Trendy Courses</h2>
              <div className=' flex offered-row2'>
            <div>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStarHalf></IoIosStarHalf></i>
            </div>
                <button><a>Know more..!</a></button>
              </div>
            </div>  

            <div>
              <img src={offered5}></img>
              <h2>Civil.Mech.Engineering</h2>
              <div className=' flex offered-row2'>
            <div>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStarHalf></IoIosStarHalf></i>
            </div>
                <button><a>Know more..!</a></button>
              </div>
            </div>  

             <div>
              <img src={offered6}></img>
              <h2>Business Devlopment</h2>
              <div className=' flex offered-row2'>
            <div>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStar></IoIosStar></i>
                  <i><IoIosStarHalf></IoIosStarHalf></i>
            </div>
                <button><a>Know more..!</a></button>
              </div>
            </div>  
      </div>
      
      <div>
        <button className='view-btn'>View All Courses</button>
      </div>

    </div>
   {/* OFFERED COURSES End */}


{/* **************About Us Start************ */}
<div className='aboutus'>
  <div className='about-left'>
    <p className='about'>ABOUT US
        <div className='about-colorsing'></div>
    </p>
    <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
    <p className='about-text'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
    <button className='about-btn'><a>Enroll Now..!</a></button>
  </div>
  <div className='about-right'>
    <img src={about}></img>
    <div className='about-shadow'></div>
  </div>
</div>

{ /* ***********About Us End***********  */}

{ /* ***********keybord part start***********  */}

<div className='keybord spacer'>

  <div className='container keybord1'>
    <div>
      <img src={img1}></img>
      <h2>18000+</h2>
      <h3>HAPPY STUDENTS</h3>
    </div>
    <div>
      <img src={img2}></img>
      <h2>10+</h2>
      <h3>CERTIFICATION APPROVAL</h3>
    </div>
    <div>
      <img src={img3}></img>
      <h2>100+</h2>
      <h3>CREATIFIED TEACHER</h3>
    </div>
    <div>
      <img src={img4}></img>
      <h2>12000+</h2>
      <h3> STUDENTS PLACED</h3>
    </div>
  </div>
</div>

{ /* ***********Keybord part End***********  */}

{ /* *************HAPPY STUDENTS Start **************/ }

  <div className='container spacer flex happy'>
    <div className='happy-left'>
      <p className='about'>HAPPY STUDENT
        <div className='about-colorsing'></div>
      </p> 
      <h1>ALUMUNI SPEAK</h1>
      <div className='flex happystudent-flex'>
        <i className='quotes'><PiQuotesFill></PiQuotesFill></i>
        <div className='icon-flex-right'>
          <i><IoIosArrowBack></IoIosArrowBack></i>
          <i><IoIosArrowForward></IoIosArrowForward></i>
        </div>
      </div>
      <p>Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training.</p>
      <div className='flex happy-text'>
        <div className='happy-text1'>
          <img src={happyper}></img>
        </div>
        <div className='happy-text2'>
          <h4>GOTI SHRUTI</h4>
          <h5 style={{fontStyle:'italic', fontSize:'15px'}}>Android Devloper@ KD Infotech</h5>
        </div>
      </div>
    </div>
    <div className='happy-right'>
      <img src={happy1} className='happy1'></img>
      <img src={happy2} className='happy2'></img>
    </div>
  </div>
 {/* *************HAPPY STUDENTS End************* */}

 {/* *************READ OUR DIFFERENCE START************* */}
<div className='bgcolor'>
  <div className='container offered '>
    <p className='offered-s' style={{fontSize:'14px', paddingTop:'30px' }}>READ OUR DIFFERENCE
        <div className='offered-courses' style={{ marginTop:'17px' }} ></div>
      </p>
          <h1>WHY CHOOSE CREATIVE</h1>
          <div className='flex offered-row'></div>
  </div>
  <div class='choose-creative container'>
                      <div>
                        <h1><GiTeacher class='icon1'></GiTeacher></h1>
                        <h3>Industry Experts As Trainers</h3>
                        <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                      </div>
                      <div>
                        <h1><HiUserGroup class='icon2'></HiUserGroup></h1>
                        <h3>Latest Curriculum</h3>
                        <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                      </div>
                      <div>
                        <h1><HiComputerDesktop class='icon3'></HiComputerDesktop></h1>
                        <h3>Latest Technology</h3>
                        <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                      </div>
                  </div>
                  <div class='choose-creative container'>
                      <div>
                        <h1><MdSupportAgent  class='icon4'></MdSupportAgent ></h1>
                        <h3>Interview Assistance</h3>
                        <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                      </div>
                      <div>
                        <h1><GiUpgrade class='icon5'></GiUpgrade></h1>
                        <h3>Free Upgradation</h3>
                        <p>We will be provided free upgradation for any newer version of the course you have.</p>
                      </div>
                      <div>
                        <h1><FaHandsHoldingChild class='icon6'></FaHandsHoldingChild></h1>
                        <h3>Lifetime Support</h3>
                        <p>We will provide you lifetime support on all the courses you learned from us.</p>
                      </div>
                </div>
          </div> 
        
        


 {/* *************READ OUR DIFFERENCE END************* */}

 {/* **************STUDENT PLACEMENT START*************** */}

  <div class='placement '>
          <div class='container offered'>
            <div class='student-head  spacer'>
                  <p class='stu1-head'>
                    <span>STUDENT PLACEMENT</span>
                  </p>
                  <p class='stu2-head'>
                      <h1>OUR RECRUITMENT PARTNERS</h1>
                  </p>
              <div> 
                  <img src={place1}></img> 
                  <img src={place2}></img>       
                  <img src={place3}></img>       
                  <img src={place4}></img>       
                  <img src={place5}></img>       

              </div>
            </div>
            <div className='demand'>
              <p className='our_d'>Our Demanded Course -</p>
              <div className='parent_btn'>
                <div className='btn3'>
                  <p className='multi'>Multimedia Training Institute In Varachha</p>
                  <p className='multi'>spoken english class in katargam</p>
                  <p className='multi'>Web development training in katargam</p>
                  <p className='multi'>Best animation training course</p>
                </div>
                <div className='btn3'>
                  <p className='multi'>C++ Programming Language Training Institute In Varachha</p>
                  <p className='multi'>Python Training Institute In Varachha</p>
                  <p className='multi'>Adobe illustrator design</p>
                  <p className='multi'>Adobe xd design training institute in varachha</p>
                </div>
                <div className='btn3'>
                  <p className='multi'>Multimedia Training Institute In Varachha</p>
                  <p className='multi'>spoken english class in katargam</p>
                  <p className='multi'>Web development training in katargam</p>
                  <p className='multi'>Best animation training course</p>
                </div>
                <p className='show'>Show More</p>
              </div>
            </div>
          </div>
        </div>
 {/* **************STUDENT PLACEMENT END*************** */}


{/* *******************START FOOTER *************** */}
<footer>
          <div className='footer-bg'>
            <div className='footer-logo '>
              <img src={flogo}></img>
              <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <span>FOLLOW US ON</span>
              <p className='icon1'>  
                 <i> <TiSocialFacebook></TiSocialFacebook></i> 
                 <i><TiSocialTwitter></TiSocialTwitter></i>  
                 <i><TiSocialGooglePlus></TiSocialGooglePlus></i> 
                 <i><TiSocialLinkedin></TiSocialLinkedin></i> 
                 <i><TiSocialInstagram></TiSocialInstagram></i> 
                 <i><TiSocialYoutube></TiSocialYoutube></i> 
                 <i><FaWhatsapp></FaWhatsapp></i> 
              </p>
            </div>
            <div className='row2'>
              <p>FEATURE LINKS</p>
                <ul>
                <li><i><FaHandPointRight></FaHandPointRight></i>About Us</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Blogs</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Join Us</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Company Login</li>
                <li><i><FaHandPointRight></FaHandPointRight></i>Certificate Verification</li>
                </ul>
            </div>
            <div className='row3'>
              <p className='contact' >CONTACT US</p>
              <h4>HEAD OFFICE - YOGICHOWK</h4>
              <p className='address'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <p className='number'>Mo : +91 90333 16003</p>
              <h4>OTHER BRANCHES</h4>
              <ul>
                <li><i><FaUniversity></FaUniversity></i>Katargam</li>
                <li><i><FaUniversity></FaUniversity></i>Mota Varachha</li>
                <li><i><FaUniversity></FaUniversity></i> Adajan</li>
                <li><i><FaUniversity></FaUniversity></i> Navsari</li>
                </ul>
            </div>
          </div>
        </footer>

{/* *******************END FOOTER *************** */}


</div>
    
  );
}

export default App;
