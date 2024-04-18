#!/bin/bash

# Prompt for specific information
read -p "Enter specific info: " info

# Check if info is provided
if [ -n "$info" ]; then
  # Add files to git staging area
  git add .
else
  echo "Specific info not provided. Skipping git add."
fi
