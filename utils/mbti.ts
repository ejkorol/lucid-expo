import api from "@/lib/api";

export const getMbtis = async () => {
  try {
    return await api.getMbtis();
  } catch(e) {
    console.error(`Failed to get mbtis: ${e}`);
  };
};
