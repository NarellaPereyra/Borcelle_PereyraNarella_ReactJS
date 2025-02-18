import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
        throw error;
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        throw error;
    }
};

export { loginWithGoogle, logout }