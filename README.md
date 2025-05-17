# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 2e2bb80ef2b17ba57ab8eff7a5e64b50b093c029
# E-Commerce Microservices – Makeup & Skincare

A microservices-based e-commerce application built with React, Node.js, MongoDB, Docker, and Kubernetes. The app handles users, transactions, reporting, and notifications in a modular, scalable way.

---

## Overview

This project demonstrates a full-stack e-commerce platform using:
- **Microservices Architecture**
- **Docker & Docker Compose**
- **Kubernetes for orchestration**
- **Prometheus + Grafana for monitoring**
- **MongoDB for data persistence**

---

##  Architecture

```
Frontend (React)
     |
[User Service] --- [Transaction Service] --- [Reporting Service]
     \                     |                       /
      \----> MongoDB <-----|------> Notification Service (Optional)
                          |
                   [Prometheus + Grafana]
```

Each service is containerized and deployed independently, making the system scalable and maintainable.

---

##  Tech Stack

| Layer          | Technology                       |
|----------------|-----------------------------------|
| Frontend       | React.js                          |
| Backend        | Node.js (Express)                 |
| Database       | MongoDB                           |
| Containerization | Docker, Docker Compose          |
| Orchestration  | Kubernetes                        |
| Monitoring     | Prometheus + Grafana              |
| Authentication | JWT                               |

---

##  Microservices Description

| Service           | Description                                      |
|------------------|--------------------------------------------------|
| **User Service**  | Handles signup, login, and user data             |
| **Notification Service** | Sends alerts for user actions |
| **Frontend**      | React app to interact with backend services      |
| **MongoDB**       | Stores user data, transactions, and reports      |

---

##  Docker Setup

### Build and Run Locally

```bash
docker-compose up --build
```

All services will be started along with MongoDB.

---

## ☸️ Kubernetes Deployment

You can deploy services on Kubernetes using:

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/mongo-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/prometheus-deployment.yaml
kubectl apply -f k8s/grafana-deployment.yaml
# and all other services
```

---

##  Monitoring

### Prometheus

Runs as a pod and collects metrics from the services.

### Grafana

Provides dashboards and visualizations for real-time monitoring.

Access Grafana:

```bash
kubectl port-forward service/grafana-service 3000:3000
```

Default login: `admin / admin`

---

## ⚙️ Environments

Currently supports:
- `dev` via default `docker-compose.yml`
- To support staging and prod, duplicate the file as:
  - `docker-compose.staging.yml`
  - `docker-compose.prod.yml`

You can define environment-specific variables in `.env.dev`, `.env.prod`, etc.

---

##  How to Run ?

### Option 1: Docker Compose

```bash
docker-compose up --build
```

### Option 2: Kubernetes (Minikube or any cluster)

```bash
kubectl apply -f k8s/
```

---

##  API Endpoints (Examples)

### User Service

```http
POST /api/users/register
POST /api/users/login
GET /api/users/profile
```
