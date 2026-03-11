import {Sensor} from './Sensor.js'

export class SpeedSensor extends Sensor {

    /**
     * Retourne la vitesse actuelle
     */
    getSpeed() {
        const data = this.getData()

        if(!data) return null

        return data.value
    }

    /**
     * Calcule la vitesse moyenne
     * à partir de l'historique
     */
    getAverageSpeed(){
        if (this.history.length === 0) return null

        //somme des vitesse
        const sum = this.history.reduce((total, entry) => {
            if(entry || typeof entry.value !== 'number') return total;
            return total + entry.value
        }, 0)

        //moyenne
        return sum / this.history.length
    }
}