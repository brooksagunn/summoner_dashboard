const rankInfo = document.getElementById("rank-info");
const rankWR = document.getElementById("rank-wr");
const rankImg = document.getElementById("rank-image");
const api_key = "RGAPI-b3ae3281-0065-4631-800e-a20e4f55dec1";

fetch(
  // Summoner by name
  `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Self%20and%20Sea?api_key=${api_key}`
)
  .then((res) => res.json())
  .then((data) =>
    fetch(
      // Entries by ID (Endpoint)
      `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=${api_key}`
    )
      .then((res) => res.json())
      .then(
        (data) =>
          (rankInfo.textContent =
            "Rank: " +
            data[0].tier +
            " " +
            data[0].rank +
            " / " +
            data[0].leaguePoints +
            "LP") &&
          (rankWR.textContent =
            data[0].wins +
            " Wins" +
            " / " +
            data[0].losses +
            " Losses" +
            " (" +
            Math.round((data[0].wins / (data[0].wins + data[0].losses)) * 100) +
            "%)") &&
          (rankImg.src = "img/ranks/" + "Gold_4.png")
      )
  );
