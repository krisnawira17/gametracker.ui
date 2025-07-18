import axios from "./axios";

export const getGame = async (search: {
  title: string;
  page?: number;
  page_size?: number;
}) => {
  try {
    const res = await axios.post("api/game/getGame", search);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch game: ", err);
    throw err;
  }
};
