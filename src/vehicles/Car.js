import {Vehicle} from './Vehicle.js'

/**
 * Classe représentant une voiture.
 * Elle hérite de la classe Vehicle.
 */
export class Car extends Vehicle{
    /**
   * @param {string} fuelType - type de carburant (diesel, essence...)
   */

    constructor (id, brand, model, year, fuelType, sensors = []){
        super(id, brand, year, sensors)
        this.fuelType = fuelType
    }

     /**
   * Retourne le niveau de carburant via le capteur associé
   */
    getFuelLevel(){
        const sensor = this.getSensor("Fuel")

        if(!sensor) return null

        return sensor.getFuelLevel()
    }

}