# Disgraceful UI

## Start

```tsx
// Import .css styles
import "disgraceful-ui/style";
import { Button, theme } from "disgraceful-ui";

// Add scoped className to the root of you'r app
const { dark_theme, light_theme } = theme;
document.body.classList.add(light_theme);

// Use it!
const App = () => {
  return <Button onClick={() => {}}>Touch the x3 Buwdge</Button>;
};
```

## List of Available Components

- Button
- Container
- Heading
- Icon
- Input
- Paragraph
- Select
- Textarea
