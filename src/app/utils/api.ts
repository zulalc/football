const API_HOST = "https://v3.football.api-sports.io";
const HEADERS = {
  "x-rapidapi-host": "v3.football.api-sports.io",
  "x-rapidapi-key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY as string, // Use .env for API key
};

export const fetchTopScorers = async (season: number, league: string) => {
  const res = await fetch(
    `${API_HOST}/players/topscorers?season=${season}&league=${league}`,
    { headers: HEADERS }
  );
  if (!res.ok) throw new Error("Failed to fetch top scorers");
  return res.json();
};

export const fetchPlayerDetails = async (playerId: string, season: number) => {
  const res = await fetch(
    `${API_HOST}/players?id=${playerId}&season=${season}`,
    { headers: HEADERS }
  );
  if (!res.ok) throw new Error("Failed to fetch player details");
  return res.json();
};
