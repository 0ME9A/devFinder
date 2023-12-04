function isValidGitHubUserId(userId: string): boolean {
  // Regular expression for validating GitHub username
  const usernameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9]))*$/;

  // Check if the username matches the pattern and doesn't start or end with a dash
  // Also, ensure the length is not more than 39 characters
  return (
    usernameRegex.test(userId) &&
    !userId.startsWith("-") &&
    !userId.endsWith("-") &&
    !/--/.test(userId) &&
    userId.length <= 39
  );
}

// // Example usage:
// const validUserId = "the-octocat";
// const invalidUserId = "-invalid-user-with-more-than-39-characters";

// console.log(isValidGitHubUserId(validUserId)); // true
// console.log(isValidGitHubUserId(invalidUserId)); // false

export default isValidGitHubUserId;
