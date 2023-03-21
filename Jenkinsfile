pipeline {
    agent any 

    stages {
        stage("Install") {
            steps {
                nodejs('node-lts') {
                    sh 'npm ci'
                }
            }
        }
        stage("Test") {
            steps {
                nodejs('node-lts') {
                    sh 'npm run test:coverage'
                }
            }
        }
        stage("Build") {
            steps {
                nodejs('node-lts') {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        always {
            junit 'junit.xml'
            clover(cloverReportDir: 'coverage', cloverReportFileName: 'clover.xml')
        }
    }
}