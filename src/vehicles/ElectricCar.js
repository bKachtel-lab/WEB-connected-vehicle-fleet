import { Vehicle } from './Vehicle.js';

/**
 * Classe représentant une voiture électrique.
 */

export class Electrical extends Vehicle{
    /**
     * * @param {number} id
     * @param {string} brand
     * @param {string} model
     * @param {number} year
     * @param {number} batteryCapacity - capacité totale de la batterie (kWh)
     * @param {Array} sensors
     */

    constructor(id, brand, model, year, batteryCapacity, sensors = []) {
        super(id, brand, model, year, sensors);
        this.batteryCapacity = batteryCapacity;
    }

    /**
     * Retourne le niveau de batterie via le capteur associé
     */
    getBatteryStatus(){
        const sensor = this.getSensor('Battery')
        return sensor ? sensor.getData()?.value ?? null : null;
    }
}