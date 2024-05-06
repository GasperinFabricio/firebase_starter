const firebase = require("firebase");

class UsuarioDAO {
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

  async getAllUsuarios() {
    try {
      const snapshot = await this.db.ref("usuarios").once("value");
      const usuarios = snapshot.val();
      return usuarios ? Object.values(usuarios) : [];
    } catch (error) {
      console.error("Error getting usuarios from Firebase:", error);
      throw error;
    }
  }

  async getUsuarioById(usuarioId) {
    try {
      const snapshot = await this.db.ref(`usuarios/${usuarioId}`).once("value");
      return snapshot.val();
    } catch (error) {
      console.error(`Error getting usuario with ID ${usuarioId} from Firebase:`, error);
      throw error;
    }
  }

  async saveUsuario(usuario) {
    try {
      const newUsuarioRef = this.db.ref("usuarios").push();
      await newUsuarioRef.set(usuario);
      console.log("Usuario saved to Firebase successfully");
      return newUsuarioRef.key; // Return the ID of the newly added usuario
    } catch (error) {
      console.error("Error saving usuario to Firebase:", error);
      throw error;
    }
  }

  async updateUsuario(usuarioId, updatedUsuario) {
    try {
      await this.db.ref(`usuarios/${usuarioId}`).update(updatedUsuario);
      console.log(`Usuario with ID ${usuarioId} updated successfully`);
    } catch (error) {
      console.error(`Error updating usuario with ID ${usuarioId} in Firebase:`, error);
      throw error;
    }
  }

  async deleteUsuario(usuarioId) {
    try {
      await this.db.ref(`usuarios/${usuarioId}`).remove();
      console.log(`Usuario with ID ${usuarioId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting usuario with ID ${usuarioId} from Firebase:`, error);
      throw error;
    }
  }
}

module.exports = UsuarioDAO;
