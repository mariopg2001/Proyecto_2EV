/**
	@file Contiene el modelo de la vista de inicio
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/
import {Campeon} from './Campeon.js'
import {Vista} from './vista.js'


/**
	Implementa una vista de inicio.
**/
export class Vistaanadir extends Vista{
	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div, controlador){
		super(div)
		
		this.controlador = controlador
		this.btn1 = document.getElementById('prueba')

		this.btn1.onclick = this.pulsar1.bind(this)
	}
	
	pulsar1(){
		//Leer y validar los datos del formulario
		this.imagen=document.getElementById('inputcampeon')
		this.nombrecampeon=document.getElementById('nombrecampeon')
		this.descripcioncampeon=document.getElementById('descripcioncampeon')
		this.posicion1= document.getElementById('posicion1')
		this.posicion2= document.getElementById('posicion2')
		this.posicion3= document.getElementById('posicion3')
		this.posicion4= document.getElementById('posicion4')
		this.posicion5= document.getElementById('posicion5')
		this.fechacampeon=document.getElementById('fechacreacion')
		this.opcion1=document.getElementById('opcion1')
		this.opcion2=document.getElementById('opcion2')
		this.opcion3=document.getElementById('opcion3')
		this.opcion4=document.getElementById('opcion4')

		let nombre=this.nombrecampeon.value
		let descripcion=this.descripcioncampeon.value
		let fecha=this.fechacampeon.value

		//let imagen=this.imagen.files[0]
		//let imagen=this.imagen.value
		//let imagen.createObjectURL(this.imagen)
		
		let opciones=[]
			opciones.push(this.opcion1.checked)
			opciones.push(this.opcion2.checked)
			opciones.push(this.opcion3.checked)
			opciones.push(this.opcion4.checked)

			
			
			if(opciones[0] ==true){
				opciones[0]= 'Mago'
			}
			
			if(opciones[1] ==true){
				opciones[1]= 'Asesino'
			}
			
			if(opciones[2] ==true){
				opciones[2]= 'Tanque'
			}
			
			if(opciones[3] ==true){
				opciones[3]= 'Guerrero'
			}
		let posiciones= []
		
			posiciones.push(this.posicion1.checked)
			posiciones.push(this.posicion2.checked)
			posiciones.push(this.posicion3.checked)
			posiciones.push(this.posicion4.checked)
			posiciones.push(this.posicion5.checked)
		
		if(posiciones[0] ==true){
			posiciones[0]= 'ADC'
		}
		
		if(posiciones[1] ==true){
			posiciones[1]= 'sup'
		}
		
		if(posiciones[2] ==true){
			posiciones[2]= 'jung'
		}
		
		if(posiciones[3] ==true){
			posiciones[3]= 'top'
		}
		
		if(posiciones[4] ==true){
			posiciones[4]= 'mid'
		}
		//Construyo el objeto
		let objeto = new Campeon(nombre,descripcion,posiciones,fecha,imagen,opciones)
		this.controlador.insertar(objeto)
	}
	
	/**
		Atención a la pulsación sobre el enlace de Juego
	**/

}
