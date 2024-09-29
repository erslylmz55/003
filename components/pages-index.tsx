'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Index() {
  const [featuredNFTs] = useState([
    { id: '1', name: 'Cosmic Kitty', image: '/placeholder.svg?height=200&width=200', price: '0.1' },
    { id: '2', name: 'Digital Doggo', image: '/placeholder.svg?height=200&width=200', price: '0.15' },
    { id: '3', name: 'Ethereal Elephant', image: '/placeholder.svg?height=200&width=200', price: '0.2' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4">
            <li><Link href="/mint" className="text-blue-600 hover:text-blue-800">Mint</Link></li>
            <li><Link href="/marketplace" className="text-blue-600 hover:text-blue-800">Marketplace</Link></li>
            <li><Link href="/fusion" className="text-blue-600 hover:text-blue-800">Fusion</Link></li>
            <li><Link href="/staking" className="text-blue-600 hover:text-blue-800">Staking</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to NFT Wonderland</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNFTs.map((nft) => (
              <Card key={nft.id}>
                <CardHeader>
                  <CardTitle>{nft.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover rounded-md mb-2" />
                  <p className="text-lg font-semibold">{nft.price} ETH</p>
                  <Button className="w-full mt-2">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mint Your Own NFT</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Create and sell your unique digital assets with ease.</p>
              <Link href="/mint">
                <Button>Start Minting</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Explore the Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Discover and collect rare NFTs from talented creators.</p>
              <Link href="/marketplace">
                <Button>Browse NFTs</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          2024 by the way
        </div>
      </footer>
    </div>
  )
}