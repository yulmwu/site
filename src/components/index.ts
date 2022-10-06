import { PropsWithChildren } from 'react'

export * as Text from './components/Text'
export * as Button from './components/Button'
export * as Center from './components/Center'
export * as Background from './components/Background'

export type PropsBase = PropsWithChildren<{ className: string }>
