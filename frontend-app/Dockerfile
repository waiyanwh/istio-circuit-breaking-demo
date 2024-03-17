FROM python:3.6

COPY . /app
WORKDIR /app
RUN pip install flask requests
EXPOSE 8000
ENTRYPOINT ["python"]
CMD ["app.py"]
