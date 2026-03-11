/**
 * Classe de base représentant un véhicule.
 * Elle contient les informations communes à tous les véhivules.
 */

export class Vehicle{
    /**
     * 
     * @param {number} id - Identification du véhicule
     * @param {string} brand - Marque du vehivule
     * @param {string} model - Modèle du véhicule
     * @param {number} year - Année de fabrication
     * @param {array} sensors - Liste des capteurs installés
     */
    Constructor(id, brand, model, year, sensors = []){
        this.id = id
        this.brand = brand
        this.model = model
        this.year = year
        this.sensors = sensors
    }

    /**
     * Permet de récupérer un capteur par son type
     * @param {string} type 
     * @returns 
     */
    getSensor(type) {
        return this.sensors.find(s => s.type === type) || null
    }

    /**
     * Permet d'ajouter un capteur
     * @param {string} type
     */
    addSensor(sensor){
        if(!this.getSensor(sensor.type)){
            this.sensors.push(sensor)
        } else {
            console.warn(`Le capteur de type "${sensor.type}" existe déjà pour ce véhicule.`)
        }
    }

      /**
     * Permet de supprimé un capteur
     * @param {string} type
     */
    addSensor(sensor){
        const index = this.sensors.findIndex(s => s.type === sensor.type)

        if(index >= 0 ){
            this.sensors.splice(index, 1)
            return true
        } else {
            console.warn(`Le capteur de type "${sensor.type}" n'existe pas  pour ce véhicule. Inutile de supprimer!`)
            return false
        }
    }

    /**
     * Retourner tous les capteurs
     */
    getAllSensorsData (){
        const data = {}
        this.sensors.forEach(sensor => {
            data[sensor.type] = sensor.getData()
        })
        return data
    }

    /**
     * Si le vehicule a au moin un capteur
     */
    hasSensor(){
        return this.sensors.length > 0
    }
}

