import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';    
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMaps() {

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Ceará</strong>
                    <span>Fortaleza</span>
                </footer>
            </aside>

            <Map 
                center={[-3.6986316,-38.6415447]}
                zoom={11}
                style={{ width: '100%', height: '100%' }}                
            >
                <TileLayer
                    url={`${process.env.REACT_APP_API_MAP}${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to='/' className="create-orphanage">
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    )
}
export default OrphanagesMaps;