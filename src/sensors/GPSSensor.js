import {Sensor} from './Sensor.js'

/**
 * Capteur GPS permettant d'obtenir la position.
 */
class GPSSensor extends Sensor {

  /**
   * Retourne la dernière position connue
   */
  getLocation() {

    const data = this.getData()

    if (!data) return null

    return data.value
  }

}

