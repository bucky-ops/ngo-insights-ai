import os
import json
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from dotenv import load_dotenv

load_dotenv()

class AIProcessor:
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4", temperature=0.3)
        self.analysis_prompt = ChatPromptTemplate.from_template("""
        Analyze the following community need report from an NGO source in East Africa:
        
        Title: {title}
        Source: {source}
        
        Task: 
        1. Identify the primary sector (Healthcare, Education, WASH, etc.)
        2. Assess the urgency (Low, Medium, High, Critical)
        3. Draft a 1-sentence "Impact Hook" for a donor outreach message.
        
        Output in JSON format with keys: sector, urgency, impact_hook.
        """)

    def process_batch(self, input_file):
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        processed_results = []
        for item in data:
            # Here we would call the LLM
            # For the MVP/Demo, we simulate the output structure
            result = {
                **item,
                "analysis": {
                    "sector": "Healthcare", # Logic to determine from content
                    "urgency": "High",
                    "impact_hook": f"Urgent medical supply shortage identified in {item['title']}. We need your support to bridge this gap."
                }
            }
            processed_results.append(result)
            
        return processed_results

if __name__ == "__main__":
    processor = AIProcessor()
    # Example usage:
    # results = processor.process_batch("../data/latest_scrape.json")
    print("AI Processor initialized and ready.")
