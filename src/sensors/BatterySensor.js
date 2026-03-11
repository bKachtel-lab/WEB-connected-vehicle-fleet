import { Sensor } from './Sensor.js';

/**
 * Capteur de batterie pour ElectricCar.
 */
export class BatterySensor extends Sensor {
  constructor(id, type = 'Battery', history = []) {
    super(id, type, history);
  }

  /**
   * Retourne le niveau de batterie (dernière valeur)
   */
  getBatteryLevel() {
    const data = this.getData();
    return data ? data.value : null;
  }
}