pipeline {
    agent any

    stages {

        stage('Checkout GitHub') {
            steps {
                echo 'Downloading code from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=list,html'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed'
        }

        success {
            echo 'All tests passed!'
        }

        failure {
            echo 'Some tests failed!'
        }
    }
}