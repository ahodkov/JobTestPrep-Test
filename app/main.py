from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.calculator import calculator

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3001",
]

app = FastAPI()

app.include_router(calculator)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", status_code=200)
async def root():
    """A simple root for checking the work of the server.

    Returns:
        dict: message
    """
    return {"message": "It works!"}
