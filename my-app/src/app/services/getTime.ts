export const getTime = async () => {
    const time = await fetch("https://worldtimeapi.org/api/ip", {
      next: { tags: ["time-tag"]},
    });
    return time.json();
  };
  