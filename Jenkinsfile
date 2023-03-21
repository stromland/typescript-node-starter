pipeline {
    agent any 
    stages {
        stage("Install") {
            steps {
                nodejs(nodeJSInstallationName: 'node-lts') {
                    sh 'npm ci'
                }
            }
        }
        stage("Test") {
            steps {
                nodejs(nodeJSInstallationName: 'node-lts') {
                    sh 'npm run test:coverage'
                }
            }
        }
        stage("Build") {
            steps {
                nodejs(nodeJSInstallationName: 'node-lts') {
                    sh 'npm run build'
                }
            }
        }
    }
}