
import appBcrypt from 'bcryptjs';
const saltRounds = 10;

// metodo para encriptar la contraseña
export const encryptPassword = async (password) => {
    try {
        const hastedPassword = await appBcrypt.hash(password, saltRounds);
        return hashedPassword;
} catch (error) {
        console.error('Error encrypt:', error);
        throw error;
    }
};

//encargado de validar el hash
export const comparePassword = async (password, hashedPassword) => {
    try{
        const match = await appBcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        console.error('Error comparing the hast:', error);
        throw error;
    }
};

