import { Vehicle } from './Vehicle.js';

/**
 * Classe représentant un vélo.
 */
export class Bike extends Vehicle {
  /**
   * @param {number} id
   * @param {string} brand
   * @param {string} model
   * @param {number} year
   * @param {string} type - type de vélo (VTT, route…)
   * @param {Array} sensors
   */
  constructor(id, brand, model, year, type, sensors = []) {
    super(id, brand, model, year, sensors);
    this.type = type;
  }
}