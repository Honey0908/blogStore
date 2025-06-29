import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import Cookies from 'js-cookie';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Show a toast notification.
 * @param message The message to display.
 * @param type The type of toast (success or error).
 */
export const showToast = (
  message: string,
  type: 'success' | 'error' = 'success'
) => {
  toast[type](message, {
    duration: 3000,
    position: 'top-right',
  });
};

/**
 * Set a cookie value using js-cookie.
 * @param name The cookie name.
 * @param value The cookie value.
 * @param options Optional cookie attributes (expires, path, etc).
 */
export function setCookie(
  name: string,
  value: string,
  options?: Cookies.CookieAttributes
) {
  Cookies.set(name, value, options);
}
