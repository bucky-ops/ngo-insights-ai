import abc
import logging
import os
from datetime import datetime

class BaseScraper(abc.ABC):
    def __init__(self, name):
        self.name = name
        self.logger = self._setup_logging()
        self.results = []

    def _setup_logging(self):
        log_dir = os.path.join(os.path.dirname(__file__), '../logs')
        if not os.path.exists(log_dir):
            os.makedirs(log_dir)
        
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
            handlers=[
                logging.FileHandler(f"{log_dir}/{self.name}.log"),
                logging.StreamHandler()
            ]
        )
        return logging.getLogger(self.name)

    @abc.abstractmethod
    def run(self):
        pass

    def save_results(self, filename=None):
        if not filename:
            filename = f"{self.name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        data_dir = os.path.join(os.path.dirname(__file__), '../data')
        if not os.path.exists(data_dir):
            os.makedirs(data_dir)
            
        import json
        with open(f"{data_dir}/{filename}", 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=4, ensure_ascii=False)
        
        self.logger.info(f"Saved {len(self.results)} results to {filename}")
