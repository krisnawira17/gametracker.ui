import axios from "./axios";

export const getGames = async (search: {
  title: string;
  page?: number;
  page_size?: number;
}) => {
  try {
    const res = await axios.post("api/game/getGames", search);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch game: ", err);
    throw err;
  }
};

export const getDetailGame = async (param: { id: number }) => {
  try {
    const res = await axios.post("api/game/detailGame", param);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch game detail: ", err);
    throw err;
  }
};
