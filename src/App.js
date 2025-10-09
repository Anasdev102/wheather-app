import './App.css';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from "@mui/material/styles";
// material Ui components
import Container from '@mui/material/Container';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';

const theme = createTheme({
  typography: {
    fontFamily : ["ARB"]
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
         <Container maxWidth="sm" >
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
                   dir='rtl'
                >
                    {/* content of card */}
                    <div  >
                      {/* City & Time */}
                          <div style={{display:'flex', justifyContent:'start', alignItems:'end'}} dir='rtl'>
                            <Typography variant="h3" style={{marginRight:'20px'}}>
                                الرياض
                              </Typography>
                              <Typography variant="h5" style={{marginRight:'25px'}}>
                                10-10-2025  الاثنين
                              </Typography>
                          </div>
                      {/* City & Time */}
                      <hr/>

                    {/* Container of  Degree & Description & Cloud Icon */}
                      <div style={{display:'flex', justifyContent:'space-around'}}>
                        {/* Degree & Description */}
                            <div>
                              {/* Temp */}           
                                <div>
                                  <Typography variant="h3" 
                                    style={{textAlign:'right'}}
                                  >
                                    38
                                  </Typography>
                                  {/* Todo: Temp Image */}           
                                  {/* Todo: Temp Image */}           

                                </div>
                              {/* Temp */}  
                                <Typography variant="h6">
                                    broken clouds
                                </Typography>
                                {/* Min & Max */} 
                                  <div style={{display:'flex', justifyContent:'space-around'}}>
                                    <h5>  Min: 34 </h5>
                                    <h5>  |</h5>
                                        
                                    <h5>  Max: 38</h5>

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
                  <Button style={{color:'#fff', textAlign:'left'}} variant="text">إنجليزي</Button>
                </div>
              {/* Translation Container */}  

          </div>
         
         </Container>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
