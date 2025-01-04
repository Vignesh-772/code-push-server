#!/bin/sh

# CONSTANTS

region="ap-south-1"

alias aws="aws --endpoint-url=http://localhost:4566 --region=${region}"

aws s3 mb s3://code-push-assets