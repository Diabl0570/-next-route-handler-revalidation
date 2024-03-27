export const getTime = async () => {
    const time = await fetch("https://worldtimeapi.org/api/ip", {
      next: { revalidate: 2 },
    });
    return time.json();
  };
  