#!/bin/bash

export AWS_DEFAULT_REGION=us-east-1
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/tmp/mongo-backup-$TIMESTAMP"
ARCHIVE="mongo-backup-$TIMESTAMP.tar.gz"

# Dump MongoDB
docker exec app-db-1 mongodump --out /tmp/mongodump

#Copy dump out of container
docker cp app-db-1:/tmp/mongodump $BACKUP_DIR

# Compress
tar -czf /tmp/$ARCHIVE -C /tmp mongo-backup-$TIMESTAMP

# Upload to S3
aws s3 cp /tmp/$ARCHIVE s3://$S3_BUCKET_NAME/$ARCHIVE

# Cleanup
rm -rf $BACKUP_DIR /tmp/$ARCHIVE
docker exec app-db-1 rm -rf /tmp/mongodump