# React Docker App

A simple React web application containerized with Docker.

### 1. Build Image
```bash
docker build -t react-app .
```

### 2. Run Container
```bash
docker run -d -p 8080:3000 --name react-container react-app
```

Open http://localhost:8080 in your browser.
