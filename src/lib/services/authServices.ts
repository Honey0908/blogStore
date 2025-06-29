import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebaseClient';

/**
 * Log in a user with email and password.
 * @param email The email of the user.
 * @param password The password of the user.
 * @returns The user object if login is successful, otherwise throws an error.
 */
export async function loginWithEmail(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
}

/**
 * Sign up a user with email and password.
 * @param email The email of the user.
 * @param password The password of the user.
 * @returns The user object if signup is successful, otherwise throws an error.
 */
export async function signupWithEmail(email: string, password: string) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
}
