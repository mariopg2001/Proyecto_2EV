/**
	@file Contiene el controlador principal de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/
import {Modelo} from './modelo.js'
import {VistaNav} from './vistanav.js'
import {Vistaadmin} from './vistaadmin.js'
import {Vistaanadir} from './vistaanadir.js'
import {Vistamod} from './vistamod.js'

/**
 * Controlador de la aplicación
 */
class Controlador{
	/**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
	constructor(){
		window.onload = this.iniciar.bind(this)
		this.modelo = new Modelo(this)
	
	}
	/**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
	iniciar(){
		this.modelo = new Modelo()

		this.nav = document.getElementsByTagName('nav')[0]
		this.divadmin = document.getElementById('divadmin')
		this.divanadir = document.getElementById('divanadir')
		this.divmod = document.getElementById('divmod')
		
		// this.vista = new Vista(this, document.getElementsByClassName('cuadro1'))

		
		this.vistaNav = new VistaNav(this, this.nav)
		this.vistaadmin = new Vistaadmin(this.divadmin, this)
		this.vistaanadir = new Vistaanadir(this.divanadir, this)
		this.vistamod = new Vistamod(this.divmod, this)

		this.vistaadmin.mostrar(true)
	}
	insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	
	insertarOK(){
		console.log('La inserción ha ido bien')
	}
	
	/**
	 * Oculta todas las vistas.
	 */
	 ocultarVistas(){
	     this.vistaadmin.mostrar(false)
	     this.vistaanadir.mostrar(false)
	     this.vistamod.mostrar(false)
	 }
	/**
		Atención a la pulsación del enlace al Inicio en el menú de navegación.
	**/
	pulsarNavadmin(){
		this.ocultarVistas()
		this.vistaadmin.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al CRUD en el menú de navegación.
	**/
	pulsarNavanadir(){
		this.ocultarVistas()
		this.vistaanadir.mostrar(true)
	}
	pulsaranadir(){
		this.ocultarVistas()
		this.vistaanadir.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al Juego en el menú de navegación.
	**/
	pulsarNavmod(){
		this.ocultarVistas()
		this.vistamod.mostrar(true)
	}
	getModelo(){
		return this.modelo
	}
	
}

const app = new Controlador()
