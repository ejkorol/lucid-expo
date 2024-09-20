import { useState, useEffect } from "react";
import api from "@/lib/api";

export interface Mbti {
  displayValue: string;
  value: string;
}

const useMbtis = () => {
  const [mbtis, setMbtis] = useState<Mbti[] | null>(null);

  const fetchMbtis = async () => {
    try {
      const data = await api.getMbtis();
      if (!data) throw new Error();
      const formattedData = data.map((mbti) => ({
        displayValue: mbti.type,
        value: mbti.type,
      }));
      setMbtis(formattedData);
    } catch (e) {
      console.error(`Failed to fetch mbtis: ${e}`);
    }
  };

  useEffect(() => {
    fetchMbtis();
  }, []);

  return { mbtis };
};

export default useMbtis;
