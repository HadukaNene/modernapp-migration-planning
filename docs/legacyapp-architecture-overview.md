# LegacyApp Architecture Overview

## 1. Main Components
- Web UI (server-rendered pages)
- Business logic layer
- Legacy relational database
- Reporting module

## 2. External Dependencies
- Payment gateway
- Email notification service
- Internal reporting service
- Authentication provider

## 3. Deployment Process
- Manual deployment to on-prem servers
- No automated testing
- No CI/CD pipeline
- High risk of deployment errors

## 4. Pain Points
- Frequent outages during deployments
- Slow performance under heavy load
- Hard to scale
- Poor observability
