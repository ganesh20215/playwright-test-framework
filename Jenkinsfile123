pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat '''
                    node -v
                    npm -v
                    npm ci --silent
                    npx playwright install chromium
                '''
            }
        }

        stage('Compile TypeScript') {
            steps {
                bat 'npx tsc'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                    bat 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            script {
                // Create temp directory if it doesn't exist
                bat '''
                    if not exist "C:\\ProgramData\\Jenkins\\temp" (
                        mkdir "C:\\ProgramData\\Jenkins\\temp"
                    )
                '''

                // Set JAVA_OPTS for this block
                withEnv(['JAVA_OPTS=-Djava.io.tmpdir=C:/ProgramData/Jenkins/temp']) {
                    allure(
                        includeProperties: false,
                        jdk: '',
                        results: [[path: 'allure-results']]
                    )
                }
            }
        }
    }
}
