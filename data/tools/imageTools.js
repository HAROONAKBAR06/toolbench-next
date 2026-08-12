import { manualToolContent } from "@/lib/content";
import { IMAGE_FORMAT_PAIRS, IMAGE_FORMATS } from "@/data/pairFamilies";

const section = "image";

const staticImageTools = [
  {
    slug: "image-compressor",
    section, title: "Image Compressor", tag: "shrink file size",
    component: "ImageCompressor",
    metaDescription: "Compress JPG, PNG or WEBP images to a smaller file size for free, directly in your browser.",
    content: () => manualToolContent({
      title: "Image Compressor",
      whatItDoes: "The Image Compressor reduces an image's file size by re-encoding it at an adjustable quality level, using your browser's built-in canvas rendering. It's built for the common case of an image being too large to email, upload, or load quickly on a website.",
      howToSteps: [
        "Upload the image you want to compress (JPG, PNG, or WEBP).",
        "Adjust the quality slider to balance file size against visual quality.",
        "Preview the estimated output size as you adjust.",
        "Click download to save the compressed image.",
      ],
      useCases: [
        "Shrinking photos before uploading them to a website with strict file-size limits.",
        "Reducing attachment size so an image fits within an email provider's limit.",
        "Speeding up a webpage or app by using smaller, faster-loading images.",
        "Saving storage space when archiving large batches of photos.",
      ],
      faq: [
        { q: "Will compression noticeably reduce image quality?", a: "At moderate compression levels the difference is usually hard to spot; pushing the quality slider very low will introduce visible artifacts, especially in photos with fine detail." },
        { q: "Which formats does this support?", a: "JPG, PNG, and WEBP images can all be compressed through this tool." },
        { q: "Is the compressed image uploaded anywhere?", a: "No — compression happens locally using your browser's canvas API; the image never leaves your device." },
      ],
    }),
  },
  {
    slug: "image-resizer",
    section, title: "Image Resizer", tag: "change dimensions",
    component: "ImageResizer",
    metaDescription: "Resize an image to exact pixel dimensions for free, right in your browser — no uploads required.",
    content: () => manualToolContent({
      title: "Image Resizer",
      whatItDoes: "The Image Resizer changes an image's width and height to dimensions you specify, with an option to lock the aspect ratio so the image doesn't stretch or distort. It's a quick fix for images that need to fit a specific size requirement.",
      howToSteps: [
        "Upload the image you want to resize.",
        "Enter your target width and/or height in pixels.",
        "Keep \"lock aspect ratio\" on to avoid distortion, or turn it off for exact dimensions.",
        "Download the resized image.",
      ],
      useCases: [
        "Meeting a platform's exact image size requirement, like a profile picture or banner.",
        "Shrinking a large photo down to a size that's easier to embed in a document or email.",
        "Preparing a batch of product images to a consistent, uniform size.",
        "Scaling an image up slightly for a print or display requirement.",
      ],
      faq: [
        { q: "Will resizing distort my image?", a: "Not if you keep aspect ratio locked — the tool scales width and height proportionally so the image keeps its original shape." },
        { q: "Can I make an image larger without losing quality?", a: "Enlarging an image stretches its existing pixel data, so significant upscaling can look softer; small increases are usually fine." },
        { q: "What's the maximum size I can resize to?", a: "You can enter any pixel dimensions; very large targets are limited only by your browser's available memory." },
      ],
    }),
  },
  {
    slug: "favicon-generator",
    section, title: "Favicon Generator", tag: "generate .ico sizes",
    component: "FaviconGenerator",
    metaDescription: "Generate a favicon.ico and common favicon PNG sizes from any image, free and in your browser.",
    content: () => manualToolContent({
      title: "Favicon Generator",
      whatItDoes: "The Favicon Generator takes any square image or logo and produces the standard favicon sizes browsers and devices expect (16×16, 32×32, 48×48, and more), ready to drop into a website's root folder or HTML head tag.",
      howToSteps: [
        "Upload a square logo or icon image (ideally at least 512×512px).",
        "The tool generates the standard favicon sizes automatically.",
        "Download the individual PNG sizes you need.",
        "Reference the file in your site's HTML with a <link rel=\"icon\"> tag.",
      ],
      useCases: [
        "Creating a browser tab icon for a new website or web app.",
        "Generating the different sizes needed for browser tabs, bookmarks, and mobile home-screen icons.",
        "Refreshing an outdated favicon without needing separate design software.",
      ],
      faq: [
        { q: "Does my source image need to already be square?", a: "A square source image gives the cleanest result; non-square images will be cropped or padded to fit the required square favicon sizes." },
        { q: "What sizes are generated?", a: "The most commonly required favicon sizes are generated, covering standard browser tab and bookmark use." },
        { q: "Do I need to convert the output to .ico format myself?", a: "The PNG sizes generated work directly in modern browsers via HTML link tags; a dedicated .ico is mainly needed for legacy browser support." },
      ],
    }),
  },
  {
    slug: "image-to-base64",
    section, title: "Image to Base64", tag: "embed inline",
    component: "ImageToBase64",
    metaDescription: "Convert an image to a Base64-encoded string for free, ready to embed inline in HTML or CSS.",
    content: () => manualToolContent({
      title: "Image to Base64",
      whatItDoes: "The Image to Base64 tool encodes an uploaded image into a Base64 text string, which can be pasted directly into HTML, CSS, or JSON as a data URI — embedding the image inline without a separate file request.",
      howToSteps: [
        "Upload the image you want to encode.",
        "The Base64 string appears in the output box automatically.",
        "Click \"Copy\" to copy the full data URI.",
        "Paste it into your HTML src attribute or CSS background-image property.",
      ],
      useCases: [
        "Embedding a small icon or logo directly in CSS or HTML without an extra file request.",
        "Including an image inside a JSON payload or email template that can't reference external files.",
        "Avoiding broken image links when sharing a single self-contained HTML file.",
      ],
      faq: [
        { q: "Does Base64 encoding increase file size?", a: "Yes, roughly by about a third, which is why it's best suited to small images like icons rather than large photos." },
        { q: "What image formats are supported?", a: "PNG, JPG, WEBP, GIF, and SVG images can all be converted to a Base64 data URI." },
        { q: "Can I convert the Base64 string back into an image file?", a: "Yes — paste it into a browser address bar or an <img> tag's src to render it, or use a Base64-to-file decoder to save it back as a file." },
      ],
    }),
  },
  {
    slug: "image-cropper",
    section, title: "Image Cropper", tag: "trim to a selection",
    component: "ImageCropper",
    metaDescription: "Crop an image to a custom selection for free, directly in your browser.",
    content: () => manualToolContent({
      title: "Image Cropper",
      whatItDoes: "The Image Cropper lets you drag a selection box over an uploaded image and export just that portion as a new image file. It's a fast way to trim unwanted borders, zoom in on a subject, or reframe a photo without full editing software.",
      howToSteps: [
        "Upload the image you want to crop.",
        "Drag the selection box to the area you want to keep.",
        "Adjust the box edges to fine-tune the crop.",
        "Click download to save the cropped result.",
      ],
      useCases: [
        "Trimming unwanted background or borders from a photo.",
        "Reframing a photo to focus on a specific subject.",
        "Cutting a screenshot down to just the relevant portion.",
        "Preparing a square crop for a profile picture from a rectangular photo.",
      ],
      faq: [
        { q: "Can I crop to an exact aspect ratio?", a: "The selection box can be dragged to any proportion, so you can match a specific ratio like 1:1 or 16:9 by eye or by entering exact pixel values." },
        { q: "Does cropping reduce image quality?", a: "No — cropping simply removes pixels outside the selection; the remaining image data is unchanged." },
      ],
    }),
  },
  {
    slug: "image-color-picker",
    section, title: "Image Color Picker", tag: "pick a pixel's HEX",
    component: "ImageColorPicker",
    metaDescription: "Click any pixel in an uploaded image to get its exact HEX and RGB color value — free and private.",
    content: () => manualToolContent({
      title: "Image Color Picker",
      whatItDoes: "The Image Color Picker reads the exact color of any pixel you click on in an uploaded image, returning its HEX and RGB values instantly. It's useful for matching a color from a photo, screenshot, or design mockup precisely.",
      howToSteps: [
        "Upload the image you want to sample colors from.",
        "Click anywhere on the image to sample that pixel's color.",
        "The HEX and RGB values for that point appear instantly.",
        "Click \"Copy\" to copy the color code to your clipboard.",
      ],
      useCases: [
        "Matching a brand color exactly from a logo or photo.",
        "Pulling a color palette from a photo for a design project.",
        "Checking the precise color used in a screenshot or mockup.",
      ],
      faq: [
        { q: "How accurate is the sampled color?", a: "The tool reads the exact pixel value from the image data, so the result is precise, though very compressed JPGs can introduce minor color artifacts." },
        { q: "Can I sample multiple colors from one image?", a: "Yes — click anywhere else on the image to sample a new pixel at any time." },
      ],
    }),
  },
  {
    slug: "grayscale-image",
    section, title: "Grayscale Image Converter", tag: "remove color",
    component: "GrayscaleImage",
    metaDescription: "Convert a color image to grayscale (black and white) for free, directly in your browser.",
    content: () => manualToolContent({
      title: "Grayscale Image Converter",
      whatItDoes: "This tool converts a color image to grayscale by desaturating every pixel, producing a classic black-and-white version while keeping the original brightness and contrast intact.",
      howToSteps: [
        "Upload the color image you want to convert.",
        "The grayscale preview generates automatically.",
        "Click download to save the black-and-white version.",
      ],
      useCases: [
        "Creating a black-and-white version of a photo for print or design purposes.",
        "Preparing images for printers that only support monochrome output.",
        "Achieving a classic, timeless look for a photo.",
      ],
      faq: [
        { q: "Can I convert the grayscale image back to color afterward?", a: "No — grayscale conversion discards the original color data permanently; keep a copy of the original if you might need color again." },
        { q: "Does this affect image resolution?", a: "No — only the color information changes; the image dimensions and detail remain the same." },
      ],
    }),
  },
  {
    slug: "image-rotator",
    section, title: "Image Rotator", tag: "turn 90° / 180° / 270°",
    component: "ImageRotator",
    metaDescription: "Rotate any image by 90, 180, or 270 degrees for free, directly in your browser.",
    content: () => manualToolContent({
      title: "Image Rotator",
      whatItDoes: "The Image Rotator turns an uploaded image by 90, 180, or 270 degrees, correcting orientation issues from a phone photo or scanned image before you use or share it.",
      howToSteps: [
        "Upload the image you want to rotate.",
        "Choose a rotation angle — 90°, 180°, or 270°.",
        "Preview the rotated result.",
        "Download the corrected image.",
      ],
      useCases: [
        "Fixing a photo that displays sideways due to camera orientation metadata.",
        "Correcting a scanned document image that came out upside down.",
        "Reorienting an image before uploading it somewhere that ignores rotation metadata.",
      ],
      faq: [
        { q: "Does rotating reduce image quality?", a: "No — rotation by 90-degree increments simply repositions pixels without any loss of detail." },
        { q: "Can I rotate by a custom angle, like 45 degrees?", a: "This tool supports 90°, 180°, and 270° rotations, which cover the standard orientation-fix use case." },
      ],
    }),
  },
];

const formatConvertTools = IMAGE_FORMAT_PAIRS.map(([from, to]) => {
  const fromFmt = IMAGE_FORMATS[from];
  const toFmt = IMAGE_FORMATS[to];
  return {
    slug: `${fromFmt.slug}-to-${toFmt.slug}`,
    section,
    title: `${fromFmt.label} to ${toFmt.label}`,
    tag: `convert image format`,
    component: "ImageFormatConverter",
    props: { fromFormat: from, toFormat: to },
    metaDescription: `Convert a ${fromFmt.label} image to ${toFmt.label} for free, directly in your browser. No upload, no watermark.`,
    content: () => manualToolContent({
      title: `${fromFmt.label} to ${toFmt.label} Converter`,
      whatItDoes: `This tool converts a ${fromFmt.label} image into ${toFmt.label} format using your browser's built-in canvas rendering. ${fromFmt.label} and ${toFmt.label} behave differently — ${
        toFmt.slug === "jpg" ? "JPG doesn't support transparency and uses lossy compression, producing smaller files" :
        toFmt.slug === "png" ? "PNG supports transparency and uses lossless compression, keeping sharp detail at a larger file size" :
        "WEBP supports both transparency and strong compression, often producing smaller files than JPG or PNG at similar quality"
      } — so converting between them is a common step when preparing images for a specific platform or use case.`,
      howToSteps: [
        `Upload the ${fromFmt.label} image you want to convert.`,
        `The tool renders it and converts it to ${toFmt.label} automatically.`,
        `Preview the converted image before downloading.`,
        `Click download to save the ${toFmt.label} file.`,
      ],
      useCases: [
        `Converting to ${toFmt.label} to meet a platform's required image format.`,
        `Switching from ${fromFmt.label} to ${toFmt.label} to reduce file size for faster page loading.`,
        toFmt.slug === "png" ? "Converting to PNG when you need a transparent background." : `Standardizing a batch of images to ${toFmt.label} for consistency.`,
      ],
      faq: [
        { q: `Will converting ${fromFmt.label} to ${toFmt.label} reduce quality?`, a: toFmt.slug === "jpg" ? "JPG uses lossy compression, so there can be a small quality trade-off, though it's usually minor at high quality settings." : "This conversion preserves visual quality; format conversion itself doesn't degrade the image unless the target format uses lossy compression at a low setting." },
        { q: `Does ${toFmt.label} support transparency?`, a: toFmt.slug === "jpg" ? "No — JPG doesn't support transparent backgrounds; transparent areas will be filled with a solid color." : "Yes, transparent areas in the source image are preserved in the converted file." },
        { q: "Is my image uploaded to a server during conversion?", a: "No — the conversion happens locally in your browser using the canvas API; your image never leaves your device." },
      ],
    }),
  };
});

export const imageTools = [...staticImageTools, ...formatConvertTools];
