pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browser (Chromium only)') {
    steps {
        bat 'npx playwright install chromium'
    }
}

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --project=admin-tests'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
        failure {
            echo '❌ Playwright tests failed'
        }
        success {
            echo '✅ Playwright tests passed'
        }
    }
}
