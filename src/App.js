import { Fragment, useState } from 'react';
import {Col, Row, Button, Container, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Clima from './components/Clima';





function App() {

  
  const [tiempo, setTiempo] = useState({
      estado: '',
      temperatura: '',
      temp_max: '',
      temp_min: '',
      humedad: '',
      viento:'',
      ciudad: '',
      presion: '',
      prob_lluvia: '',
      error: null
    });
  
  
    const handleSubmit  = async (e) => {
      e.preventDefault();      

      if(tiempo.ciudad){
        const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${tiempo.ciudad}&appid=f4ded7105c8d66a1699535e98ac5b8c9&units=metric`)
        const datos = await api.json();
        
        //Si la api trae datos con el useState cargo los valores
        if(datos){
          setTiempo({
            estado: datos.weather[0].main,
            temperatura: datos.main.temp,
            temp_max: datos.main.temp_max,
            temp_min: datos.main.temp_min,
            humedad: datos.main.humidity,
            viento: datos.wind.speed,
            ciudad: datos.name,
            presion: datos.main.pressure,
            prob_lluvia: datos.clouds.all,
            error: null,
          });
        }else{
          setTiempo({...tiempo, error: "Por favor escriba una ciudad válida"});
        }
      }

     
      }
    
      
 
      




  return (
    <Fragment>
       
      <h3
        style={
          {paddingTop:"30px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
         }
        }
      >Trabajo práctico adeudado</h3>
   
        <Container>
        <div
    style={
      {
        paddingTop:"50px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"limegreen"
      }
    }>
 
   
        
        <div className="row">
            
                <Form size="sm" className = "mb-1" >
                    <input
                    type="text"
                    placeholder="Ingrese una ciudad"
                    className="form-control"
                    display="flex"
                    onChange={(e) => setTiempo({...tiempo, ciudad: e.target.value})}
                    value = {tiempo.ciudad}
                    autoFocus
                    style={{backgroundColor:'aquamarine',borderColor:'ActiveBorder',position:'sticky',fontSize:'22px'}}
                    />
                </Form>
                <p className= "text-black">{tiempo.error ? tiempo.error: ""}</p>
          
        </div>
      
  
        <Row>
          <Button 
            variant="info"
            onClick={handleSubmit}
          >
          Traer clima
          </Button>
        </Row>
      
      
      <Row>
        <Col>
        <Clima
       
        tiempo = {tiempo}
        />
        </Col>
      </Row>
    </div>
       </Container>     
      
     
    </Fragment>
    
    );
};

export default App;
