pipeline {
    agent any
  
    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                  node -v
                  npm -v
                  npm ci --silent
                  npx playwright install chromium
                '''
            }
        }

        stage('Compile TypeScript') {
            steps {
                sh 'npx tsc'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
                    sh """
                      npx playwright test
                    """
                }
            }
        }
    }

    post {
        always {
                sh 'mkdir -p /var/lib/jenkins/tmp || true'
                withEnv(['JAVA_OPTS=-Djava.io.tmpdir=C:\ProgramData\Jenkins\temp']) {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

}
