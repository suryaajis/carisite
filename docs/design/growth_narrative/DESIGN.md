---
name: Growth Narrative
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#2b6954'
  on-secondary: '#ffffff'
  secondary-container: '#adedd3'
  on-secondary-container: '#306d58'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#b0f0d6'
  secondary-fixed-dim: '#95d3ba'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#0b513d'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system is built for the modern Small-to-Medium Enterprise (SME) landscape, balancing professional reliability with a warm, inclusive spirit of growth. The aesthetic avoids the cold, sterile nature of traditional enterprise software, instead embracing a "Modern-Organic" style. 

The brand personality is **Helpful**, **Vital**, and **Accessible**. It seeks to evoke an emotional response of confidence and momentum. Visually, this is achieved through a mix of clean, structured layouts and soft, organic details—high whitespace, friendly geometry, and a color palette inspired by nature and prosperity. It is a system that grows with the user, appearing sophisticated for established firms while remaining unintimidating for new entrepreneurs.

## Colors

The palette is anchored by **Emerald Green**, a vibrant hue representing vitality, success, and environmental harmony. This is the primary driver for brand recognition and primary actions.

- **Primary (#10B981):** Used for primary buttons, active states, and growth indicators.
- **Secondary (#064E3B):** A deep forest green used for high-contrast text and professional grounding.
- **Tertiary (#F59E0B):** An accent amber used sparingly for alerts, "new" features, or secondary highlights to add warmth.
- **Neutral:** A spectrum of warm grays and slates that prevent the interface from feeling "heavy." Surface colors lean toward very light off-whites to reduce eye strain and feel more inviting than pure white.

## Typography

The design system exclusively utilizes **Plus Jakarta Sans** for its friendly, modern, and highly legible characteristics. The rounded terminals and open apertures provide the "approachable" feel required for SMEs, while the geometric structure maintains professional clarity.

Headlines should use the Bold or SemiBold weights with slightly tightened letter spacing to create a strong visual hierarchy. Body text is set with generous line-height to ensure accessibility and a relaxed reading pace. For data-dense screens, utilize the `label` styles which maintain clarity at smaller scales.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column fluid grid** for mobile. The layout philosophy is centered on "Breathability," using a 8px-based spacing rhythm.

- **Desktop:** 12 columns with 24px gutters and 32px outside margins. Content containers have a maximum width of 1280px to maintain readability.
- **Tablet:** 8 columns with 24px gutters and 24px margins.
- **Mobile:** 4 columns with 16px gutters and 16px margins.

Spacing should be used to group related concepts. For example, use `md` (24px) for spacing between card elements, and `xl` (64px) for spacing between major page sections.

## Elevation & Depth

To maintain the professional yet approachable aesthetic, the design system avoids harsh shadows. Instead, it uses **Soft Ambient Shadows** and **Tonal Layering**.

1.  **Level 0 (Surface):** The base background, typically a very soft off-white.
2.  **Level 1 (Card/Section):** Low elevation. Uses a subtle 1px border (#E2E8F0) and a soft shadow with a hint of the primary green color in the shadow's tint to suggest "growth" and warmth.
3.  **Level 2 (Dropdown/Popover):** Medium elevation. Increased shadow spread and blur to signify interaction and temporary depth.
4.  **Level 3 (Modal):** High elevation. Uses a dark-tinted backdrop blur (glassmorphism effect) to focus the user's attention while maintaining the context of the page behind it.

Shadows should have a high blur-to-offset ratio (e.g., 12px blur for a 4px Y-offset) to ensure they feel soft and modern.

## Shapes

The shape language is **Rounded (Level 2)**. This specific setting provides a 0.5rem (8px) base radius for standard components like buttons and input fields. Larger containers like cards utilize `rounded-lg` (16px) or `rounded-xl` (24px) to emphasize the friendly, non-industrial nature of the system.

Interactive elements should feel "clickable" and soft. Avoid sharp 0px corners entirely, as they conflict with the growth-oriented theme. Checkboxes and selection indicators should maintain a slight radius (4px) rather than being perfectly square.

## Components

### Buttons
- **Primary:** Solid Emerald Green (#10B981) with white text. High contrast, rounded corners, and a subtle scale-down effect on press.
- **Secondary:** Emerald Green outline or soft green background with dark green text.
- **Tertiary:** Text-only with an underline on hover, used for less critical actions.

### Cards
Cards are the primary container for SME data. They should use a white background, a 1px border (#F1F5F9), and the Level 1 soft shadow. Padding inside cards should be generous (24px to 32px) to prevent data from feeling cramped.

### Input Fields
Inputs use a soft gray border that transitions to Emerald Green on focus. Labels are always visible above the field in `label-md` bold to ensure the system feels "helpful" and clear.

### Chips & Badges
Used for status (e.g., "Active," "Pending"). They should use a low-opacity version of the status color as a background (e.g., Emerald Green at 10% opacity) with high-contrast text for maximum accessibility and a modern, "glassy" feel.

### Progress Indicators
Since the theme is growth-oriented, progress bars and charts should lead with the primary Emerald Green, utilizing smooth animations to visualize data momentum.