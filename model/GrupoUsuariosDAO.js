const firebase = require("firebase");

class GrupoUsuariosDAO {
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

  async getAllGruposUsuarios() {
    try {
      const snapshot = await this.db.ref("gruposUsuarios").once("value");
      const gruposUsuarios = snapshot.val();
      return gruposUsuarios ? Object.values(gruposUsuarios) : [];
    } catch (error) {
      console.error("Error getting grupos de usuarios from Firebase:", error);
      throw error;
    }
  }

  async getGrupoUsuariosById(grupoUsuariosId) {
    try {
      const snapshot = await this.db.ref(`gruposUsuarios/${grupoUsuariosId}`).once("value");
      return snapshot.val();
    } catch (error) {
      console.error(`Error getting grupo de usuarios with ID ${grupoUsuariosId} from Firebase:`, error);
      throw error;
    }
  }

  async saveGrupoUsuarios(grupoUsuarios) {
    try {
      const newGrupoUsuariosRef = this.db.ref("gruposUsuarios").push();
      await newGrupoUsuariosRef.set(grupoUsuarios);
      console.log("Grupo de usuarios saved to Firebase successfully");
      return newGrupoUsuariosRef.key; // Return the ID of the newly added grupo de usuarios
    } catch (error) {
      console.error("Error saving grupo de usuarios to Firebase:", error);
      throw error;
    }
  }

  async updateGrupoUsuarios(grupoUsuariosId, updatedGrupoUsuarios) {
    try {
      await this.db.ref(`gruposUsuarios/${grupoUsuariosId}`).update(updatedGrupoUsuarios);
      console.log(`Grupo de usuarios with ID ${grupoUsuariosId} updated successfully`);
    } catch (error) {
      console.error(`Error updating grupo de usuarios with ID ${grupoUsuariosId} in Firebase:`, error);
      throw error;
    }
  }

  async deleteGrupoUsuarios(grupoUsuariosId) {
    try {
      await this.db.ref(`gruposUsuarios/${grupoUsuariosId}`).remove();
      console.log(`Grupo de usuarios with ID ${grupoUsuariosId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting grupo de usuarios with ID ${grupoUsuariosId} from Firebase:`, error);
      throw error;
    }
  }
}

module.exports = GrupoUsuariosDAO;
