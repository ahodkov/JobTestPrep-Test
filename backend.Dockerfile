FROM python:3.11.6-slim as python-base

RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    curl \
    build-essential

RUN pip install poetry

COPY poetry.lock pyproject.toml ./

RUN poetry install --no-dev
RUN poetry export --without-hashes --format=requirements.txt > requirements.txt

RUN pip install -r requirements.txt
COPY app ./app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]