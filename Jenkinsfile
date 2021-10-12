pipeline {
    agent any
    stages {
    
    stage('Clean') {
            steps {
             
             sh 'docker rmi $(docker images -a -q)'
             sh 'docker rm $(docker ps -a -f status=exited -q)'

            }
        }
    
       stage('Build Docker image'){
            steps {

                sh 'docker build -t  lala14/eduflex-frontend .'
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
                sh 'docker push lala14/eduflex-frontend'
            }
        }

        stage('Docker deploy'){
            steps {
                sh 'docker kill $(docker ps -q)'
                sh 'docker run -itd -p  4200:4200 lala14/eduflex-frontend'
            }
        }


        stage('Archving') {
            steps {
                 archiveArtifacts '**/target/*.jar'
            }
        }

       
    }
}



