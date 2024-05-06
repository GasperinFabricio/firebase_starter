const firebase = require("firebase");

class ComentarioDAO {
  constructor() {
    const firebaseConfig = {
        apiKey: "AIzaSyAllq8pmc6aAHSVZpdcQuVfEzT0FGlHkMM",
        authDomain: "trabalho-dev-mobile-94f90.firebaseapp.com",
        databaseURL: "https://trabalho-dev-mobile-94f90-default-rtdb.firebaseio.com",
        projectId: "trabalho-dev-mobile-94f90",
        storageBucket: "trabalho-dev-mobile-94f90.appspot.com",
        messagingSenderId: "179458278455",
        appId: "1:179458278455:web:ede289a3cd4cd8ee6babb2",
    };
    this.firebaseApp = firebase.initializeApp(firebaseConfig);
    this.db = firebase.database();
  }

  async getAllComentarios() {
    try {
      const snapshot = await this.db.ref("comentarios").once("value");
      const comentarios = snapshot.val();
      return comentarios ? Object.values(comentarios) : [];
    } catch (error) {
      console.error("Error getting comentarios from Firebase:", error);
      throw error;
    }
  }

  async getComentarioById(comentarioId) {
    try {
      const snapshot = await this.db.ref(`comentarios/${comentarioId}`).once("value");
      return snapshot.val();
    } catch (error) {
      console.error(`Error getting comentario with ID ${comentarioId} from Firebase:`, error);
      throw error;
    }
  }

  async saveComentario(comentario) {
    try {
      const newComentarioRef = this.db.ref("comentarios").push();
      await newComentarioRef.set(comentario);
      console.log("Comentario saved to Firebase successfully");
      return newComentarioRef.key; // Return the ID of the newly added comentario
    } catch (error) {
      console.error("Error saving comentario to Firebase:", error);
      throw error;
    }
  }

  async updateComentario(comentarioId, updatedComentario) {
    try {
      await this.db.ref(`comentarios/${comentarioId}`).update(updatedComentario);
      console.log(`Comentario with ID ${comentarioId} updated successfully`);
    } catch (error) {
      console.error(`Error updating comentario with ID ${comentarioId} in Firebase:`, error);
      throw error;
    }
  }

  async deleteComentario(comentarioId) {
    try {
      await this.db.ref(`comentarios/${comentarioId}`).remove();
      console.log(`Comentario with ID ${comentarioId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting comentario with ID ${comentarioId} from Firebase:`, error);
      throw error;
    }
  }
}

module.exports = ComentarioDAO;
