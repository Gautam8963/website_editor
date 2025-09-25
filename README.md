# Website Editor Chrome Extension

This is a Chrome extension that allows users to modify webpage styles and appearance in real-time. The extension provides various accessibility and customization features through a user-friendly popup interface.

## Project Structure

```
website_editor/
├── manifest.json           # Extension configuration
├── popup.html             # Extension popup interface
├── popup.js              # Popup functionality and command handling
├── popup.css             # Popup styling
└── assets/               # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Key Components

### 1. Manifest (manifest.json)

The manifest file defines the extension's configuration:
- Uses Manifest V3
- Requires `activeTab` and `scripting` permissions
- Defines popup interface and icon assets
- Configures extension metadata (name, version, description)

### 2. Popup Interface (popup.html)

The popup interface consists of:
- Command input textarea for custom commands
- Quick action buttons for common modifications
- Status message area for feedback
- Loading indicator
- Apply and Reset buttons

The interface is designed to be user-friendly with a clean, modern design.

### 3. Popup Styling (popup.css)

Defines the visual appearance using:
- CSS variables for consistent theming
- Google Fonts (Poppins)
- Responsive design
- Modern UI elements (shadows, gradients, animations)
- Status message styling
- Loading animation

### 4. Popup Functionality (popup.js)

#### Main Components:

1. **Command Processing**
   ```javascript
   function parseCommand(commandText)
   ```
   - Parses natural language commands
   - Supports various command types:
     - Font size adjustments
     - Background color changes
     - Text color modifications
     - Image visibility
     - High contrast mode
     - Dark/Light mode
     - Page reset

2. **Page Modification**
   ```javascript
   function pageModifierFunction(instruction)
   ```
   - Applies style changes to the webpage
   - Handles different modification types:
     - Direct style changes
     - Font size adjustments
     - Theme modes (dark/light/high contrast)

3. **Error Handling**
   - Chrome API error handling
   - Command validation
   - Style application error handling
   - User feedback through status messages

## Features

1. **Text Modifications**
   - Increase/decrease font size
   - Change text color
   - Font size customization

2. **Color Schemes**
   - Background color changes
   - Dark mode
   - Light mode
   - High contrast mode

3. **Image Controls**
   - Show/hide images
   - Image visibility toggle

4. **Page Management**
   - Reset all changes
   - Restore original page state

## Command Examples

1. Font Size Commands:
   - "increase font size"
   - "decrease text size"
   - "set font size to 16px"

2. Color Commands:
   - "change background to blue"
   - "set text color to red"
   - "change to dark mode"

3. Image Commands:
   - "hide images"
   - "show images"

4. Special Modes:
   - "enable high contrast"
   - "dark mode"
   - "light mode"

## Error Handling

The extension includes comprehensive error handling for:
1. Invalid commands
2. Failed script injection
3. Missing elements
4. Invalid CSS values
5. Chrome API errors
6. Network errors
7. Permission errors

Each error produces a user-friendly message in the status area.

## Implementation Details

### Command Processing Flow:
1. User inputs command or clicks quick action button
2. Command is parsed into an instruction object
3. Instruction is injected into active tab
4. Changes are applied to the webpage
5. Status feedback is shown to user

### Style Application:
- Uses CSS custom properties
- Applies styles with !important when needed
- Maintains style sheets for different modes
- Handles style conflicts resolution

### State Management:
- Tracks current modifications
- Enables reset functionality
- Preserves changes until reset
- Handles page refresh scenarios

## Security Considerations

1. Content Security:
   - Uses activeTab permission
   - Limited to current tab only
   - No persistent storage access

2. Input Validation:
   - Sanitizes command input
   - Validates style values
   - Checks for malicious inputs

## Browser Compatibility

- Designed for Chrome/Chromium browsers
- Uses Manifest V3 features
- Requires modern browser APIs:
  - chrome.scripting
  - chrome.tabs
  - CSS custom properties

## Development

To modify or enhance the extension:

1. Clone the repository
2. Load unpacked extension in Chrome
3. Make changes to source files
4. Refresh extension to test changes

## Adding New Features

To add new commands:
1. Add command parsing in `parseCommand()`
2. Implement modification in `pageModifierFunction()`
3. Add any necessary UI elements
4. Update error handling

## Best Practices

1. Always use error handling
2. Provide user feedback
3. Validate inputs
4. Test cross-page compatibility
5. Follow Chrome extension guidelines

## Future Enhancements

Potential improvements:
1. Save user preferences
2. More customization options
3. Keyboard shortcuts
4. Custom CSS injection
5. Per-site settings