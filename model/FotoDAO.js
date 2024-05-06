const firebase = require("firebase");

class FotoDAO {
  constructor() {
    // Initialize Firebase
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

  async getAllFotos() {
    try {
      const snapshot = await this.db.ref("fotos").once("value");
      const fotos = snapshot.val();
      return fotos ? Object.values(fotos) : [];
    } catch (error) {
      console.error("Error getting fotos from Firebase:", error);
      throw error;
    }
  }

  async getFotoById(fotoId) {
    try {
      const snapshot = await this.db.ref(`fotos/${fotoId}`).once("value");
      return snapshot.val();
    } catch (error) {
      console.error(`Error getting foto with ID ${fotoId} from Firebase:`, error);
      throw error;
    }
  }

  async saveFoto(foto) {
    try {
      const newFotoRef = this.db.ref("fotos").push();
      await newFotoRef.set(foto);
      console.log("Foto saved to Firebase successfully");
      return newFotoRef.key;
    } catch (error) {
      console.error("Error saving foto to Firebase:", error);
      throw error;
    }
  }

  async updateFoto(fotoId, updatedFoto) {
    try {
      await this.db.ref(`fotos/${fotoId}`).update(updatedFoto);
      console.log(`Foto with ID ${fotoId} updated successfully`);
    } catch (error) {
      console.error(`Error updating foto with ID ${fotoId} in Firebase:`, error);
      throw error;
    }
  }

  async deleteFoto(fotoId) {
    try {
      await this.db.ref(`fotos/${fotoId}`).remove();
      console.log(`Foto with ID ${fotoId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting foto with ID ${fotoId} from Firebase:`, error);
      throw error;
    }
  }
}

module.exports = FotoDAO;
