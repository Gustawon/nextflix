export const validateEmail = (email: string) => {
  const VALID_EMAIL = process.env.NEXT_PUBLIC_VALID_EMAIL;

  console.log("validateEmail, VALID_EMAIL: ", VALID_EMAIL);

  return email === VALID_EMAIL;
};
