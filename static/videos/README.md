# Videos Folder

Organize your demonstration videos in the tier subfolders.

## Folder Structure

```
videos/
├── tier1/          # Single-step commands
├── tier2/          # Multi-step sequential commands  
├── tier3/          # Semantic ambiguity & commonsense
├── tier4/          # Conditional logic & recovery
└── competition/    # Competition runs (CBR 2025, RoboCup)
```

## Expected Videos

### Tier 1 — Single-step commands
| Filename | Description |
|----------|-------------|
| `navigate_kitchen.mp4` | "Navigate to the kitchen." |
| `say_hello.mp4` | "Say hello to everyone in the living room." |
| `find_person.mp4` | "Find the person wearing a red shirt." |

### Tier 2 — Multi-step sequential
| Filename | Description |
|----------|-------------|
| `bring_lemon.mp4` | "Give me a lemon from the refrigerator." |
| `guide_person.mp4` | "Guide the guest from the entrance to the living room." |
| `count_people.mp4` | "Count the people in the kitchen and tell me." |

### Tier 3 — Semantic ambiguity
| Filename | Description |
|----------|-------------|
| `something_to_drink.mp4` | "Bring me something to drink from the kitchen." |
| `something_to_read.mp4` | "Bring me something to read." |
| `help_sitting.mp4` | "Help the person who looks like they need assistance." |

### Tier 4 — Conditional logic
| Filename | Description |
|----------|-------------|
| `conditional_sleeping.mp4` | "Take a drink to the person in the bedroom, but only if they are not sleeping." |
| `if_not_found.mp4` | "Find the apple; if not in the kitchen, check the dining room." |
| `recovery.mp4` | "Ask each person in the living room what they want and bring it." |

### Competition
| Filename | Description |
|----------|-------------|
| `cbr2025_full.mp4` | Complete GPSR run at CBR 2025 (880/1000) |
| `robocup2025.mp4` | RoboCup@Home 2025 deployment |

## How to Add Videos

1. Place video files in the appropriate subfolder
2. Update `index.html` to replace placeholders with `<video>` tags:

```html
<!-- Replace this placeholder: -->
<div class="video-placeholder-bg" style="background:#1a1816;">
  <div class="play-circle"><div class="play-triangle"></div></div>
  <span class="ph-text">static/videos/tier1/navigate_kitchen.mp4</span>
</div>

<!-- With your actual video: -->
<video src="static/videos/tier1/navigate_kitchen.mp4" autoplay loop muted playsinline></video>
```

## Video Recommendations

- **Format**: MP4 (H.264 codec for best browser support)
- **Resolution**: 720p or 1080p
- **Aspect Ratio**: 16:9
- **Duration**: Keep short for demos (15-60 seconds)
- **Optimize**: Compress for web using tools like HandBrake or FFmpeg
