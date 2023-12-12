import { basicDevFace } from "@/types/devFace";
import cookiePermission from "./cookiePermission";

function setDevToLocalstorage(data: basicDevFace) {
  if (cookiePermission()) {
    // Get the devHistory from localStorage
    const LSG = localStorage.getItem("devHistory");

    // Initialize arrays to store dev history and find a specific dev
    let devHistory: basicDevFace[] = [];
    let findDev: basicDevFace | undefined;

    // Check if there's existing devHistory in localStorage
    if (LSG) {
      // Use try-catch to handle JSON parsing errors
      try {
        devHistory = JSON.parse(LSG);
      } catch (error) {
        console.error("Error parsing devHistory:", error);
      }

      // Find if the dev already exists in the devHistory
      findDev = devHistory.find((item) => item.login === data.login);
    }

    // Simplify user data for storage
    const simplifyUserData = {
      id: data.id,
      login: data.login,
      name: data.name,
      bio: data.bio,
      created_at: data.created_at,
    };

    // If the dev is not found, add it to devHistory and update localStorage
    if (!findDev) {
      // Use JSON.stringify to convert the array to a string
      localStorage.setItem(
        "devHistory",
        JSON.stringify([simplifyUserData, ...devHistory])
      );
    }
  } else {
    console.log("Cookies not set.");
  }
}

export default setDevToLocalstorage;
