/**
	@file Contiene el modelo de la vista de menú de navegación de la aplicación
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/

/**
	Implementa una vista del menú de navegación.
**/
export class VistaNav{
	/**
		Constructor de la clase.
		@param controlador {Controlador} Controlador de la vista.
		@param nav {HtmlNavElement} Nav de HTML en el que se desplegará la vista.
	**/
	constructor(controlador, nav){
		this.controlador = controlador
		this.nav = nav
		this.liadmin = this.nav.getElementsByTagName('li')[0]
        this.lianadir = this.nav.getElementsByTagName('li')[1]
        this.limod = this.nav.getElementsByTagName('li')[2]

		this.liadmin.onclick = this.pulsaradmin.bind(this)
		this.lianadir.onclick = this.pulsaranadir.bind(this)
		this.limod.onclick = this.pulsarmod.bind(this)
	}
	/**
		Atención a la pulsación sobre el enlace de Inicio
	**/
	pulsaradmin(){
		this.controlador.pulsarNavadmin()
	}
	/**
		Atención a la pulsación sobre el enlace de CRUD
	**/
	pulsaranadir(){
		this.controlador.pulsarNavanadir()
	}
	/**
		Atención a la pulsación sobre el enlace de Juego
	**/
	pulsarmod(){
		this.controlador.pulsarNavmod()
	}
}
