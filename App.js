import { AuthProvider } from "./core/context/AuthContext";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
