import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Staking() {
  const [stakedNFTs] = useState([
    { id: '1', name: 'Cosmic Kitty', stakedAt: '2023-05-01', rewards: '0.05' },
    { id: '2', name: 'Digital Doggo', stakedAt: '2023-05-03', rewards: '0.03' },
  ])

  const [unstakeNFTs] = useState([
    { id: '3', name: 'Ethereal Elephant', image: '/placeholder.svg?height=50&width=50' },
    { id: '4', name: 'Pixel Parrot', image: '/placeholder.svg?height=50&width=50' },
  ])

  const handleStake = (id: string) => {
    // Implement staking logic here
    console.log('Staking NFT:', id)
  }

  const handleUnstake = (id: string) => {
    // Implement unstaking logic here
    console.log('Unstaking NFT:', id)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li><Link href="/marketplace" className="text-blue-600 hover:text-blue-800">Marketplace</Link></li>
            <li><Link href="/mint" className="text-blue-600 hover:text-blue-800">Mint</Link></li>
            <li><Link href="/fusion" className="text-blue-600 hover:text-blue-800">Fusion</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-8">NFT Staking</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Staked NFTs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Staked At</TableHead>
                  <TableHead>Rewards</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stakedNFTs.map((nft) => (
                  <TableRow key={nft.id}>
                    <TableCell>{nft.name}</TableCell>
                    <TableCell>{nft.stakedAt}</TableCell>
                    <TableCell>{nft.rewards} ETH</TableCell>
                    <TableCell>
                      <Button onClick={() => handleUnstake(nft.id)}>Unstake</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Available NFTs to Stake</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {unstakeNFTs.map((nft) => (
                <div key={nft.id} className="text-center">
                  <img src={nft.image} alt={nft.name} className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm mb-2">{nft.name}</p>
                  <Button onClick={() => handleStake(nft.id)}>Stake</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}