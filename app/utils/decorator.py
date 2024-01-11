from functools import wraps

from app.utils.model import CalculatorModelResponse


def response_with_validation(calculate):
    @wraps(calculate)
    def wrapper(*args, **kwargs):
        try:
            result = calculate(*args, **kwargs)
            return CalculatorModelResponse(result=result).dict(exclude_none=True)
        except ArithmeticError as e:
            return CalculatorModelResponse(error=str(e)).dict(exclude_none=True)

    return wrapper
