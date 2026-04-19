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
                echo 'Installing dependencies...'
                sh 'python3 -m pip install --upgrade pip'
                sh 'pip3 install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Flask unit tests...'
                sh 'python3 -m unittest discover -v'
            }
        }

        stage('Run App (Smoke Test)') {
            steps {
                echo 'Starting Flask app (quick check)...'
                sh 'python3 app.py & sleep 5; pkill -f app.py'
            }
        }
    }

    post {
        success {
            echo 'Build Successful 🚀'
        }
        failure {
            echo 'Build Failed ❌'
        }
    }
}