import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="overflow-hidden max-w-md w-full">
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qadeer_mage-qtcfPshIDj8rAF2pCuR5iYsjCB7Qx9.jpeg"
            alt="Portrait of a young man with dark curly hair and beard wearing a light green sports jersey"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="p-6 bg-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Team Member</h2>
            <p className="text-gray-600 mb-4">Professional Athlete</p>
            <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
