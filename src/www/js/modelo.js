/**
	@file Contiene el modelo de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

/**
	Clase Modelo
	Gestiona los datos de la aplicación.
**/
export class Modelo{
	/**
		Constructor de la clase
	**/
	constructor(){
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
	}
	/**
	 * Registra un objeto para informarle de los cambios en el Modelo
	 * @param {Function} Función de callback que será llamada cuando cambien los datos
	 **/
	registrar(callback){
        	this.callbacks.push(callback)
	}
	/**
	 * Ejecuta todos los callback registrados.
	 **/
	 avisar(){
	     for(let callback of this.callbacks)
	        callback()
	 }
	

}
