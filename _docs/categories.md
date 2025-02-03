# Categories
This file describes the categories that will be used in the frontmatter of the showcase posts. 

## Categories list

1. Type
   - Website
   - Web App
   - Mobile App
   - Design System
   - Motion
   - Components
   - Game

2. Style
   - 3D
   - WebGL
   - Animation
   - Bento Grid
   - Grid
   - Horizontal Layout
   - Unusual Layout
   - Brutalist
   - Clean
   - Colorful
   - Dark
   - Editorial
   - Gradient
   - Illustrative
   - Light
   - Minimal
   - Modern
   - Monochromatic
   - Retro
   - Skeuomorphic
   - Swiss
   - Parallax
   - Scrolling Animation
   - Transitions
   - Typographic
   - Utilitarian

3. Typography
   - Sans Serif
   - Serif
   - Display
   - Monospace
   - Large Type
   - Small Type

4. Industry
   - E-commerce
   - Portfolio
   - Agency
   - SaaS
   - Finance
   - Education
   - Technology
   - Art
   - Music
   - Health


## Frontmatter Template

```md
---
title: "Gestalt website design"
date: 2024-04-13T20:33:45-03:00
draft: false
type: "post"
layout: "single"

# Content Information
description: "" # Brief description of the UI/UX showcase
featured: false # If you want to feature certain submissions

# Source Information
author: "timothyachumba"
source: "X" # X, Dribbble, Behance, etc.
source_link: "https://twitter.com/timothyachumba/status/1777341297667293256"

# Media
media: "/uploads/twitter.com_1777341297667293256.mp4"
media_type: "video" # video, image, gallery

# Social
social:
  commentary: "Brand identity by @yahyavision" #should have the author's username.
  scheduledFor: null
  status: "published"

# Categories (multiple selection allowed)
types: 
  - "Website"
  - "Motion"

style:
  - "Modern"
  - "Clean"
  - "Animation"
  - "Dark"

typography:
  - "Sans Serif"
  - "Large Type"

industry:
  - "Agency"
  - "Technology"

# Optional Additional Metadata
tools: [] # Tools used if known (Webflow, Framer, etc.)
credits: [] # Additional credits/team members if any
---
```