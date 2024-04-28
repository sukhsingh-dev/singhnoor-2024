import { useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const ls = typeof window !== "undefined" ? window.localStorage : null

  const [value, setValue] = useState<T>(() => {
    const jsonValue = ls?.getItem(key)

    if (jsonValue !== null) {
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      return jsonValue !== undefined ? JSON.parse(jsonValue) : []
    }

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    // eslint-disable-next-line no-else-return
    } else {
      return initialValue
    }

  })

  useEffect(() => {
    ls?.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}

export default useLocalStorage
