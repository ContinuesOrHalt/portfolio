import { Text } from '@components/ui'

export default function NotFoundView() {
  return (
    <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
      <Text variant="heading" id="not_found" />
      <Text className="mt-8" id="not_found.desc" />
    </div>
  )
}
