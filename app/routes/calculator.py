from fastapi import APIRouter

from app.core.calculator import (Addition, Division, Multiplication,
                                 Substraction)
from app.utils.model import CalculatorModelRequest, CalculatorModelResponse

calculator = APIRouter()


def calculation_by_operator(item: CalculatorModelRequest):
    operator = item.operator
    x = item.x
    y = item.y

    match operator:
        case "+":
            return Addition(x, y)
        case "-":
            return Substraction(x, y)
        case "*":
            return Multiplication(x, y)
        case "/":
            return Division(x, y)
        case _:
            raise NotImplementedError("This operation has not yet been implemented.")


@calculator.post("/calculate")
async def calculate(item: CalculatorModelRequest) -> CalculatorModelResponse:
    """_summary_

    Args:
        item (CalculatorModelRequest): request for a calculation.

    Returns:
        CalculatorModelResponse: result of the calculation.
    """
    operator = calculation_by_operator(item)
    return operator.calculate()
