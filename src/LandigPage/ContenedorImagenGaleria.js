import React from 'react';
import './ContenedorImagenGaleria.css';

class ContenedorImagenGaleria extends React.Component {
    render() {
        return (
            <div className="CajaImagen">
                <img className="ImagenTemporal" src={this.props.MyImage} alt="Imagen Temporal" width={this.props.MyWidth} height={this.props.MyHeight}></img>
                <p className="LabelImagen">{this.props.TituloImagen}</p>
            </div>
        );
    }
}

export default ContenedorImagenGaleria;