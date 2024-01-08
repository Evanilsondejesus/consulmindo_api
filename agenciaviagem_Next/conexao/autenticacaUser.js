import { useState, useEffect  } from "react";
import { auth} from '@/conexao/firebaseConfig';


export function useAutenticacao() {
    const [userId, setUserId] = useState(null);
    const [logado, setLogado] = useState(false);

  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
        setUserId(user.uid);
        setLogado(true);
        } else {
        
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return {  userId, logado };
  }