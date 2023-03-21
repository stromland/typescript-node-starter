pipeline {
    agent any 
    stages {
        stage("Build") {
            steps {
                nodejs(nodeJSInstallationName: 'node-lts') {
                    sh 'npm --version'
                }
            }
        }
    }
}