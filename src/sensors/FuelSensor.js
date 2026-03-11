import { Sensor } from './Sensor.js';

/**
 * Capteur de niveau de carburant pour Car.
 */
export class FuelLevelSensor extends Sensor {
  constructor(id, type = 'Fuel', history = []) {
    super(id, type, history);
  }

  /**
   * Retourne le niveau de carburant (dernière valeur)
   */
  getFuelLevel() {
    const data = this.getData();
    return data ? data.value : null;
  }
}