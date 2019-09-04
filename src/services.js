import Amplify from '@aws-amplify/core';
import Storage from '@aws-amplify/storage';

export function configureAmplify() {
  Amplify.configure(
  {
   Auth: {
             "identityPoolName": "awsreactapp4f84fa2d_identitypool_4f84fa2d",
             "allowUnauthenticatedIdentities": true,
             "resourceNameTruncated": "awsrea4f84fa2d",
             "userPoolName": "awsreactapp4f84fa2d_userpool_4f84fa2d",
             "autoVerifiedAttributes": [
                 "email"
             ],
             "mfaConfiguration": "OFF",
             "mfaTypes": [
                 "SMS Text Message"
             ],
             "smsAuthenticationMessage": "Your authentication code is {####}",
             "smsVerificationMessage": "Your verification code is {####}",
             "emailVerificationSubject": "Your verification code",
             "emailVerificationMessage": "Your verification code is {####}",
             "defaultPasswordPolicy": false,
             "passwordPolicyMinLength": 8,
             "passwordPolicyCharacters": [],
             "requiredAttributes": [
                 "email"
             ],
             "userpoolClientGenerateSecret": true,
             "userpoolClientRefreshTokenValidity": 30,
             "userpoolClientWriteAttributes": [
                 "email"
             ],
             "userpoolClientReadAttributes": [
                 "email"
             ],
             "userpoolClientLambdaRole": "awsrea4f84fa2d_userpoolclient_lambda_role",
             "userpoolClientSetAttributes": false,
             "resourceName": "awsreactapp4f84fa2d",
             "authSelections": "identityPoolAndUserPool",
             "authRoleArn": {
                 "Fn::GetAtt": [
                     "AuthRole",
                     "Arn"
                 ]
             },
             "unauthRoleArn": {
                 "Fn::GetAtt": [
                     "UnauthRole",
                     "Arn"
                 ]
             },
             "useDefault": "default",
             "usernameAttributes": [
                 "email"
             ],
             "dependsOn": []
         },
  Storage: {
               "bucketName": "test-reactapp-user-content",
               "authPolicyName": "s3_amplify_bd198494",
               "unauthPolicyName": "s3_amplify_bd198494",
               "authRoleName": {
                   "Ref": "AuthRoleName"
               },
               "unauthRoleName": {
                   "Ref": "UnauthRoleName"
               },
               "selectedGuestPermissions": [
                   "s3:PutObject",
                   "s3:GetObject",
                   "s3:ListBucket"
               ],
               "selectedAuthenticatedPermissions": [
                   "s3:PutObject",
                   "s3:GetObject",
                   "s3:ListBucket"
               ],
               "s3PermissionsAuthenticatedPublic": "s3:PutObject,s3:GetObject",
               "s3PublicPolicy": "Public_policy_ede4d121",
               "s3PermissionsAuthenticatedUploads": "s3:PutObject",
               "s3UploadsPolicy": "Uploads_policy_ede4d121",
               "s3PermissionsAuthenticatedProtected": "s3:PutObject,s3:GetObject",
               "s3ProtectedPolicy": "Protected_policy_1034cea7",
               "s3PermissionsAuthenticatedPrivate": "s3:PutObject,s3:GetObject",
               "s3PrivatePolicy": "Private_policy_1034cea7",
               "AuthenticatedAllowList": "ALLOW",
               "s3ReadPolicy": "read_policy_ede4d121",
               "s3PermissionsGuestPublic": "s3:PutObject,s3:GetObject",
               "s3PermissionsGuestUploads": "s3:PutObject",
               "GuestAllowList": "ALLOW",
               "triggerFunction": "S3Trigger0869b151"
           }
  }
 );
}
//Configure Storage with S3 bucket information
export function SetS3Config(bucket, level){
   Storage.configure({
          bucket: bucket,
          level: level,
          region: 'us-east-2',
          identityPoolId: process.env.REACT_APP_identityPoolId
       });
}