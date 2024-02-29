# AWS Site Deploy

## Description

This repo will help you deploy your React static built web site to AWS services using CloudFormation, your code will reside inside an S3 bucket with a configurable name and will be exposed through a CloudFront distribution to be publicly accessed. 

## Prerequisites

1. AWS account
2. GitHub secrets in your repo as follows:
    - AWS_ACCESS_KEY_ID: The Key ID for the user/role that will access AWS on your behalf.
    - AWS_SECRET_ACCESS_KEY: The Access Key for the user/role that will access AWS on your behalf.
    - AWS_REGION: The AWS region that will have your infrastructure.

## Deploy your site

1. Make sure your user has one dedicated policy for deployment that has this JSON format:

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "S3",
			"Effect": "Allow",
			"Action": [
				"s3:*"
			],
			"Resource": [
				"arn:aws:s3:::*"
			]
		},
		{
			"Sid": "CloudFront",
			"Effect": "Allow",
			"Action": [
				"cloudfront:*"
			],
			"Resource": [
				"*"
			]
		},
		{
			"Sid": "CloudFormation",
			"Effect": "Allow",
			"Action": [
				"cloudformation:*"
			],
			"Resource": [
				"*"
			]
		}
	]
}
```
2. Make sure that you have created the 3 needed secrets in your repository secrets.
3. On code level, search for this string `<your-`, it should show 6 positions to change some values according to your usecase.
4. for the value `<your-distribution-id>` you can leave it for the first deployment, first deployment will fail anyways because you'll still need to fill this value after the stack is created.
5. Go ahead and change your source files and commit it to a branch and open a PR, this is enogh to trigger a GitHub Actions build.
The build will proceed until it deploys the stack then it will failm this is expected.
6. Check your `distribution-id` of your CloudFront distribution in the Github Actions build logs and update that value in `ci.yml` file.
7. Trigger the build again, this time it should pass.
8. Check your build outputs, it should log your CloudFront domain. CloudFront domain is usually something that looks like this: `https://xyz123.cloudfront.net`.
9. Check your website at this CloudFront domain, it should be something like this `https://xyz123.cloudfront.net/index.html`