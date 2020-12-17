import {Fragment} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import clear from './imagenes/clear.png'
import clouds from './imagenes/clouds.png';
import mist from './imagenes/mist.png';
import rain from './imagenes/rain.png';
import snow from './imagenes/snow.png';
import thunderstorm from './imagenes/thunderstorm.png';
import humedad from './imagenes/humedad.png';
import viento from './imagenes/viento.png';
import temp_min from './imagenes/minima.png';
import temp_max from './imagenes/maxima.png';
import temperatura from './imagenes/temperatura.png';
import lluvia from './imagenes/lluvia.png';
import presion from './imagenes/presion.png'






const Clima = ({tiempo}) => {
    console.log(tiempo) //para probar si llegaba bien
    let iconoEstado = null;
    
    switch(tiempo.estado){
        case "Clear":
            iconoEstado=clear;
            break;
        case "Clouds":
            iconoEstado=clouds;
            break;
        case "Mist":
            iconoEstado=mist;
            break;
        case "Rain":
            iconoEstado=rain;
            break;
        case "Snow":
            iconoEstado=snow;
            break;
        case "Thunderstorm":
            iconoEstado=thunderstorm;
            break;
        default:
            break;

    }
    
    return ( 
    
    <Fragment>
        <Container>
            <br/>
          <Row
            style={
                {backgroundColor:'rgb(190, 200, 200)',
                border:'solid'}
            } 
            >

            <Col
            style={
                {border: 'solid'}  
             }
             >
                <p> Estado: {tiempo.estado}</p>
                
                <Image                     
                    src={iconoEstado} 
                    thumbail
                
              />
            </Col>
              <Col
              style={
                {border: 'solid'}  
             }
            >
                <p> Temperatura: {tiempo.temperatura}°C</p>
                <Image                     
                src={temperatura} 
                thumbail
                />
              
              </Col>
            <Col
            style={
                {border: 'solid'}  
             }
             >
                <p> Temp_max: {tiempo.temp_max}°C</p>
                <br/>
                <Image                     
                    src={temp_max} 
                    thumbail
              />
            </Col>
            <Col
            style={
                {border: 'solid'}  
             }
            >
                <p> Temp_min: {tiempo.temp_min}°C</p>
                <br/>
                <Image                     
                    src={temp_min} 
                    thumbail
                
              />
            </Col>
          </Row>
          <br/>
          <Row
            style={
                {backgroundColor:'rgb(190, 200, 200)',
                border:'solid'}
            } 
            >

              <Col
              style={
                {border: 'solid'}  
             }
            >
                <p> Probabilidad de Lluvia: {tiempo.prob_lluvia}%</p>
                <Image                     
                    src={lluvia} 
                    thumbail
                />
              </Col>
            <Col
            style={
                {border: 'solid'}  
             }
             >
                <p> Presion: {tiempo.presion} hPa </p>
                <br/>
                <Image                     
                    src={presion} 
                    thumbail
                    style={
                        {position:'center'}
                    }
                
              />
            </Col>
            <Col
            style={
                {border: 'solid'}  
             }
             >
                <p> Humedad: {tiempo.humedad}%</p>
                <br/>
                <Image                     
                    src={humedad} 
                    thumbail
                    
              />
            </Col>
            <Col
            style={
                {border: 'solid'}  
             }
            >
                <p> Viento: {tiempo.viento}km/h</p>
                <br/>
                <Image                     
                    src={viento} 
                    thumbail
                
              />
            </Col>
          </Row>
       
        </Container>
        </Fragment>
        
        
    );
}


export default Clima;
