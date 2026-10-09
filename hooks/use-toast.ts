import type { toast as sonnerToast } from "sonner"

type ToastArgs = Parameters<typeof sonnerToast>

/** Toasts load sonner on first use, keeping it out of the initial bundle. */
function toast(...args: ToastArgs) {
  void import("sonner").then(({ toast }) => toast(...args))
}

export const useToast = () => {
  return { toast }
}
