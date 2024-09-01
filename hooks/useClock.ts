import { useEffect, useState } from "react";
import { format } from "date-fns";

export const useClock = (fmt: string) => {

  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setInterval(() => { formatTime() }, 1000);
  }, []);

  const formatTime = () => {
    const d = new Date();
    const fd = format(d, fmt);
    setTime(fd);
  };

  return { time };
}

export const useGreeting = (time: string | null) => {

  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    generateGreeting();
  }, [time]);

  const generateGreeting = () => {

    const d = new Date();
    if (!time) return null;

    const morning = "Good Morning";
    const afternoon = "Good Afternoon";
    const evening = "Good Evening";
    const night = "Happy Dreaming";
    const hour = d.getHours();

    if (hour >= 6 && hour < 12) {
      setGreeting(morning);
    } else if (hour >= 12 && hour < 18) {
      setGreeting(afternoon);
    } else if (hour >= 18 && hour < 24) {
      setGreeting(evening);
    } else {
      setGreeting(night);
    };
  };

  return { greeting };
}
