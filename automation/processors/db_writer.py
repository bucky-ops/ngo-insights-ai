import os
import psycopg2
from psycopg2.extras import execute_values
from dotenv import load_dotenv

load_dotenv()

class DBWriter:
    def __init__(self):
        self.db_url = os.getenv("DATABASE_URL")
        if not self.db_url:
            raise ValueError("DATABASE_URL not found in environment")
        
    def write_community_needs(self, needs):
        """
        Writes a list of community need dictionaries to the database.
        Each dict should match the CommunityNeed model fields.
        """
        if not needs:
            return

        conn = psycopg2.connect(self.db_url)
        cur = conn.cursor()
        
        try:
            # Prepare data for batch insert
            # Map Python keys to DB columns
            query = """
                INSERT INTO "CommunityNeed" (id, title, description, sector, urgency, location, source, url, "scrapedAt")
                VALUES %s
                ON CONFLICT (id) DO UPDATE SET
                    title = EXCLUDED.title,
                    description = EXCLUDED.description,
                    sector = EXCLUDED.sector,
                    urgency = EXCLUDED.urgency,
                    location = EXCLUDED.location
            """
            
            import uuid
            from datetime import datetime
            
            values = []
            for n in needs:
                values.append((
                    n.get('id', str(uuid.uuid4())),
                    n.get('title'),
                    n.get('description'),
                    n.get('sector'),
                    n.get('urgency', 'Medium'),
                    n.get('location'),
                    n.get('source'),
                    n.get('url'),
                    n.get('scrapedAt', datetime.now())
                ))
                
            execute_values(cur, query, values)
            conn.commit()
            print(f"Successfully wrote {len(needs)} needs to the database.")
            
        except Exception as e:
            conn.rollback()
            print(f"Error writing to database: {e}")
        finally:
            cur.close()
            conn.close()

if __name__ == "__main__":
    # Test data
    sample_needs = [
        {
            "title": "Water Shortage in Turkana",
            "sector": "WASH",
            "urgency": "Critical",
            "location": "Turkana, Kenya",
            "source": "ReliefWeb"
        }
    ]
    writer = DBWriter()
    writer.write_community_needs(sample_needs)
