export async function handler(event, context) {
  try {
    const PLACE_ID = "115442728708640";

    const universeRes = await fetch(
      `https://apis.roblox.com/universes/v1/places/${PLACE_ID}/universe`
    );
    const universeData = await universeRes.json();
    const universeId = universeData.universeId;

    const gameRes = await fetch(
      `https://games.roblox.com/v1/games?universeIds=${universeId}`
    );
    const gameData = await gameRes.json();

    return {
      statusCode: 200,
      body: JSON.stringify(gameData.data[0]),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
}
