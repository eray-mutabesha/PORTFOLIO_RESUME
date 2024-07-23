import './App.css'
import { Box, Stack,Button,Typography, duration} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHouse ,faUser,faLaptopCode,faAward,faPhone,faSuitcase,faBars} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import ImageDemo from './components/ImageDemo';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'





function App() {

  useEffect(() => {
    AOS.init({duration:1000}); // Initialisation de AOS
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const awardRef = useRef(null)
  const contactRef = useRef(null)
  const menuRef = useRef(null)
  
  const scrollToSection = (homeRef,aboutRef,skillsRef,workRef) => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    workRef.current.scrollIntoView({ behavior: 'smooth' });
    awardRef.current.scrollIntoView({ behavior: 'smooth' });
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 
 const menu_deroulant = () => {
  if (menuRef.current) {
    menuRef.current.style.marginLeft = menuRef.current.style.marginLeft === '0px' ? '-400px' : '0px';
  }
};
  const emailAddress = 'eraymutabesha4@gmail.com'; 


  return (
    
    <>
      
      <div className='flex'>
      
{/* ............................one one one one................................. */}
        <Box ref={menuRef} sx={{
        
         background: "#1976d2",
          
          width:"160px",
          color:"white",
          height:"100vh",
          position:"fixed",
          display:"grid",
          zIndex:"20",
          transition:"0.5s",
          marginLeft: {
            xs: "-400px",
            md: "0px"
          },
          
        }}>

          <Box sx={{ 
          display:"grid",
          margin:"5px auto",
          width:"fit-content",
          marginTop:"100px"
          
          }}>
          
             
             <Button onClick={() => scrollToSection(homeRef)}  variant="contained" size="medium" sx={{
              height:"fit-content",
              background:"#1565c0" }}>
              <Typography><FontAwesomeIcon icon={faHouse} /> Home</Typography>
              </Button>
             
              <Button onClick={() => scrollToSection(aboutRef)}  variant="contained" size="medium" sx={{
              height:"fit-content",
              background:"#1565c0" }}>
              <Typography><FontAwesomeIcon icon={faUser }/> About</Typography>
              </Button>

              <Button onClick={() => scrollToSection(skillsRef)} variant="contained" size="medium" sx={{
              height:"fit-content",
              background:"#1565c0" }}>
              <Typography><FontAwesomeIcon icon={faLaptopCode }/> Skills</Typography>
              </Button>

              <Button onClick={() => scrollToSection(workRef)} variant="contained" size="medium" sx={{
              height:"fit-content",
              background:"#1565c0" }}>
              <Typography><FontAwesomeIcon icon={faSuitcase }/> Work</Typography>
              </Button>

              <Button onClick={() => scrollToSection(awardRef)} variant="contained" size="medium" sx={{
              height:"fit-content",
              background:"#1565c0" }}>
              <Typography><FontAwesomeIcon icon={faAward }/> Award</Typography>
              </Button>

              <Button onClick={() => scrollToSection(contactRef)} variant="contained" size="medium" sx={{
              height:"fit-content",
              background:"#1565c0" }}>
              <Typography><FontAwesomeIcon icon={faPhone }/> Contact</Typography>
              </Button>

              
        

          </Box>
        </Box>
      {/* twooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}
        <Box  sx={{
        
           width:{
              xs:"100%",
             md:"100%",
           },
             marginLeft:{
             xs: "0px",
            md: "160px"
           },
          zIndex:"10"
        }}>
       <Box sx={{
          marginTop:"0px",
          height:"fit-content",
          right:"10px",
          zIndex:"30",
          padding:"5px",
          fontSize:"30px",
          position:"fixed",
          display: {
            xs: "flex",
            md: "none"
          },
        }}>
          <FontAwesomeIcon icon={faBars} onClick={menu_deroulant}/> 
        </Box>

          
          {/* ....................................eray home....................................................... */}
         
     
     
     
     <Box ref={homeRef} sx={{
          border:"1px solid white",
          width:"90%" ,
          marginLeft:"auto",
          marginRight:"auto",
          
          }}>
        {/* ..................................dffsdferf */}
        <Box  id="home"   
         sx={{ 
         
          
          marginTop:"150px",
          alignItems:"center",
          display: {
            xs: "grid",
            sm: "flex"
          },
          gap:"100px"
        }}>
       
             <img src='public\ErayProfil.jpg' className='profil_picture'/>

             <Box  data-aos="zoom-in" sx={{
              alignItems:"center",
              height:"fit-content",
              
             }}>

              <Typography mt={2}>hello</Typography>
              <Typography variant="h3" mt={2}>I'M <span className='eray'>ERAY</span> MUTABESHA </Typography>
              <Typography mt={3} sx={{
                color:"rgba(58, 58, 58, 0.904)"
              }}>Fullstack Developer | No-code Webflow expert | Cofounder of <span className='eray'>@kVolts_lab </span>and <span className='eray'>Tony elumelu foundation</span> certified business manager.
                Experienced in building modern web applications and IoT solutions</Typography>
                
                
                <Stack direction="row" spacing={2} mt={2}>

                  <Box><Button variant="contained">resume</Button></Box>

                  <a href="https://www.linkedin.com/in/eray-mutabesha-186240256/">

                  <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
                    '&:hover': {
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}>
                    
                    <FontAwesomeIcon icon={faLinkedinIn } />
                    
                    </Box></a>

                  <a href='https://x.com/ErayMutabesha'>

                   <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
                    '&:hover': {
                      duration:"1.5s",
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}>
                    
                    <FontAwesomeIcon icon={faXTwitter} />
                    
                    </Box></a>

                  <a href='https://github.com/eray-mutabesha'>

                  <Box  sx={{
                    padding:"10px",
                    border:"0.5px solid rgba(211, 211, 211, 0.671)",
                    transition:"1s",
                    borderRadius:"7PX",
                    '&:hover': {
                      boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
                      cursor:"pointer"
                    },
                  }}>
                    
                    <FontAwesomeIcon icon={faGithub} /></Box></a>
                  
                </Stack>
                
             </Box>
          
        </Box>
        </Box>
{/* ......................................eray home end.................................... */}

        {/* .........................ABOUT ................................................................. */}
        <Box ref={aboutRef} sx={{
          margin:"40px ",
          border:"1px solid white"}}>

        <Box 
          data-aos="fade-up" sx={{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"300px",
          
          background:"white",
          zIndex:"15"
        }}>

        <Typography mt={-20} variant="h4" >About me</Typography>
        <Typography  mt={5} sx={{
          color:"rgba(92, 91, 91, 0.904)"
        }}>I am an enthusiastic web developer and entrepreneur who is passionate about innovation. I have extensive experience in full-stack development and possess skills in various frameworks/libraries such as jQuery, Laravel/InertiaJs, Codeigniter, VueJS/Nuxt, React, Bootstrap/TailwindCSS... My expertise lies in creating user-friendly interfaces and robust web applications/websites, and I have a proven track record in dynamic sectors like Fintech, IoT, and ERP. Whether I'm working independently or as part of a team, I always strive to deliver exceptional results that I can take pride in
          I am an enthusiastic web developer and entrepreneur who is passionate about innovation. I have extensive experience in full-stack development and possess skills in various frameworks/libraries such as jQuery, Laravel/InertiaJs, Codeigniter, VueJS/Nuxt, React, Bootstrap/TailwindCSS... My expertise lies in creating user-friendly interfaces and robust web applications/websites, and I have a proven track record in dynamic sectors like Fintech, IoT, and ERP. Whether I'm working independently or as part of a team, I always strive to deliver exceptional results that I can take pride in
          I am an enthusiastic web developer and entrepreneur who is passionate about innovation. I have extensive experience in full-stack development and possess skills in various frameworks/libraries such as jQuery, Laravel/InertiaJs, Codeigniter, VueJS/Nuxt, React, Bootstrap/TailwindCSS... My expertise lies in creating user-friendly interfaces and robust web applications/websites, and I have a proven track record in dynamic sectors like Fintech, IoT, and ERP. Whether I'm working independently or as part of a team, I always strive to deliver exceptional results that I can take pride in.</Typography>
        
        </Box>
        </Box>
        {/* .........................END OF ABOUT ................................................................. */}
        
        
        {/* ..............................SKILLS........................................................................ */}
       


  <Box sx={ {border:"1px solid white",margin:"40px ",}} ref={skillsRef}>

        <Typography variant="h4" mt={15} >STACK & DAILY USED TOOLS</Typography>

        <Box mt={5} sx={{
          display:"grid",
          
          gridTemplateColumns:{
            xs:"auto auto auto",
            sz:"auto auto auto auto",
            sv:"auto auto auto auto auto ",
            ss:"auto auto auto auto auto auto ",
            sm:"auto auto auto auto auto auto auto auto "}
        }} >

          <Box sx={{
             border:"0.5px solid rgba(211, 211, 211, 0.671)",
             transition:"1s",
             borderRadius:"15PX",
             height:"90px",
             width:"80px",
             textAlign:"center",
             '&:hover':{
               boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             },
          }}>
            
            <img src='public\javascriptImage.png' alt='logo' className='image_skill'/>
            <Typography >javascript</Typography>

          </Box>

          <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

           <img src='public\reactimage.png' alt='logo' className='image_skill'/>
           <Typography>React js</Typography>

         </Box>

         <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

           <img src='public\nodejsimage.png' alt='logo' className='image_skill'/>
           <Typography >Node js</Typography>

         </Box>

         <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            marginTop:{
              xs:"15px",
              sz:"0px"},
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
          
         }}>
           <img src='public\materialui.png' alt='logo' className='image_skill'/>
           <Typography >MaterialUI</Typography>
         </Box> 

         <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            marginTop:{
              xs:"15px",
              sv:"0px"},
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
          
         }}>
           <img src='public\SQLiteimage.png' alt='logo' className='image_skill'/>
           <Typography >Sqlite</Typography>
         </Box>

         <Box sx={{
            
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
             marginTop:{
              xs:"15px",
              ss:"0px"},
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
             
            },
          
         }}>
           <img src='public\htmlimage.png' alt='logo' className='image_skill'/>
           <Typography >HTML</Typography>
         </Box>
         <Box 

            sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            marginTop:{
              xs:"15px",
              sm:"0px"},
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

           <img src='public\sassimage.png' alt='logo' className='image_skill'/>
           <Typography >Sass</Typography>

         </Box>

         <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            marginTop:{
              xs:"15px",
              sm:"0px"},
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

           <img src='public\git.png' alt='logo' className='image_skill'/>
           <Typography >Git</Typography>

         </Box>

         <Box mt={2} sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },         
         }}>

           <img src='public\css3image.png' alt='logo' className='image_skill'/>
           <Typography >Css</Typography>

         </Box>

         <Box mt={2} sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            height:"90px",
            width:"80px",
            textAlign:"center",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",            
            },
         }}>

           <img src='public\figma.jpg' alt='logo' className='image_skill'/>
           <Typography >Figma</Typography>

         </Box>
          
        </Box>
        </Box>
      
{/* ...............................END OF SKILLS............................................................... */}


{/* ........................................PROJECTS......................................................... */}
        
<Box ref={workRef} sx={{
  margin:"40px ",
  textAlign:"justify"

}}>
        <Typography variant="h4"  mt={25}>FEATURED PROJECTS</Typography>

        
        
       
   
        <Box  mt={5} sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            transition:"1s",
            borderRadius:"15PX",
            background:"white",
            padding:"10px",
            display:{
              xs:"grid",
              sm:"flex"
            },
            gap:"20px",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
         }}>

        <Box>
        <ImageDemo />
        </Box>

        <Box>
         <Typography  variant="h4" className='eray'>SMS</Typography>
         <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus vitae aliquid ullam sint quae ut repellat facilis, repudiandae provident sequi quia nisi quis laborum soluta quam placeat consequuntur iusto.</Typography>
         <Button>Check it ou here </Button>
        </Box>

        </Box>
        </Box>

        
       
      {/* ...........................................END OF PROJECTS................................................... */}

        {/* .............................................AWARDS............................................ */}
        <Box ref={awardRef} className='award'     sx={{ 
          textAlign:"center",
          margin:"20px auto",
          
        }}>
      <Typography variant="h4" mt={20} className='eray' >
        Certificates & awards</Typography>


     <Box sx={{
      width:"80%",
      marginLeft:"auto",
      marginRight:"auto"
     }}>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={4}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
       <SwiperSlide>
       <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>Web developement</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
       </SwiperSlide>
      <SwiperSlide>
      <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>JS algorithms and...</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>JS algorithms and...</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>JS algorithms and...</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
      </SwiperSlide> 
      <SwiperSlide>
      <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"150px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='public\images.png' alt='image' className='freecodecamp_image'/>
              <Typography>JS algorithms and...</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
      </SwiperSlide> 
      ...
    </Swiper>
      </Box>
      </Box>
   

    {/* .........................................END OF AWARDS................................................... */}
      
      
      {/* contact................................................................. */}
      <Box ref={contactRef}  sx={{
    
    
    margin:"40px ",
   }}>
      <Typography variant="h4"  >CONTACT</Typography>
        <Typography variant="h5" mt={5} sx={{color:"rgba(92, 91, 91, 0.678)"}}>Get in Touch</Typography>

        <Box mt={2} data-aos="zoom-in-down"  sx={{
          width:"100%",
          display:{
            xs:"grid",
            ss:"flex"
          },
          gap:{
            xs:"20px",
            ss:""
          },
          justifyContent:{
            xs:"",
            ss:"space-between"
          }
        }}>

          <Box sx={{border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"10PX",
            width:{
              xs:"95%",
              ss:"45%"
            },
            height:"150px",
            textAlign:"center",
            padding:"10px",
            background:"white",
            transition:"1s",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
           }}>

         <img src='public\whatshapp-removebg-preview.png' alt='email' className='image_wtp_contact'/>
         <a href='https://wa.me/+250791434737?text=Hello%2C%20I%20am%20interested%20in%20your%20services'><Typography>+250 791434737</Typography></a>
         <Typography sx={{ color:"rgba(92, 91, 91, 0.678)"}}>Let's chat on whatsApp</Typography>
          
          </Box>

          <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"10PX",
            width:{
              xs:"95%",
              ss:"45%"
            },
            height:"150px",
            textAlign:"center",
            padding:"10px",
            background:"white",
            transition:"1s",
            '&:hover': {
              boxShadow:"0px 0px 15px 0px rgb(177, 175, 175)",
            },
            }}>

               <img src='public\eemm.png' alt='email' className='image_email_contact'/>
               <a  href={`mailto:${emailAddress}`}><Typography>eraymutabesha4@gmail.com</Typography></a>
               <Typography sx={{color:"rgba(92, 91, 91, 0.678)"}}>Email me</Typography>
          
          </Box>

        </Box>
        </Box>
          {/* END OF contact................................................................. */}  

          
          

          {/* footer...................................................................... */}
          <Box sx={{
            
            background:"rgba(3, 3, 3, 0.767)",
            width:"100%"
            }}>


          <Box mt={10} spacing={10}  sx={{
            display:"grid",
            gridTemplateColumns:{
              xs:"100% ",
              sm:"30% 30% 30%",
            },
            gap:{
              xs:"50px",
              sm:"",
            },
            justifyContent:"space-around",
            color:"white",
            padding:"25px"
            
          }}>
            <Box>
              <Typography variant='h5'>useful links</Typography>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Projects</Typography>
              <Typography>Awards</Typography>
              <Typography>Contact</Typography>
            </Box>
            <Box>
              <Typography variant='h5'>Contact me</Typography>
              <Typography>Rwanda :</Typography>
              <Typography>+250 791434737</Typography>
              <Typography>Email :</Typography>
              <Typography>eraymutabesha4@gmail.com</Typography>
            </Box>
            <Box>
              <Typography variant='h5'>About Eray</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat libero quisquam qui voluptas, nostrum eum itaque, incidunt nisi, minima sapiente perspiciatis delectus doloremque. Libero eaque laborum quas dicta beatae.</Typography>
            </Box>
          </Box>


          </Box>
        
        
      </Box>
      </div>
      </>
     
  )
}

export default App
