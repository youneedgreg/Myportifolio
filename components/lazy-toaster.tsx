"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Toaster = dynamic(() => import("@/components/ui/toaster").then((m) => m.Toaster), { ssr: false })

/** Mounts the toast container once the browser is idle — long before anyone can trigger a toast. */
export default function LazyToaster() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const onIdle = () => setReady(true)
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(onIdle, { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(onIdle, 1500)
    return () => clearTimeout(id)
  }, [])

  return ready ? <Toaster /> : null
}
