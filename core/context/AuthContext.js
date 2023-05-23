import { createContext, useReducer } from "react";

export const AuthContext = createContext({});

const initialState = {
  isLoading: false,
  email: "",
  family_name: "",
  given_name: "",
  id: "",
  locale: "",
  name: "",
  picture: "",
  verified_email: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESSFULLY":
      return { ...state, ...action.payload, isLoading: false };
    case "LOGOUT_USER":
      return { ...initialState };
    default:
      return { ...initialState };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, AuthDispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={[state, AuthDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
