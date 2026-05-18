# TodoOps
TodoOps is a Todo list app that is built around a multi-container cloud architecture. I made this cloud deployment project to help me improve my skills using DevOps infra and tools.

## Key Features

- Create, read, update, and delete your tasks
- Every task is date-stamped and shows completion status
- Your list is saved on a secure cloud database

### Cloud Highlights

- Full REST API with MongoDB
- Multi-container Docker Compose
- Infrastructure as Code with Terraform
- Configuration management with Ansible
- CI/CD pipeline with GitHub Actions
- Nginx reverse proxy
## Architecture

**Internet → Nginx → Node.js → MongoDB**

## Infrastructure

AWS EC2
└── Docker
    ├── nginx container (port 80)
    ├── node_app container (port 3000, internal only)
    └── db container (port 27017, internal only)

## Technology Stack

### Infrastructure as Code
- Terraform
- Ansible

### Containerization
- Docker

### Cloud & Hosting
- AWS EC2

### CI/CD
- GitHub Actions

### Database
- MongoDB

### Web Server/Reverse Proxy
- Nginx

### Languages, Frameworks & Libraries
- Javascript
- Node.js + Express
- Mongoose

