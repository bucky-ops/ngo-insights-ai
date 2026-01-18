import requests
from bs4 import BeautifulSoup
from base_scraper import BaseScraper
import time

class NGONewsScraper(BaseScraper):
    def __init__(self):
        super().__init__("ngo_news_eastafrica")
        self.base_url = "https://reliefweb.int/updates?country=132" # Kenya filter example

    def run(self):
        self.logger.info(f"Starting crawl for {self.base_url}")
        
        try:
            # In a real scenario, we'd iterate through pages
            response = requests.get(self.base_url, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Example selector for ReliefWeb articles (Note: structure changes frequently)
            articles = soup.select('.rw-river-article')
            
            for article in articles[:5]: # Take top 5 for demo
                title_elem = article.select_one('.rw-river-article__title')
                link_elem = article.select_one('a')
                
                if title_elem and link_elem:
                    title = title_elem.get_text(strip=True)
                    url = link_elem['href']
                    if not url.startswith('http'):
                        url = f"https://reliefweb.int{url}"
                        
                    self.results.append({
                        "title": title,
                        "url": url,
                        "source": "ReliefWeb",
                        "scraped_at": time.strftime('%Y-%m-%dT%H:%M:%SZ')
                    })
                    self.logger.info(f"Picked up: {title}")
            
            self.save_results()
            
        except Exception as e:
            self.logger.error(f"Error during crawl: {str(e)}")

if __name__ == "__main__":
    scraper = NGONewsScraper()
    scraper.run()
