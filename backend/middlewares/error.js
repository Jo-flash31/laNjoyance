const createError = (status, message, details = null ) => {
    // Crée une nouvelle instance d'erreur vide
    const error = new Error(message);
    /**
     * Défini le code d'etat de l'erreur en fonction du paramétre "status"
     */
    error.status = status
    /**
     * Définit le message d'erreur en fonction du paramétre "message"
     */
    error.details = details // Permet d'ajouter des infos supplémentaires si besoin
    return error // renvoi l'instance d'erreur personnalisée
}

module.exports = createError;