/**
 * Classe générique représentant un capteur.
 * Tous les capteurs héritent de cette classe.
 */ 

export class Sensor{
     /**
   * @param {number} id - identifiant du capteur
   * @param {string} type - type du capteur (GPS, Speed...)
   * @param {Array} history - historique des mesures
   */

     constructor(id, type, history = []){
        this.id = id
        this.type = type
        this.history = history
     }

     /**
      * Retourne la dernière valeur enregistrée
      */

     getData(){

        if (this.history.length === 0){
            return null
        }
        return this.history[this.history.length - 1] 
     }

     /**
      * Ajoute une nouvelle valeur dans l'historique
      */
     addValue(value){
        this.history.push(value)
     }
}