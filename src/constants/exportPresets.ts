export interface SizePreset {
  id: string
  label: string
  width: number
  height: number
  hint: string
}

export const sizePresets: SizePreset[] = [
  { id: "iphone-14-pro", label: "iPhone 14 Pro", width: 393, height: 852, hint: "Celular" },
  { id: "iphone-se", label: "iPhone SE", width: 375, height: 667, hint: "Compacto" },
  { id: "android-standard", label: "Android padrão", width: 360, height: 800, hint: "Celular" },
  { id: "android-large", label: "Android grande", width: 412, height: 915, hint: "Celular" },
  { id: "ipad", label: "iPad", width: 768, height: 1024, hint: "Tablet" },
  { id: "instagram-story", label: "Story do Instagram", width: 1080, height: 1920, hint: "Social" },
  { id: "desktop", label: "Computador", width: 1920, height: 1080, hint: "Largo" },
]