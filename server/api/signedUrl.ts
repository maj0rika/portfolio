import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export default defineEventHandler(async evnet => {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } =
    useRuntimeConfig()

  const s3 = new S3Client({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  })

  let query = getQuery(evnet)

  const timestamp = new Date().getTime()
  const key = `${timestamp}_${query.fileName}`

  const params: {
    Bucket: string
    Key: string
    ContentType: any
  } = {
    Bucket: 'qnn24',
    Key: key,
    ContentType: query.fileType,
  }

  const command = new PutObjectCommand(params)

  const signedUrl = await getSignedUrl(s3, command, {
    expiresIn: 3600, // URL expiration time in seconds
  })

  return signedUrl
})
