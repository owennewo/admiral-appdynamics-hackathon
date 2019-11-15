mvn package
scp -i ~/Downloads/owen-pair.pem target/medio-rest-1.0-SNAPSHOT-runner.jar  ubuntu@ec2-3-8-162-130.eu-west-2.compute.amazonaws.com:runner.jar
#ssh -i ~/Downloads/owen-pair.pem ubuntu@ec2-3-8-162-130.eu-west-2.compute.amazonaws.com
