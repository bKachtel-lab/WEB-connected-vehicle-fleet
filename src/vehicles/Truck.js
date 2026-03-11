import {Vehicle} from './Vehicle.js'
/**
 * Classe représentant un camion.
 */ 
export class Truck extends Vehicle {
    /**
   * @param {number} maxLoad - charge maximale du camion
   */
    constructor(id, brand, model, year, maxLoad, sensors = []){
        super(id, brand, model, year, sensors)
        this.maxLoad = maxLoad
    }

     /**
   * Retourne la charge actuelle du camion
   * grâce au capteur de charge.
   */
  getCurrentLoad(){
    const sensor = this.sensors("Load")

    if(!sensor) return null

    return sensor.getLoad()
  }
}