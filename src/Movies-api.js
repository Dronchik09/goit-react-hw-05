import axios from "axios";

export async function fetchRequest(url) {
  console.log(url);
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODM1MmVhMDk0NDI1NjgxMDU5MDgwODhlM2M5ZDYzYSIsIm5iZiI6MTcyNTYyMDU0Ny41MTIyODUsInN1YiI6IjY2ZGFjOGYyMjljOTM3ZDhmNGRkOTRmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uicWpP7nQEoFUsIUiz6NDId-0-1muhFPsAIAHV9A4EY",
    },
  };
  const response = await axios.get(url, options);

  return response;
}
export const imageUrl = "https://image.tmdb.org/t/p/w500";
  