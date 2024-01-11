from pydantic import BaseModel


class CalculatorModelRequest(BaseModel):
    x: float
    y: float
    operator: str


class CalculatorModelResponse(BaseModel):
    result: float | None = None
    error: str | None = None
