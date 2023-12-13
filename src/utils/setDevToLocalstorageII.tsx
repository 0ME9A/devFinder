import { basicDevFace } from "@/types/devFace";

function setDevToLocalstorageII(data: basicDevFace[]) {
  localStorage.setItem("devHistory", JSON.stringify(data));
}

export default setDevToLocalstorageII;
