from fastapi import FastAPI

app = FastAPI(title="PrepAI API")


@app.get("/")
def home():
    return {"message": "PrepAI backend is running!"}
