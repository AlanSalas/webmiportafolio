export const emailRules = [
  {
    type: "email",
    message: "Correo electronico es invalido.",
  },
  {
    required: true,
    message: "Correo electronico es requerido.",
  },
];

export const passwordRules = [
  {
    required: true,
    message: "Contraseña es requerida.",
  },
  {
    min: 4,
    message: "Contraseña es muy corta.",
  },
];

export const repeatPasswordRules = [
  {
    required: true,
    message: "Repetir contraseña es requerida.",
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject("Contraseñas no coinciden.");
    },
  }),
];

export const nameRules = [
  {
    pattern: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
    message: "Nombre debe de empezar con letra mayuscula.",
  },
  {
    required: true,
    message: "Nombre es requerido.",
  },
];

export const lastNameRules = [
  {
    pattern: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
    message: "Apellido debe de empezar con letra mayuscula.",
  },
  {
    required: true,
    message: "Apellido es requerido.",
  },
];

export const usernameRules = [
  {
    pattern: /^([A-Za-z0-9]){4,20}$/gm,
    message: "Username invalido.",
  },
  {
    required: true,
    message: "Username es requerido.",
  },
];
