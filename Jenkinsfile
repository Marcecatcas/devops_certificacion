pipeline {
    agent any
    tools {
        nodejs 'NodeJS 20' // Asegúrate de configurar este nombre en Jenkins
    }
    stages {
        stage('Instalar Dependencias') {
            steps {
                echo 'Instalando dependencias...'
                bat 'npm install' // Comando para instalar dependencias
            }
        }
        stage('Ejecutar Pruebas') {
            steps {
                echo 'Ejecutando pruebas...'
                bat 'npm test' // Comando para ejecutar pruebas
            }
        }
        stage('Construir Imagen Docker') {
            steps {
                echo 'Construyendo la imagen Docker...'
                bat 'docker build -t docker-node .' // Comando para construir la imagen Docker
            }
        }
        stage('Desplegar en Docker') {
            steps {
                echo 'Desplegando el contenedor Docker...'
                bat 'docker-compose up -d' // Comando para iniciar el contenedor con Docker Compose
            }
        }
    }
}
