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
       
             <img src='/ErayProfil.jpg' className='profil_picture'/>

             <Box  data-aos="zoom-in" sx={{
              alignItems:"center",
              height:"fit-content",
              
             }}>

              <Typography mt={2}>hello</Typography>
              <Typography variant="h3" mt={2}>I'M <span className='eray'>ERAY</span> MUTABESHA </Typography>
              <Typography mt={3} sx={{
                color:"rgba(58, 58, 58, 0.904)"
              }}>Fullstack Developer within <span className='eray'>Nguvu Technology </span>Passionate about creating innovative projects,certified <span className='eray'>DISK</span> behavioral profiling expert..I thrive on building dynamic and intuitive web applications that deliver exceptional user experiences,
                Experienced in building modern web applications</Typography>
                
                
                <Stack direction="row" spacing={2} mt={2}>
                <a href="https://acrobat.adobe.com/id/urn:aaid:sc:eu:c6d90c0d-bb58-4231-84f7-228c35b62f96">
                <Box><Button variant="contained" >resume</Button></Box>
                </a>
                  

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
        <Box id="about1" ref={aboutRef} sx={{
          margin:"5%",
          
          border:"1px solid white"}}>

        <Box 
          data-aos="fade-up" sx={{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"300px",
          
          background:"white",
          zIndex:"15"
        }}>

        <Typography mt={20} variant="h4" >About me</Typography>
        <Typography  mt={5} sx={{
          color:"rgba(92, 91, 91, 0.904)"
        }}>
        Eray Mutabesha – Passionate and Innovative Developer
Welcome to my world! My name is Eray Mutabesha and I am a developer with 3 years of experience in the technology industry. My journey began within Nguvu Technology, a start-up where I had the opportunity to take on complex challenges and contribute to innovative projects.

Over time, my passion for technology and creation has allowed me to participate in prestigious competitions. During a hackathon organized by "Institut Français de Goma", our team won second place thanks to Yetu Museum: a platform dedicated to the exhibition and sale of works of art online. This project was selected as one of the top three, reinforcing my belief that technology can push the boundaries of creativity.

My expertise does not stop there. I also worked on personal and collaborative projects, where innovation, problem solving and teamwork became the drivers of my success.

Today, I continue my adventure by exploring new ideas, refining my skills and creating solutions that make a difference. Discover my projects and embark with me on this exciting quest for innovation.</Typography>
        
        </Box>
        </Box>
        {/* .........................END OF ABOUT ................................................................. */}
        
        
        {/* ..............................SKILLS........................................................................ */}
       


  <Box sx={ {border:"1px solid white",margin:"5%",}} ref={skillsRef} id="skills1">

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
            
            <img src='/javascriptImage.png' alt='logo' className='image_skill'/>
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

           <img src='/reactimage.png' alt='logo' className='image_skill'/>
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

           <img src='/nodejsimage.png' alt='logo' className='image_skill'/>
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
           <img src='/materialui.png' alt='logo' className='image_skill'/>
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
           <img src='/SQLiteimage.png' alt='logo' className='image_skill'/>
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
           <img src='/htmlimage.png' alt='logo' className='image_skill'/>
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

           <img src='/sassimage.png' alt='logo' className='image_skill'/>
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

           <img src='/git.png' alt='logo' className='image_skill'/>
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

           <img src='/css3image.png' alt='logo' className='image_skill'/>
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

           <img src='/figma.jpg' alt='logo' className='image_skill'/>
           <Typography >Figma</Typography>

         </Box>
          
        </Box>
        </Box>
      
{/* ...............................END OF SKILLS............................................................... */}


{/* ........................................PROJECTS......................................................... */}
        
<Box ref={workRef} id="projects1" sx={{
  margin:"5%",
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
        <Box ref={awardRef} id="award1"className='award'     sx={{ 
          textAlign:"center",
          margin:"20px auto",
          // border:"1px solid red"
          
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
        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:37bc1cda-7fa7-4558-b877-8b65234fbc4b" style={{textDecoration:"none"}}>
        <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"200px",
            height:"300px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='/methode-DISC.png' alt='image' className='freecodecamp_image'  style={{
                width:'120px',
                height:"120px",
                borderRadius:"50%",
                objectFit:"cover",
              }}/>
              <Typography>Harmonie Operationnelle</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                height:"50px",
                marginBottom:"-70px"
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by EclosionHub</Typography>
              </Box>
              
            </Box>
        </a>

      </SwiperSlide>












      <SwiperSlide>
      <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:f5946941-e62e-4c88-b9df-dd1c36ac5b38" style={{textDecoration:"none"}}>
      <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"200px",
            height:"300px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='/eclosionHub.png' alt='image' className='freecodecamp_image'  style={{
                width:'120px',
                height:"120px",
                borderRadius:"50%",
                objectFit:"cover",
              }}/>
              <Typography>EclosionHack 2024, hackathon</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                height:"50px",
                marginBottom:"-30px"
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by EclosionHub</Typography>
              </Box>
              
            </Box>
            </a>
      </SwiperSlide> 













      <SwiperSlide>
        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:62e541ff-e535-4c6c-a7af-df9306adcd8e" style={{textDecoration:"none"}}>
      <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"200px",
            height:"300px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='/wakisha.png' alt='image' className='freecodecamp_image'  style={{
                width:'120px',
                height:"120px",
                borderRadius:"50%",
                objectFit:"cover",
              }}/>
              <Typography>Marketing Digital</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                height:"50px",
                marginBottom:"-70px"
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by EclosionHub</Typography>
              </Box>
              
            </Box>
            </a>
      </SwiperSlide> 










      <SwiperSlide>
        <a href="https://www.freecodecamp.org/certification/Eray-mutabesha/responsive-web-design"  style={{textDecoration:"none"}}>
        <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"200px",
            height:"300px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='/images.png' alt='image' className='freecodecamp_image'   style={{
                width:'120px',
                height:"120px",
                borderRadius:"50%"
              }}/>
              <Typography>Responsive web design</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                height:"50px",
                marginBottom:"-70px"
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
        </a>
       </SwiperSlide>







       <SwiperSlide>
        <a href="https://www.freecodecamp.org/certification/Eray-mutabesha/javascript-algorithms-and-data-structures"  style={{textDecoration:"none"}}>
        <Box sx={{
            border:"0.5px solid rgba(211, 211, 211, 0.671)",
            borderRadius:"5PX",
            width:"200px",
            height:"300px",
            textAlign:"center",
            display:"grid",
            gap:"30px",
            background:"white"
            }}>
              
              <Box>
              <img src='/images.png' alt='image' className='freecodecamp_image'   style={{
                width:'120px',
                height:"120px",
                borderRadius:"50%"
              }}/>

              <Typography>Legacy algorithms and Data structures</Typography>
              </Box>
              <Box sx={{
                background:"rgb(182, 182, 182)",
                width:"100%",
                height:"50px",
                marginBottom:"-30px"
                
              }}>
              <Typography sx={{
                borderTop:"0.5px solid rgba(211, 211, 211, 0.671)",
                color:"rgba(92, 91, 91, 0.678)"}}>provide by freecodecamp</Typography>
              </Box>
              
            </Box>
        </a>
      </SwiperSlide>
      ...
    </Swiper>
      </Box>
      </Box>
   

    {/* .........................................END OF AWARDS................................................... */}
      
      
      {/* contact................................................................. */}
      <Box ref={contactRef} id="contact1" sx={{
    
    
    margin:"5% ",
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

         <img src='/whatshapp-removebg-preview.png' alt='email' className='image_wtp_contact'/>
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

               <img src='/eemm.png' alt='email' className='image_email_contact'/>
               <a  href={`mailto:${emailAddress}`}><Typography>eraymutabesha4@gmail.com</Typography></a>
               <Typography sx={{color:"rgba(92, 91, 91, 0.678)"}}>Email me</Typography>
          
          </Box>

        </Box>
        </Box>
          {/* END OF contact................................................................. */}  

          
          

          {/* footer...................................................................... */}
          <Box sx={{
            
            // background:"rgba(3, 3, 3, 0.767)",
            width:"100%"
            }}>


          <Box mt={30} spacing={10}  sx={{
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
         
            padding:"25px"
            
          }}>
            <Box>
              <Typography variant='h5'>useful links</Typography>
              <Typography><a href='#'  style={{textDecoration:"none",color:"rgba(92, 91, 91, 0.678)"}}>Home</a></Typography>
              <Typography><a href='#about1' style={{textDecoration:"none",color:"rgba(92, 91, 91, 0.678)"}}>About</a></Typography>
              <Typography><a href='#projects1'  style={{textDecoration:"none",color:"rgba(92, 91, 91, 0.678)"}}>Projects</a></Typography>
              <Typography><a href='#award1'  style={{textDecoration:"none",color:"rgba(92, 91, 91, 0.678)"}}>Awards</a></Typography>
              <Typography><a href='#contact1'  style={{textDecoration:"none",color:"rgba(92, 91, 91, 0.678)"}}>Contact</a></Typography>
            </Box>
            <Box>
              <Typography variant='h5'>Contact me</Typography>
              <Typography style={{color:"rgba(92, 91, 91, 0.678)"}}>Rwanda :</Typography>
              <Typography style={{color:"rgba(92, 91, 91, 0.678)"}}>+250 791434737</Typography>
              <Typography style={{color:"rgba(92, 91, 91, 0.678)"}}>Email :</Typography>
              <Typography style={{color:"rgba(92, 91, 91, 0.678)"}}>eraymutabesha4@gmail.com</Typography>
            </Box>
            <Box>
              <Typography variant='h5'>About Eray</Typography>
              <Typography style={{color:"rgba(92, 91, 91, 0.678)"}}>
              Fullstack Developer within Nguvu Technology Passionate about creating innovative projects,certified DISK behavioral profiling expert..I thrive on building dynamic and intuitive web applications that deliver exceptional user experiences, Experienced in building modern web applications
              </Typography>
            </Box>
          </Box>


          </Box>
        
        
      </Box>
      </div>
      </>
     
  )
}

export default App
