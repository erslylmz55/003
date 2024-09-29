import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Mint() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement minting logic here
    console.log('Minting NFT:', { name, description, image })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li><Link href="/marketplace" className="text-blue-600 hover:text-blue-800">Marketplace</Link></li>
            <li><Link href="/fusion" className="text-blue-600 hover:text-blue-800">Fusion</Link></li>
            <li><Link href="/staking" className="text-blue-600 hover:text-blue-800">Staking</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">Mint Your NFT</h1>

        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create a New NFT</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleMint}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    required
                  />
                </div>
              </div>
              <CardFooter className="flex justify-end mt-4">
                <Button type="submit">Mint NFT</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}