pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup') {
            steps {
                echo 'Using preinstalled Python environment...'
                sh '''
                    python3 -m venv venv
                    . venv/bin/activate
                    pip install --upgrade pip
                    pip install -r requirements.txt
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    . venv/bin/activate
                    python -m unittest discover -v
                '''
            }
        }

        stage('Run App (Smoke Test)') {
            steps {
                sh '''
                    . venv/bin/activate
                    python app.py &
                    sleep 5
                    curl http://127.0.0.1:5000
                    pkill -f "python app.py"
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
    }
}