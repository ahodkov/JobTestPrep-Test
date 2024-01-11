from abc import ABC, abstractmethod


class BaseCalc(ABC):
    """Base class for core operations calculation."""

    def __init__(self, x: float, y: float) -> None:
        self.x = x
        self.y = y

    @property
    def x(self) -> float:
        return self._x

    @property
    def y(self) -> float:
        return self._y

    @x.setter
    def x(self, value: float):
        self._x = value

    @y.setter
    def y(self, value: float):
        self._y = value

    @abstractmethod
    def calculate(self) -> float:
        pass
