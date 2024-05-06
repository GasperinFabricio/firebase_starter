const firebase = require("firebase");

class PostagemDAO {
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

  async getAllPostagens() {
    try {
      const snapshot = await this.db.ref("postagens").once("value");
      const postagens = snapshot.val();
      return postagens ? Object.values(postagens) : [];
    } catch (error) {
      console.error("Error getting postagens from Firebase:", error);
      throw error;
    }
  }

  async getPostagemById(postagemId) {
    try {
      const snapshot = await this.db.ref(`postagens/${postagemId}`).once("value");
      return snapshot.val();
    } catch (error) {
      console.error(`Error getting postagem with ID ${postagemId} from Firebase:`, error);
      throw error;
    }
  }

  async savePostagem(postagem) {
    try {
      const newPostagemRef = this.db.ref("postagens").push();
      await newPostagemRef.set(postagem);
      console.log("Postagem saved to Firebase successfully");
      return newPostagemRef.key; // Return the ID of the newly added postagem
    } catch (error) {
      console.error("Error saving postagem to Firebase:", error);
      throw error;
    }
  }

  async updatePostagem(postagemId, updatedPostagem) {
    try {
      await this.db.ref(`postagens/${postagemId}`).update(updatedPostagem);
      console.log(`Postagem with ID ${postagemId} updated successfully`);
    } catch (error) {
      console.error(`Error updating postagem with ID ${postagemId} in Firebase:`, error);
      throw error;
    }
  }

  async deletePostagem(postagemId) {
    try {
      await this.db.ref(`postagens/${postagemId}`).remove();
      console.log(`Postagem with ID ${postagemId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting postagem with ID ${postagemId} from Firebase:`, error);
      throw error;
    }
  }
}

module.exports = PostagemDAO;
