export const errorFirebaseMessage = (error) => {
  if (error === "auth/wrong-password") {
    return "La contraseña es incorrecta";
  } else if (error === "auth/user-not-found") {
    return "El email no esta registrado";
  } else if (error === "auth/email-already-in-use") {
    return "Este email ya esta en uso";
  } else if (error === "auth/network-request-failed") {
    return "No esta conectado a internet";
  } else if (error === "auth/too-many-requests") {
    return "Demasiadas peticiones";
  } else {
    return error;
  }
};
