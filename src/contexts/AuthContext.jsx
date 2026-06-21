import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  function login(username, password) {
    if (username === "aluno" && password === "1234") {
      setUsuario({ nome: username });
      return true;
    }

    return false;
  }

  function logout() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{ usuario, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}