import { basicDevFace } from "@/types/devFace";
import cookiePermission from "./cookiePermission";

function 
setDevToLocalstorageII(data: basicDevFace[]) {
  if (cookiePermission() ) {
    localStorage.setItem("devHistory", JSON.stringify(data));
  } else {
    console.log("Cookies not set.");
  }
}

export default setDevToLocalstorageII;
