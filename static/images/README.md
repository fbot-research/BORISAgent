# Images Folder

Place your images here. The following are expected by `index.html`:

## Required Images

| Filename | Description | Recommended Size |
|----------|-------------|------------------|
| `boris.jpg` | Main hero robot photo | 1200×500px |
| `architecture.png` | System architecture diagram (Fig. 1) | 1600×900px |
| `boris_platform.jpg` | BORIS platform overview (Fig. 2) | 1200×600px |

## How to Add Images

1. Drop your image files here
2. Update `index.html` to replace the placeholder `<div>` with an `<img>` tag:

```html
<!-- Replace this placeholder: -->
<div class="img-placeholder" style="height:340px;">...</div>

<!-- With your actual image: -->
<img src="static/images/architecture.png" alt="System Architecture">
```

The CSS already handles styling for images inside `.figure-block` and `.robot-frame`.
