import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Fusion() {
  const [selectedNFTs, setSelectedNFTs] = useState<string[]>([])
  const [ownedNFTs] = useState([
    { id: '1', name: 'Cosmic Kitty', image: '/placeholder.svg?height=100&width=100' },
    { id: '2', name: 'Digital Doggo', image: '/placeholder.svg?height=100&width=100' },
    { id: '3', name: 'Ethereal Elephant', image: '/placeholder.svg?height=100&width=100' },
    { id: '4', name: 'Pixel Parrot', image: '/placeholder.svg?height=100&width=100' },
  ])

  const handleSelectNFT = (id: string) => {
    if (selectedNFTs.includes(id)) {
      setSelectedNFTs(selectedNFTs.filter(nftId => nftId !== id))
    } else if (selectedNFTs.length < 2) {
      setSelectedNFTs([...selectedNFTs, id])
    }
  }

  const handleFusion = () => {
    if (selectedNFTs.length === 2) {
      // Implement fusion logic here
      console.log('Fusing NFTs:', selectedNFTs)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li><Link href="/marketplace" className="text-blue-600 hover:text-blue-800">Marketplace</Link></li>
            <li><Link href="/mint" className="text-blue-600 hover:text-blue-800">Mint</Link></li>
            <li><Link href="/staking" className="text-blue-600 hover:text-blue-800">Staking</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">NFT Fusion</h1>

        <Card>
          <CardHeader>
            <CardTitle>Select Two NFTs to Fuse</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ownedNFTs.map((nft) => (
                <div
                  key={nft.id}
                  className={`cursor-pointer border-2 rounded-lg p-2 ${
                    selectedNFTs.includes(nft.id) ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => handleSelectNFT(nft.id)}
                >
                  <img src={nft.image} alt={nft.name} className="w-full h-24 object-cover mb-2" />
                  <p className="text-sm text-center">{nft.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={handleFusion}
              disabled={selectedNFTs.length !== 2}
            >
              Fuse Selected NFTs
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}