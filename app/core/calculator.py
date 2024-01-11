from app.core.base import BaseCalc
from app.utils.decorator import response_with_validation


class Addition(BaseCalc):
    """
    Class for the sum of two given numbers.
    """

    def __init__(self, x: float, y: float) -> None:
        super().__init__(x, y)

    @response_with_validation
    def calculate(self) -> float:
        """
        Sum of two numbers.

        Returns:
            float: result of the sum.
        """

        return self.x + self.y


class Substraction(BaseCalc):
    """
    Class for the substraction of two given numbers.
    """

    def __init__(self, x: float, y: float) -> None:
        super().__init__(x, y)

    @response_with_validation
    def calculate(self) -> float:
        """
        Substraction of two numbers.

        Returns:
            float: result of the substraction.
        """

        return self.x - self.y


class Division(BaseCalc):
    """
    Class for the division of two given numbers.
    """

    def __init__(self, x: float, y: float) -> None:
        super().__init__(x, y)

    @response_with_validation
    def calculate(self) -> float:
        """
        Division of two numbers.

        Returns:
            float: result of the division.
        """

        return self.x / self.y


class Multiplication(BaseCalc):
    """
    Class for the multiplication of two given numbers.
    """

    def __init__(self, x: float, y: float) -> None:
        super().__init__(x, y)

    @response_with_validation
    def calculate(self) -> float:
        """
        Multiplication of two numbers.

        Returns:
            float: result of the multiplication.
        """

        return self.x * self.y
