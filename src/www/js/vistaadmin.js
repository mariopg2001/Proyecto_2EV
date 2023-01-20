/**
	@file Contiene el modelo de la vista de inicio
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/

import {Vista} from './vista.js'

/**
	Implementa una vista de inicio.
**/
export class Vistaadmin extends Vista{
	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.listado=[]
		this.controlador = controlador
		
		this.btnlistar = document.getElementsByTagName('li')[3]
		this.divindex = document.getElementsByClassName('contenedor')[0]

		this.btnlistar.onclick = this.listar.bind(this)

	
		


	}
	



	listar(){
		console.log('ksakkskakska')
	    const solicitud = window.indexedDB.open('LoL')
		solicitud.onsuccess = (evento) =>{
			this.bd = evento.target.result;
			console.log('Base de datos cargada')
			const objectStore = this.bd.transaction('Campeones', 'readonly').objectStore('Campeones')
			const solicitud = objectStore.getAll() 
		    solicitud.onsuccess = function(){ 
				let lista = solicitud.result
				this.listado = lista 
				
				console.log(this.listado)
				
			}

			
		}     
	
	
	this.divimagen=document.createElement("div")
	this.divimagen.classList.add("contenedorimagen")
	this.divindex.appendChild(this.divimagen)
	this.imagen=document.createElement('img')
	this.imagen.classList.add("champ")
	this.imagen.src=this.listado[11]
	this.divimagen.appendChild(this.imagen)
	this.divicono=document.createElement('div')
	this.divicono.classList.add( 'contenedoricono')
	this.divimagen.appendChild(this.divicono)
	this.spanedit=document.createElement('span')
	this.spanedit.classList.add('icono')
	this.spanedit.setAttribute("id", "mod")
	this.divicono.appendChild(this.spanedit)

	this.iconoedit=document.createElement('i')
	this.iconoedit.classList.add('fa-solid')
	this.iconoedit.classList.add('fa-pen')
	this.spanedit.appendChild(this.iconoedit)

	this.spanborrar=document.createElement('span')
	this.spanborrar.classList.add('icono')
	this.divicono.appendChild(this.spanborrar)
	this.iconoborrar=document.createElement('i')
	this.iconoborrar.classList.add('fa-sharp')
	this.iconoborrar.classList.add('fa-solid')
	this.iconoborrar.classList.add('fa-trash')
	this.spanborrar.appendChild(this.iconoborrar)

	this.spanlupa=document.createElement('span')
	this.spanlupa.classList.add('icono')
	this.divicono.appendChild(this.spanlupa)
	this.iconolupa=document.createElement('i')
	this.iconolupa.classList.add('fa-sharp')
	this.iconolupa.classList.add('fa-solid')
	this.iconolupa.classList.add('fa-magnifying-glass')
	this.spanlupa.appendChild(this.iconolupa)
	
	}
}
