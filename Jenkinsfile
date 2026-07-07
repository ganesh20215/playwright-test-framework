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
                      echo "Running tests on ENV=${params.ENV}"
                      ENV=${params.ENV} \
                      npx playwright test --grep ${params.TEST_TAG}
                    """
                }
            }
        }
    }

    post {
        always {
                sh 'mkdir -p /var/lib/jenkins/tmp || true'
                withEnv(['JAVA_OPTS=-Djava.io.tmpdir=/var/lib/jenkins/tmp']) {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

}
