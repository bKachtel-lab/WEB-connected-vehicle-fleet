/**
 * Représente une valeur enregistrée par un capteur
 * à un instant donné.
 */
class SensorHistory {

  /**
   * @param {string} timestamp - date de la mesure
   * @param {any} value - valeur mesurée
   */
  constructor(timestamp, value) {
    this.timestamp = timestamp
    this.value = value
  }

}

