# DevOps Certificación

Este repositorio contiene un proyecto de ejemplo diseñado para aplicar prácticas de DevOps, integrando herramientas y procesos automatizados para construir, probar y desplegar una aplicación Node.js.

## Tecnologías Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) **Node.js**: Plataforma para ejecutar código JavaScript en el servidor.
- ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?logo=jenkins&logoColor=white) **Jenkins**: Orquestador de pipelines para integración y entrega continua.
- ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white) **Docker**: Contenerización de la aplicación.
- ![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?logo=docker&logoColor=white) **Docker Compose**: Orquestación de contenedores locales.

## Contenido del Proyecto

- **Aplicación Node.js**: Código fuente básico (`index.js`) junto con su configuración en `package.json`.
- **Pipeline CI/CD**: Definido en `Jenkinsfile`, incluye instalación de dependencias, ejecución de pruebas y despliegue con Docker.
- **Contenedores**:
  - Configuración del contenedor en `Dockerfile`.
  - Orquestación local con `docker-compose.yml`.

## Requisitos

- Node.js 20 o superior
- Docker y Docker Compose
- Jenkins configurado con Node.js y Docker

## Pasos para Ejecutar

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/Marcecatcas/devops_certificacion.git
   cd devops_certificacion
