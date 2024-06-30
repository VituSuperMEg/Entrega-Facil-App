
import { jwtDecode } from "jwt-decode"

export const decoded = (token: string) => {
   const res = jwtDecode(token);

   return res;
}