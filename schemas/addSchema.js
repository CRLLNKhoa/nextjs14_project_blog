"use client"

import * as z from "zod"

export const addFormSchema = z.object({
  title: z.string().min(2).max(500),
  content: z.string().min(10),
  description: z.string().min(10),
  link_github: z.string().min(10),
  link_download: z.string().min(10),
  thumbnail: z.string().min(10),
  progress: z.string().min(0).max(100)
})
