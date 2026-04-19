pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Environment') {
            steps {
                echo 'Setting up Python virtual environment...'
                sh '''
                    sudo apt update
                    sudo apt install -y python3 python3-pip python3-venv

                    # Create virtual environment
                    python3 -m venv venv

                    # Activate and upgrade pip inside venv (safe way)
                    . venv/bin/activate
                    pip install --upgrade pip
                '''
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running unit tests...'
                sh '''
                    . venv/bin/activate
                    python -m unittest discover -v
                '''
            }
        }

        stage('Run App (Smoke Test)') {
            steps {
                echo 'Running calculator app...'
                sh '''
                    . venv/bin/activate
                    python calculator.py
                '''
            }
        }
    }

    post {
        success {
            echo 'Build Successful ✔'
        }
        failure {
            echo 'Build Failed ❌'
        }
        always {
            echo 'Pipeline finished.'
        }
    }
}