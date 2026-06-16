Backend / Frontend Commands to Remember

Go to backend folder
cd backend

Windows Venv Activate
.venv\Scripts\activate

Mac Venv Activate
source .venv/bin/activate

Install Python Requirements
pip install -r requirements.txt

Save Current Python Requirements
pip freeze > requirements.txt

Run backend locally
uvicorn main:app --reload

Test local backend
http://127.0.0.1:8000
http://127.0.0.1:8000/docs

Go to frontend folder
cd frontend

Run frontend locally
npm run dev