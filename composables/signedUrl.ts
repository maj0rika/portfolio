export default async function imageUpload(file: File) {
  const uploadUrl = ref<any>()

  const signedUrl = await $fetch('/api/signedUrl', {
    method: 'get',
    query: {
      fileName: file.name,
      fileType: file.type,
    },
  })

  const response = await fetch(signedUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  })

  uploadUrl.value = response.url
  uploadUrl.value = new URL(uploadUrl.value)

  return uploadUrl.value.origin + uploadUrl.value.pathname
}
