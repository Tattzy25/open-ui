export type PhotoboothStyleId =
  | "knitted"
  | "blueprint"
  | "risograph"
  | "ukiyo-e"
  | "infrared"
  | "brutalism"
  | "stained-glass"
  | "papercut"
  | "alchemical-etch"
  | "halftone-pop"
  | "charcoal"
  | "anime"
  | "digital-art"
  | "watercolor"
  | "trash-polka"
  | "ignorant-tattoo"
  | "woodcut-engraving"
  | "glitch-ink"
  | "biomechanical"
  | "continuous-line"
  | "heavy-blackwork"
  | "sketchwork"
  | "stippling-dotwork"
  | "white-ink"
  | "Cyberpunk"
  | "futuristic"
  | "lofi-comic";

export type PhotoboothStyle = {
  id: PhotoboothStyleId;
  label: string;
  description: string;
  prompt: string;
};

export const PHOTOBOOTH_STYLES: PhotoboothStyle[] = [
  {
    id: "knitted",
    label: "Knitted",
    description: "Cozy yarn textures, stitched details, handcrafted charm.",
    prompt:
      "Transform this photo into a cozy handcrafted textile world. Render people as soft, cute knitted dolls with visible yarn, stitched fabric, embroidered facial details, and wool textures while preserving the same identity, pose, expression, framing, and scene layout.",
  },
  {
    id: "digital-art",
    label: "Digital Art",
    description: "Bold modern illustration with crisp shapes and vivid colors.",
    prompt:
      "Recreate this photo as clean modern digital art with bold shapes, smooth vector-like forms, balanced vivid colors, and crisp edges. Preserve the original people, pose, expression, and composition as closely as possible",
  },
  {
    id: "blueprint",
    label: "Blueprint",
    description: "Technical Prussian blue grids with white schematic lines.",
    prompt:
      "Transform this photo into a technical architectural blueprint. Use a deep cyanotype blue background with crisp white drafting lines, mathematical notations, and grid overlays. Render the subjects as precise schematic drawings with engineering-style line weights while preserving the same identity, pose, expression, and composition.",
  },
  {
    id: "risograph",
    label: "Risograph",
    description: "Vibrant neon overlays with grainy lo-fi print textures.",
    prompt:
      "Recreate this photo as a tactile risograph print. Use a limited palette of vibrant spot colors like neon pink and teal with characteristic grainy textures and slight mechanical ink misalignments. Maintain the original people, pose, and expression, ensuring the final result feels like a high-end indie press art piece.",
  },
  {
    id: "ukiyo-e",
    label: "Ukiyo-e",
    description: "Classic woodblock aesthetics with bold flat color planes.",
    prompt:
      "Reinterpret this photo in the style of a historic Ukiyo-e woodblock print. Use elegant flowing outlines, flat decorative color planes, and dramatic atmospheric elements like stylized waves or clouds. Keep the same subjects, proportions, and expressions, but render them as characters in a traditional Japanese masterpiece.",
  },
  {
    id: "infrared",
    label: "Infrared",
    description: "High-energy thermal heat maps in surreal neon palettes.",
    prompt:
      "Transform this photo into a high-contrast infrared thermal image. Use a vibrant spectrum of electric purples, hot yellows, and deep oxygen-blues to map the subjects' energy. Ensure the colors are burning and the contrast is extreme while keeping the same people, pose, expression, and scene structure in a surreal way.",
  },
  {
    id: "brutalism",
    label: "Vector Brutalism",
    description: "Jagged raw shapes and disruptive modern graphic energy.",
    prompt:
      "Reinterpret this photo through the lens of vector brutalism. Use jagged, intentional geometric distortions, raw primary colors, and bold graphic fragments. Avoid traditional beauty for a disruptive, modern aesthetic. Keep the original people and pose recognizable but framed within a chaotic, high-impact digital layout.",
  },
  {
    id: "stained-glass",
    label: "Stained Glass",
    description: "Leaded geometric shards with vibrant translucent glows.",
    prompt:
      "Transform this photo into a museum-quality stained glass window. Fragment the entire scene into hundreds of leaded glass shards with thick black solder outlines and vibrant, translucent color fills. Render the light as if it is shining through the glass while preserving the same identity, pose, expression, and framing.",
  },
  {
    id: "papercut",
    label: "Papercut",
    description: "3D layered cardstock depth with soft physical shadows.",
    prompt:
      "Recreate this photo as a physical papercut diorama. Construct the subjects and background using distinct layers of stacked cardstock with soft drop shadows creating a sense of 3D depth. Use a clean, tactile aesthetic while keeping the same people, pose, expression, and scene structure as the original photograph.",
  },
  {
    id: "alchemical-etch",
    label: "Alchemical Etch",
    description: "Delicate 17th-century occult ink on aged parchment.",
    prompt:
      "Reinterpret this photo as a delicate 17th-century alchemical etch. Use extremely fine, swirling ink lines and complex stippling on a weathered parchment texture. Incorporate celestial or geometric diagrams into the background. Keep the same people and expressions, ensuring the result looks like a rare scientific anatomy plate.",
  },
  {
    id: "halftone-pop",
    label: "Halftone Pop",
    description: "Graphic Ben-Day dots for high-contrast newspaper vibes.",
    prompt:
      "Transform this photo into a high-impact halftone pop art piece. Build all depth and shading using varying densities of classic Ben-Day dots in a stark black-and-white or CMYK palette. Maintain the original people, pose, and expression, ensuring the graphic punch of a vintage newspaper print while keeping the layout identical.",
  },
  {
    id: "charcoal",
    label: "Charcoal",
    description: "Moody smudged carbon textures with raw hand-drawn soul.",
    prompt:
      "Recreate this photo as a moody charcoal drawing on textured paper. Use thick, smudged carbon strokes for deep shadows and light, frantic lines for details. Ensure the aesthetic feels raw and handcrafted with visible fingerprints and dust while preserving the same subjects, proportions, composition, and expressions.",
  },
  {
    id: "watercolor",
    label: "Watercolor",
    description: "Airy brushwork and delicate pastel atmosphere.",
    prompt:
      "Transform this photo into a beautiful, whimsical watercolor painting with fluid brush strokes, soft pigment bleeding, and delicate pastel depth while preserving the same subjects, proportions, composition, and expressions.",
  },
  {
    id: "anime",
    label: "Anime",
    description: "Soft cinematic anime look with painterly light.",
    prompt:
      "Reinterpret this photo in a cinematic anime illustration style with delicate linework, painterly shading, atmospheric lighting, and soft gradients. Keep the same people, composition, expressions, and scene structure.",
  },
  {
    id: "trash-polka",
    label: "Trash Polka",
    description: "Aggressive red and black collage with chaotic brushstrokes.",
    prompt:
      "Recreate this photo as a gritty Trash Polka tattoo design using exclusively high-contrast black, stark white, and blood red. Incorporate chaotic brushstrokes, abstract halftone patterns, and graphic collage elements directly onto the skin while preserving the original people, pose, expression, and composition as closely as possible.",
  },
  {
    id: "ignorant-tattoo",
    label: "Ignorant Style",
    description: "Raw, deliberate unpolished linework with a stark minimalism.",
    prompt:
      "Transform this photo into an ignorant style tattoo aesthetic. Use deliberately unpolished, uniform black outlines, complete lack of shading, and raw, minimalist sketch-like execution. Ensure the aesthetic feels like sharp ink on skin while preserving the same identity, pose, expression, framing, and scene layout.",
  },
  {
    id: "woodcut-engraving",
    label: "Woodcut Engraving",
    description: "Harsh parallel hatching and thick lines of medieval prints.",
    prompt:
      "Reinterpret this photo as a striking woodcut engraving tattoo. Utilize dense parallel hatching, varying line weights, and stark black-and-white contrast resembling carved print blocks. No soft gradients. Keep the same people, composition, expressions, and scene structure, rendering the entire scene as pure etched ink.",
  },
  {
    id: "glitch-ink",
    label: "Glitch Ink",
    description: "Fragmented digital errors with chromatic offset line work.",
    prompt:
      "Transform this photo into a glitch-style tattoo design. Apply chromatic aberration, offset cyan and magenta line work, pixelated stutters, and fragmented slicing effects to the visual forms. Render it as ink applied to skin, making sure to keep the same people, pose, expression, and composition in a highly distorted but recognizable way.",
  },
  {
    id: "biomechanical",
    label: "Biomechanical",
    description: "Fleshy machinery, metallic gears, and deep skin integration.",
    prompt:
      "Transform this photo into a dark biomechanical tattoo scene. Integrate metallic pistons, ribbed tubing, and gears directly blending with organic forms, using deep grey-wash shading and hyper-detailed metallic textures. Keep the same people, pose, expression, in a photorealistic way, but fuse the environment and subjects with cybernetic anatomy.",
  },
  {
    id: "continuous-line",
    label: "Continuous Line",
    description: "Minimalist contour art formed by one single unbroken line.",
    prompt:
      "Recreate this photo as a minimalist continuous line tattoo. Form the entire image using a single, unbroken, fluid black line without lifting the pen. Avoid any shading or solid fills, relying purely on overlapping wire-like contours while preserving the original people, pose, expression, and composition as closely as possible.",
  },
  {
    id: "heavy-blackwork",
    label: "Heavy Blackwork",
    description: "Massive solid black fills shaping crisp negative space art.",
    prompt:
      "Reinterpret this photo in a heavy blackwork tattoo style. Utilize massive blocks of solid, opaque black ink to define the shapes, using the untouched negative space to form the highlights and details. Avoid gray washes. Keep the same people, composition, expressions, and scene structure framed in bold geometric borders.",
  },
  {
    id: "sketchwork",
    label: "Sketchwork",
    description: "Messy draftsman blueprints with rough, overlapping strokes.",
    prompt:
      "Transform this photo into a rough sketchwork tattoo design. Incorporate messy draftsman guidelines, overlapping frantic pencil-like strokes, and dynamic, unfinished linework that trails off at the edges. Render the shading as frantic crosshatching while preserving the same subjects, proportions, composition, and expressions.",
  },
  {
    id: "stippling-dotwork",
    label: "Stippling Dotwork",
    description: "Smooth gradient shading built entirely from microscopic dots.",
    prompt:
      "Recreate this photo as a pure stippling dotwork tattoo. Build all shapes, depth, and smooth gradients exclusively using thousands of tiny, microscopic black dots of varying densities. Strictly avoid solid lines or washes. Keep the same people, pose, expression, and composition, translating the lighting purely into dense dot clusters.",
  },
  {
    id: "white-ink",
    label: "White Ink",
    description: "Subtle, raised milky white lines creating a scar-like look.",
    prompt:
      "Transform this photo into a delicate white ink tattoo aesthetic. Render the visual elements using slightly raised, milky white pigment that mimics the texture of subtle scarification on skin. Keep the shading minimal and the lighting soft. Maintain the same identity, pose, expression, framing, and scene layout with ethereal subtlety.",
  },
  {
    id: "futuristic",
    label: "Futuristic",
    description:
      "Ethereal sci-fi glow with blue tones and futuristic cityscape.",
    prompt:
      "Transform this photo into a futuristic, ethereal sci-fi scene with a cool, vibrant blue color palette. Add neon glows around the subjects. Use smooth gradients, holographic lighting, and slightly reflective surfaces, and make sure the colors are vibrant and the contrast is high. Keep the same people, pose, expression, in a photorealistic way, but change the background to be a futuristic, sci-fi scene like a new-generation, glowing cityscape with ambient energy fields.",
  },
  {
    id: "Cyberpunk",
    label: "Cyberpunk",
    description:
      "Gritty neon-drenched urban sprawl with high-tech chrome visuals.",
    prompt:
      "Transform this photo into a gritty, neon-lit cyberpunk scene with a dark, electric pink color palette. Add glitch flows around the subjects. Use sharp textures, holographic overlays, and deeply reflective surfaces, and make sure the colors are burning and the contrast is high. Keep the same people, pose, expression, in a photorealistic way, but change the background to be a cyberpunk, sci-fi scene like a rain-slicked, glowing underworld with chaotic digital signal fields.",
  },
  {
    id: "lofi-comic",
    label: "Lo-Fi Comic",
    description: "Graphic comic style with bold lines and soft retro colors.",
    prompt:
      "Reinterpret this photo as a stylish low-fi comic illustration with clean bold outlines, simplified shading, and slightly muted retro colors. Use soft halftone textures, minimal gradients, and graphic composition while keeping the same people, pose, expressions, and framing. The result should feel like a polished indie comic panel — simple but aesthetically refined.",
  },
];

export const findPhotoboothStyle = (id: string): PhotoboothStyle | undefined =>
  PHOTOBOOTH_STYLES.find((style) => style.id === id);
