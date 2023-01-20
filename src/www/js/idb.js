export class Idb{
	constructor(){

		const peticion = indexedDB.open('LoL', 2)
		peticion.onerror = evento => {throw 'Error al conectar indexedDB'}
		peticion.onupgradeneeded = evento => {
			this.conexion = evento.target.result
			this.crear()
        	}
		peticion.onsuccess = evento => {this.conexion = evento.target.result}
	}
	crear(){
		const tabla = this.conexion.createObjectStore('Campeones', {autoIncrement: true})
	}
	insertar(objeto, callback){
		const transaccion = this.conexion.transaction(['Campeones'], 'readwrite')
		transaccion.onerror = evento => {throw 'Error al insertar'}
		const tabla = transaccion.objectStore('Campeones')
		const peticion = tabla.add(objeto)
  		peticion.onsuccess = callback
	}


	}