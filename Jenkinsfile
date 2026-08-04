pipeline {
    agent any
    stages {
        stage('Welcome') {
            steps {
                echo 'Welcome to CyberAI CI/CD Pipeline!'
            }
        }
        stage('Checkout') {
            steps {
                echo 'Repository connected successfully.'
            }
        }
        stage('Build') {
            steps {
                bat 'echo Building CyberAI...'
            }
        }
        stage('Test') {
            steps {
                bat 'echo Running tests...'
            }
        }
    }
    post {
        always {
            echo 'Pipeline Finished.'
        }
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed. Check console output for details.'
        }
    }
}
