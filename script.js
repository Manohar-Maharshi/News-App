const newsCardsWrapper = document.getElementById('newsCardsWrapper');
const loader = document.getElementById('loading');
const api_url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8cff467918c34ba2a52c84471910153b';
loader.style.display = 'block';
getData();
async function getData() {
	const response = await fetch(api_url);
	const data = await response.json();
	data.articles.forEach((article) => {
		loader.style.display = 'none';
		newsCardsWrapper.innerHTML += `
		 	<div class="news-card">
				<div class="news-article">
					<h4 class="news-bio">
						source: <span class="news-source">${article.author}</span>
						/
						<span class="news-time">${article.publishedAt}</span>
					</h4>
					<div class="news-d-text">
						<span class="news-text">${article.description}</span>
						<a class="news-url" href="${article.url}" target="_blank">Read more...</a>
					</div>
				</div>
				<img class="news-thunbnail" src="${article.urlToImage}" alt="${article.content}" />
			 </div>
 `;
	});
}
