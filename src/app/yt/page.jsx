'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [videoLink, setVideoLink] = useState('')
  const [videoLinks, setVideoLinks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (videoLink.trim() !== '') {
      setVideoLinks([...videoLinks, getVideoId(videoLink)])
      setVideoLink('')
    }
  }

  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : url
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Video Collection</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <Input
            type="text"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="Paste YouTube video link here"
            className="flex-grow"
          />
          <Button type="submit">Save</Button>
        </div>
      </form>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {videoLinks.map((videoId, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video player ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
            }
