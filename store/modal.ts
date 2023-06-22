import { z } from 'zod'

type ModalType = 'CONFIRM' | 'CONFIRM_CANCEL' | 'ERROR' | 'COMMENT'

const zModalCallback = z.function().nullish()
type ModalCallback = z.infer<typeof zModalCallback>

export const zModalPayload = z.object({
  title: z.string().nullish(),
  content: z.string().nullish(),
  comment: z.string().nullish(),
  img: z.string().nullish(),
  confirmButtonText: z.string().nullish(),
  confirmButtonStyle: z.string().nullish(),
  cancelButtonText: z.string().nullish(),
  cancelButtonStyle: z.string().nullish(),
  onClose: zModalCallback,
  onConfirm: zModalCallback,
  onCancel: zModalCallback,
})

export type ModalPayload = z.infer<typeof zModalPayload>

export const useModal = defineStore('modal', () => {
  const show = ref(false)
  const type = ref('CONFIRM')
  const onClose = ref<ModalCallback>()
  const onConfirm = ref<ModalCallback>()
  const onCancel = ref<ModalCallback>()

  const title = ref('')
  const content = ref('')
  const comment = ref('')
  const img = ref('')

  const confirmButtonText = ref('확인')
  const cancelButtonText = ref('취소')

  const confirmButtonStyle = ref('')
  const cancelButtonStyle = ref('')

  function open(modalType: ModalType, payload: ModalPayload) {
    type.value = modalType || 'CONFIRM'

    title.value = payload.title || ''
    content.value = payload.content || ''
    img.value = payload.img || ''
    confirmButtonText.value = payload.confirmButtonText || '확인'
    cancelButtonText.value = payload.cancelButtonText || '취소'
    confirmButtonStyle.value = payload.confirmButtonStyle || ''
    cancelButtonStyle.value = payload.cancelButtonStyle || ''
    comment.value = payload.comment || ''

    onClose.value = payload.onClose
    onConfirm.value = payload.onConfirm
    onCancel.value = payload.onCancel

    show.value = true
    document.body.style.overflow = 'hidden'
  }

  function close() {
    if (onClose.value) {
      onClose.value()
    }
    show.value = false
    document.body.style.overflow = ''
  }

  function confirm(...args: any[]) {
    if (onConfirm.value) {
      onConfirm.value(...args)
    }
    close()
  }

  function cancel() {
    if (onCancel.value) {
      onCancel.value()
    }
    close()
  }

  return {
    show,
    type,
    open,
    close,
    confirm,
    cancel,
    title,
    content,
    confirmButtonText,
    cancelButtonText,
    confirmButtonStyle,
    cancelButtonStyle,
    onClose,
    onConfirm,
    onCancel,
    comment,
    img,
  }
})
