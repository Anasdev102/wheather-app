import './App.css';
import {use, useEffect, useState} from 'react';
// material Ui components
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from "@mui/material/styles";

import Container from '@mui/material/Container';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
// EXTERNEL LIBRARIES
import axios from 'axios';
import moment from 'moment/moment';
import "moment/min/locales"
import { useTranslation } from 'react-i18next';

moment.locale("ar");
const theme = createTheme({
  typography: {
    fontFamily : ["ARB"]
  }
})

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ar")
   
  const [dateAndTime, setDateAndTime] = useState("")
  const [temp, setTemp] = useState({
    number:null,
    description : "",
    min: null,
    max: null,
    icon : null
  });

// handel change language
  function handleLanguageChange (){
    if(language === "en"){
      setLanguage("ar");
      moment.locale("ar");
    setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))

    }else{
      setLanguage("en");
      moment.locale("en");
    setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))

    }
  }
  
  useEffect(()=>{
    i18n.changeLanguage(language)
  },[language])
  useEffect(()=>{
    setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
    let cancelAxios = null

    // Make a request for a user with a given ID
    axios
      .get(
          'https://api.openweathermap.org/data/2.5/weather?lat=23.5896&lon=13.9284&appid=c56874f5ab2d9291e08968ed720d7b87',
          {
            cancelToken: new axios.CancelToken((c)=>{
              cancelAxios = c;
            })
          }

      )
      .then(function (response) {
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const responseDescription = response.data.weather[0].description;
        const Max = Math.round(response.data.main.temp_max - 272.15)
        const Min = Math.round(response.data.main.temp_min - 272.15)
        const responseIcon = response.data.weather[0].icon
        setTemp({
          number:responseTemp,
          description:responseDescription,
          min:Min,
          max:Max,
          icon : `https://openweathermap.org/img/${responseIcon}/10d@2x.png`
        })
        
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

      return ()=>{
        cancelAxios();
      }
  },[])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
         <Container maxWidth="md" >
          <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
              {/* CARD */}
                <div style={{
                  background:'rgb(28 52 91 / 36%)',
                   color:'#fff',
                   padding:'10px', 
                   borderRadius:'0px 15px',
                   boxShadow:'0px 11px 1px rgba(0,0,0,0.05)',
                   width:'100%'
                   }}
                   dir={language === "ar"?"rtl":"ltr"}
                >
                    {/* content of card */}
                    <div  >
                      {/* City & Time */}
                          <div style={{display:'flex', justifyContent:'space-around', alignItems:'center' ,flexDirection: `${language === 'en'? "row-reverse":"row" }`}} dir='rtl'>
                            <Typography variant="h3" style={{marginRight:'20px'}}>
                                {t("casablanca")}
                              </Typography>
                              <Typography variant="h5" style={{marginRight:'25px'}}>
                                {dateAndTime}
                              </Typography>
                          </div>
                      {/* City & Time */}
                      <hr/>

                    {/* Container of  Degree & Description & Cloud Icon */}
                      <div style={{display:'flex', justifyContent:'space-around'}}>
                        {/* Degree & Description */}
                            <div>
                              {/* Temp */}           
                                <div style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
                                  <Typography variant="h3" 
                                    style={{textAlign:'right'}}
                                  >
                                    {temp.number}
                                  </Typography>
                                  {/*  Temp Image */} 
                                   <img src={'https://openweathermap.org/img/wn/10d@2x.png'}/>          
                                  {/*  Temp Image */}           

                                </div>
                              {/* Temp */}  
                                <Typography variant="h6">
                                     {t(`${temp.description}`)}
                                </Typography>
                                {/* Min & Max */} 
                                  <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <h5>  {t("min")} : {temp.min} </h5>
                                    <h5>  | </h5>
                                        
                                    <h5> {t("max")} : {temp.max} </h5>

                                  </div> 
                                {/* Min & Max */}  
                                
                            </div>
                        {/* Degree & Description */}

                        <CloudIcon sx={{fontSize:'200px', color:'white'}}/>
                    {/* Container of  Degree & Description & Cloud Icon */}
                      
                      </div>
                    </div>
                    {/* content of card */}
                    
                </div>
              {/* CARD */}  
              {/* Translation Container */}  
                <div style={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'start',
                    marginTop:'20px'
                 }}
                >
                  <Button style={{color:'#fff', textAlign:'left'}} variant="text" 
                  onClick={handleLanguageChange}
                  >
                    {language === "ar" ? "English" : "العربية"}
                  </Button>

                </div>
              {/* Translation Container */}  

          </div>
         
         </Container>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
