
# Product Price API

A simple API service deployed on Kubernetes that returns the price for a given product ID.

## Features

- Input: Product ID (via query parameter)
- Output: Corresponding price
- No authentication required
- Deployed to Azure Kubernetes Service (AKS)
- Built with Docker, deployed using Kubernetes manifests

## Demo

Live API: [http://4.156.130.57/price?product_id=1](http://4.156.130.57/price?product_id=1)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/lea-devops/product-price-api.git
cd product-price-api
```

### 2. Build Docker Image

```bash
docker build -t product-price-api:latest .
```

### 3. Run Locally (optional)

```bash
docker run -p 3000:3000 product-price-api
```

### 4. Deploy to Kubernetes

Make sure you have `kubectl` configured to your cluster.

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

### 5. Test the API

```bash
curl http://<your-external-ip>/price?product_id=1
```

## Kubernetes Manifests

- `k8s/deployment.yaml`: Deployment definition
- `k8s/service.yaml`: Service definition

## Optional Improvements

- Add Horizontal Pod Autoscaler (HPA)
- Add readiness/liveness probes
- Package with Helm

---

Built with ❤️ for a Kubernetes assignment.
