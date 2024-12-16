let currentPage = 1;
function loadNews(page) {
  const loadingIndicator = document.getElementById("loading");
  loadingIndicator.style.display = "block";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `data.php?page=${page}`, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      loadingIndicator.style.display = "none";
      console.log(xhr.responseText);
      if (xhr.status === 200) {
        const newsItems = JSON.parse(xhr.responseText);

        if (newsItems.length === 0) {
          alert("No more news to display!");
          document.getElementById("next-button").disabled = true; // Disable the next button
          return;
        }

        const newsContainer = document.getElementById("news-container");
        newsItems.forEach((news) => {
          const newsItem = document.createElement("div");
          newsItem.classList.add("news-item");

          newsItem.innerHTML = `
            <h3>${news.Title}</h3>
            <p>${news.Content}</p>
            <small>Published on: ${news.Published_date}</small>
          `;

          newsContainer.appendChild(newsItem);
        });
      } else {
        console.error("Failed to fetch news: ", xhr.statusText);
        alert("Failed to load news.");
      }
    }
  };

  xhr.send();
}

document.addEventListener("DOMContentLoaded", () => {
  loadNews(currentPage);
});

document.getElementById("next-button").addEventListener("click", () => {
  currentPage++;
  loadNews(currentPage);
});
