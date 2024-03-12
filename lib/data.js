export const dataNews = async () => {
  const getDataNews = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());
  return getDataNews;
};

export const dataUsersRandom = async () => {
  const getDataUsersRandom = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());
  return getDataUsersRandom;
};
