---
created: 2025-01-17
updated: 2025-01-17
---
# stey-loki

Documents

- https://grafana.com/docs/loki/latest/installation/helm/

## Install helm

```
brew install helm
```

## Add grafana repo

```
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

## Create namespace

```
kubectl create namespace {NAMESPACE}
```

## Deploy Loki to k8s cluster

```
helm upgrade --install loki --namespace={NAMESPACE} grafana/loki-stack --set grafana.enabled=true
```

## Get grafana password

Default username is `admin`.

```
kubectl get secret -n {NAMESPACE} loki-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

## Access in local

1. telepresence
2. k8s port forward

```
kubectl port-forward -n {NAMESPACE} service/loki-grafana 3000:80
```
