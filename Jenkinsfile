pipeline {
    agent any
    stages {
    
    stage('Clean') {
            steps {
             sh 'docker-compose down -d'
             sh 'docker rmi $(docker images -a -q)'
             sh 'docker rm $(docker ps -a -f status=exited -q)'

            }
        }
    
        
       stage('Staging') {
            steps {
                sh "docker-compose build"
                sh "docker-compose up -d"
            }
        }


        stage('Docker Login'){

            steps {
                withCredentials([string(credentialsId: 'Docker_id', variable: 'DockerPassword')]) {
                    sh "docker login -u lala14 -p ${DockerPassword}"
                }
            }
        }

        stage('Docker Push'){
            steps {
                sh 'docker push lala14/eduflex-backend'
                sh 'docker push lala14/eduflex-frontend'
            }
        }

       
    }
}



