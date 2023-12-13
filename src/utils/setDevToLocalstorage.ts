import { basicDevFace } from "@/types/devFace";

function setDevToLocalstorage(data: basicDevFace) {
  // Get the devHistory from localStorage
  const LSG = localStorage.getItem("devHistory");

  // Initialize arrays to store dev history and find a specific dev
  let devHistory: basicDevFace[] = [];
  let findDevIndex: number = -1;

  // Check if there's existing devHistory in localStorage
  if (LSG) {
    // Use try-catch to handle JSON parsing errors
    try {
      devHistory = JSON.parse(LSG);
    } catch (error) {
      console.error("Error parsing devHistory:", error);
    }

    // Find the index if the dev already exists in the devHistory
    findDevIndex = devHistory.findIndex((item) => item.login === data.login);
  }

  // Simplify user data for storage
  const simplifyUserData = {
    id: data.id,
    login: data.login,
    name: data.name,
    bio: data.bio,
    created_at: data.created_at,
  };

  // If the dev is found, move it to the top of devHistory
  if (findDevIndex !== -1) {
    devHistory.splice(findDevIndex, 1); // Remove existing entry
  }

  // Add the dev to the beginning of devHistory and update localStorage
  localStorage.setItem(
    "devHistory",
    JSON.stringify([simplifyUserData, ...devHistory])
  );
}

export default setDevToLocalstorage;
