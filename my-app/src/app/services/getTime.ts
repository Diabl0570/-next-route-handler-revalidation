async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const getTime = async () => {
    await delay(5000);
    const time = await fetch("https://worldtimeapi.org/api/ip", {
      next: { tags: ["time-tag"], revalidate: 10 },
    });
    return time.json();
  };

  
  export const getTimeZone = async (country:string) => {
    const time = await fetch(`https://worldtimeapi.org/api/ip`, {
      next: { tags: ["time-tag"], revalidate: 10 },
    });
    return time.json();
  };
  