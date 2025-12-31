import { Loader2 } from "lucide-react"

export default function TransitionLoader() {
    return (
        <div className="fixed z-99999 inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-sm text-white text-center">
          <Loader2 className="animate-spin" />
        </div>
    )
}