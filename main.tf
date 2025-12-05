terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.4"
    }
  }
}

# Define the file content
locals {
  app_code = <<EOT
console.log("Hello, Terraform Webapp!");
EOT
}

# Create the local file in nested directories
resource "local_file" "webapp_app" {
  filename = "${path.module}/webapp/src/index.js"  # Path to the file
  content  = local.app_code
}

# Output the path to the created file
output "webapp_file_path" {
  value       = local_file.webapp_app.filename
  description = "The full path to the web application's index.js file."
}

