'use strict'

//PLANIFICADOR DE VIAJES
//Registrar destinos
import {registrarDestino, mostrarItinerario} from './viajes.js'

registrarDestino('Iceland', '16/06/2025', 'airplane', 5);
registrarDestino('Italy', '27/04/2026', 'jet', 6);
registrarDestino('Portugal', '12/08/2025', 'train', 7)

mostrarItinerario();