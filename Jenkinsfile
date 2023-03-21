pipeline {
    agent {
        kubernetes {
            cloud 'kubernetes'
            inheritFrom 'default'
        }
    }
    stages {
        stage("Build") {
            steps {
                echo 'Hello World'
            }
        }
    }
}