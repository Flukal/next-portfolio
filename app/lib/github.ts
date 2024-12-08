// lib/github.ts

interface GitHubUser {
  login: string;
  id: number;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}

interface GitHubRepo {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
}

export const fetchGitHubUserData = async (username: string) => {
  // const cacheKey = `githubUserData-${username}`;
  // const cacheExpiryTime = 60 * 60 * 1000; // Cache expires in 1 hour (1 hour = 60 minutes * 60 seconds * 1000 ms)

  // // Check if data is already in the cache
  // const cachedData = localStorage.getItem(cacheKey);

  // if (cachedData) {
  //   const parsedData = JSON.parse(cachedData);
  //   const isExpired = Date.now() - parsedData.timestamp > cacheExpiryTime;

  //   if (!isExpired) {
  //     return parsedData; // Return cached data if it hasn't expired
  //   } else {
  //     localStorage.removeItem(cacheKey); // Remove expired data
  //   }
  // } else {
  //   console.log(`No cache found for key: ${cacheKey}`);
  // }

  try {
    // Fetch the user profile data
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!userResponse.ok) {
      throw new Error('User not found');
    }

    const userData: GitHubUser = await userResponse.json();

    // Fetch the user's repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const reposData: GitHubRepo[] = await reposResponse.json();

    // Cache the fetched data
    const dataToCache = {
      userData,
      reposData,
      timestamp: Date.now(),
    };

    // localStorage.setItem(cacheKey, JSON.stringify(dataToCache));

    // Return the fetched data
    return dataToCache;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return null; // Return null in case of error
  }
};
