pipeline {
    agent any 
    tools {
        nodejs 'node-lts'
    }

    stages {
        stage("Install") {
            steps {
                sh 'npm ci'
            }
        }
        stage("Test") {
            steps {
                sh 'npm run test:coverage'
                clover(cloverReportDir: 'coverage', cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                    unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                    failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
                )
            }
        }
        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }
        stage("Release") {
            when {
                tag "v*"
            }
            input {
                message 'Vil du release denne versjonen?'
                id 'release'
                ok 'Ja'
                submitter 'admin'
                parameters {
                    booleanParam 'release'
                }
            }
            steps {
                sh 'npm pack'
            }
        }
    }

    post {
        always {
            junit 'junit.xml'
        }
    }
}