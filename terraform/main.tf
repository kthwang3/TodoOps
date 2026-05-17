provider "aws" {
  region = "us-east-1"
}
resource "aws_security_group" "todo_app_sg" {
  name = "todo_app_sg"
  ingress {
    description = "Allow HTTPS from anywhere"
    from_port = 443
    to_port = 443
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    description = "Allow SSH from my IP"
    from_port = 22
    to_port = 22
    protocol = "tcp"
    cidr_blocks = ["24.84.204.8/32"]
  }
  ingress {
    description = "Allow HTTP from anywhere"
    from_port = 80
    to_port = 80
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress{
    description = "Node.js app"
    from_port = 3000
    to_port = 3000
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress{
    description = "Allow all outbound traffic"
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_instance" "todo_app_server" {
  ami = "ami-091138d0f0d41ff90"
  instance_type = "t3.micro"
  key_name = "aws-initial"
  vpc_security_group_ids = [aws_security_group.todo_app_sg.id]
  tags = {
    Name = "todo_app_server"
  }
}