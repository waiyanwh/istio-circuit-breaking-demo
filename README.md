## Istio Circuit Breaking Demo


### Building the images
There are `Dockerfile` for each service. Build it and push it to your own public registry.
```
docker build -t <YOUR_REGISTRY_NAME>/circuit-breaker-demo-frontend:v1 .
docker push <YOUR_REGISTRY_NAME>/circuit-breaker-demo-frontend:v1
```


### Replace images' names
Replace with your own image or you can use the image I build and test.
