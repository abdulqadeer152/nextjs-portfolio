"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "qadeerafridi6621202@gmail.com",
      href: "qadeerafridi6621202@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3012388975",
      href: "tel:+00000000000",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "karachi, Pakistan",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-20 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to work together? I'd love to hear about your project and discuss how I can help bring your ideas to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-400/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <a href={item.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all duration-200 group hover:scale-110"
                  >
                    <social.icon className="h-5 w-5 text-yellow-400 group-hover:text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-black/50 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-black/50 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="bg-black/50 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-black/50 border-yellow-400/30 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                </div>

                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
