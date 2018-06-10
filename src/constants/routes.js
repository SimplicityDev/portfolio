const generateRoute = (route) => 
    `/portfolio/${route}`

export const SIGN_UP = generateRoute('signup');
export const SIGN_IN = generateRoute('signin');
export const LANDING = generateRoute('');
export const HOME = generateRoute('home');
export const ACCOUNT = generateRoute('account');
export const PASSWORD_FORGET = generateRoute('pw-forget');