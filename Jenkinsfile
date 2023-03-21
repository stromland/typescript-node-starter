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
                    clover(cloverReportDir: 'coverage', cloverReportFileName: 'clover.xml',
                        healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                        unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                        failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
                    )
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
        }
    }
}