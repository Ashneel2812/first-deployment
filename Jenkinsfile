pipeline {
    agent {
        docker {
            image 'python:3.10-slim'
            args '-u root'
        }
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                echo 'Installing dependencies inside Docker container...'
                sh '''
                    python -m pip install --upgrade pip
                    pip install -r requirements.txt
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    python -m unittest discover -v
                '''
            }
        }

        stage('Run App (Smoke Test)') {
            steps {
                sh '''
                    python app.py &
                    sleep 5
                    curl http://127.0.0.1:5000
                    pkill -f "python app.py"
                '''
            }
        }
    }

    post {
        always {
            echo 'Build Completed'
        }
        success {
            echo 'Build Successful'
        }
        failure {
            echo 'Build Failed'
        }
    }
}