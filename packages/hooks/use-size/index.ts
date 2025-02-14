import { computed, inject, unref } from 'vue'
import { defineEpProp } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { InjectionKey, Ref } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export const useSizeProp = defineEpProp({
  type: String,
  values: componentSizes,
  required: false,
})

export const useSizeProps = {
  size: useSizeProp,
}

export interface SizeContext {
  size: Ref<ComponentSize>
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size')

export const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {} as SizeContext)

  return computed<ComponentSize>(() => {
    return unref(injectedSize.size) || ''
  })
}
