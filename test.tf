# Specify the provider (AWS in this case)
provider "aws" {
  region = "us-west-2"  # You can change the region
}

# Define the EC2 instance
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"  # Replace with your preferred AMI ID
  instance_type = "t2.micro"  # The instance type (t2.micro is the free tier option)

  tags = {
    Name = "MyExampleInstance"
  }
#chnaging this file to test something

}

