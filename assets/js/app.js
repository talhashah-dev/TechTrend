const searchInp = document.getElementById("searchInp");
const searchBtn = document.getElementById("searchBtn");
const news_img = document.querySelector(".news-img");
const news_title = document.querySelector(".news-title");
const news_date = document.querySelector(".news-date");
const news_summary = document.querySelector(".news-summary");

const API_KEY = "de3033db09094c09a2e99beaa9b3d083";

async function searchNews() {
  try {
    const result = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

async function headlinesSearch() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=tech&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    news_img.src = `${data.articles[0].urlToImage}`;
    news_title.innerText = `${data.articles[0].title}`;
    news_summary.innerText = `${data.articles[0].description}`;
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", searchNews);
window.addEventListener("load", headlinesSearch);
