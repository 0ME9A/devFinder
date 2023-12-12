import { COOKIESCONSENT } from "@/constant";

function cookiePermission() {
  return localStorage.getItem(COOKIESCONSENT);
}

export default cookiePermission;
