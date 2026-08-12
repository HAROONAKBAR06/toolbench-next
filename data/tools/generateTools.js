import { manualToolContent } from "@/lib/content";

const section = "generate";

export const generateTools = [
  {
    slug: "qr-code-generator",
    section, title: "QR Code Generator", tag: "text or link → QR",
    component: "QrCodeGenerator",
    metaDescription: "Generate a free QR code from any text or link — instant, downloadable, no sign-up.",
    content: () => manualToolContent({
      title: "QR Code Generator",
      whatItDoes: "This tool generates a scannable QR code from any text or URL you enter, ready to download as an image and use on a poster, business card, packaging, or webpage.",
      howToSteps: [
        "Enter the text or link you want to encode.",
        "The QR code generates automatically as you type.",
        "Download the QR code as an image.",
        "Test it by scanning with your phone's camera.",
      ],
      useCases: [
        "Linking a printed poster or flyer straight to a website.",
        "Sharing Wi-Fi details, a contact card, or an event link without typing.",
        "Adding a scannable link to packaging, business cards, or menus.",
      ],
      faq: [
        { q: "Does the QR code expire?", a: "No — the QR code encodes your content directly and doesn't expire or depend on this site staying online." },
        { q: "Is there a character limit for what I can encode?", a: "Very long text can be encoded, though QR codes become denser and harder to scan reliably as the content grows — shorter links and text scan more easily." },
      ],
    }),
  },
  {
    slug: "password-generator",
    section, title: "Password Generator", tag: "strong & random",
    component: "PasswordGenerator",
    metaDescription: "Generate a strong, random password with custom length and character options — free and instant.",
    content: () => manualToolContent({
      title: "Password Generator",
      whatItDoes: "This tool generates a strong, random password using your browser's cryptographically secure random number generator, with options to include uppercase, lowercase, numbers, and symbols, and to set the exact length.",
      howToSteps: [
        "Set your desired password length.",
        "Choose which character types to include.",
        "Click generate to create a new random password.",
        "Copy it and store it in a password manager.",
      ],
      useCases: [
        "Creating a strong, unique password for a new account instead of reusing an old one.",
        "Generating a random passphrase for a Wi-Fi network or shared device.",
        "Replacing a weak or previously compromised password.",
      ],
      faq: [
        { q: "How random is the generated password?", a: "It's generated using your browser's built-in cryptographically secure random number source, which is suitable for real password generation, not a predictable pseudo-random sequence." },
        { q: "Is the password stored or sent anywhere?", a: "No — it's generated entirely in your browser and never transmitted or logged." },
      ],
    }),
  },
  {
    slug: "password-strength-checker",
    section, title: "Password Strength Checker", tag: "test how strong it is",
    component: "PasswordStrengthChecker",
    metaDescription: "Check how strong a password is based on length and character variety — free and private.",
    content: () => manualToolContent({
      title: "Password Strength Checker",
      whatItDoes: "This tool analyzes a password's length and character variety to estimate how resistant it would be to guessing and brute-force attacks, giving you a quick strength rating.",
      howToSteps: [
        "Type or paste the password you want to check.",
        "Review the strength rating and feedback shown.",
        "Adjust length or character variety to improve the score.",
      ],
      useCases: [
        "Checking whether a new password is strong enough before using it.",
        "Understanding what makes a password weak — length, repetition, lack of variety.",
        "Comparing a few password ideas before settling on one.",
      ],
      faq: [
        { q: "Is my password sent anywhere when I check it?", a: "No — the check runs entirely in your browser; the password you type is never transmitted or stored." },
        { q: "What makes a password 'strong' according to this tool?", a: "Length and a mix of uppercase, lowercase, numbers and symbols are the main factors — longer, more varied passwords are harder to guess or brute-force." },
      ],
    }),
  },
  {
    slug: "uuid-generator",
    section, title: "UUID Generator", tag: "v4 unique IDs",
    component: "UuidGenerator",
    metaDescription: "Generate random v4 UUIDs (universally unique identifiers) for free, instantly, one at a time or in bulk.",
    content: () => manualToolContent({
      title: "UUID Generator",
      whatItDoes: "This tool generates version 4 UUIDs — randomly generated 128-bit identifiers used throughout software development to uniquely label records, sessions, and objects without needing a central authority to hand them out.",
      howToSteps: [
        "Choose how many UUIDs you want to generate.",
        "Click generate to produce them instantly.",
        "Copy one or all of the generated UUIDs.",
      ],
      useCases: [
        "Generating a unique primary key for a new database record.",
        "Creating a unique session, request, or tracking ID during development.",
        "Producing test data with guaranteed-unique identifiers.",
      ],
      faq: [
        { q: "How likely is a UUID collision?", a: "Version 4 UUIDs are generated from 122 random bits, making the odds of two ever colliding astronomically small in practical use." },
        { q: "Are these UUIDs cryptographically secure?", a: "They're generated using your browser's secure random number source, suitable for use as unique identifiers." },
      ],
    }),
  },
  {
    slug: "random-number-generator",
    section, title: "Random Number Generator", tag: "custom range",
    component: "RandomNumberGenerator",
    metaDescription: "Generate a random number within a custom range — free, instant, and unbiased.",
    content: () => manualToolContent({
      title: "Random Number Generator",
      whatItDoes: "This tool generates a random number between a minimum and maximum value you set, useful for anything from picking a raffle winner to generating test data.",
      howToSteps: [
        "Enter your minimum and maximum values.",
        "Click generate to produce a random number in that range.",
        "Click again for a new result any time.",
      ],
      useCases: [
        "Picking a random winner from a numbered list of entries.",
        "Generating random test values for a spreadsheet or script.",
        "Settling a decision randomly, like choosing between numbered options.",
      ],
      faq: [
        { q: "Is the number generation truly random or predictable?", a: "It uses your browser's random number source, which is suitable for everyday random-selection use cases like this one." },
        { q: "Can I generate multiple random numbers at once?", a: "Click generate repeatedly for as many random numbers as you need, one per click." },
      ],
    }),
  },
  {
    slug: "random-string-generator",
    section, title: "Random String Generator", tag: "custom charset",
    component: "RandomStringGenerator",
    metaDescription: "Generate a random string of letters, numbers or symbols with a custom length and charset — free.",
    content: () => manualToolContent({
      title: "Random String Generator",
      whatItDoes: "This tool generates a random string of characters at a length you choose, drawing from letters, numbers, and symbols depending on which character sets you enable — useful for test data, temporary tokens, or random identifiers.",
      howToSteps: [
        "Set your desired string length.",
        "Choose which character types to include (letters, numbers, symbols).",
        "Click generate to produce a random string.",
        "Copy the result for your use case.",
      ],
      useCases: [
        "Generating a random token or key for testing an application.",
        "Creating placeholder or dummy data for a form or database.",
        "Producing a random identifier that isn't a full UUID.",
      ],
      faq: [
        { q: "How is this different from the Password Generator?", a: "This tool is aimed at general-purpose random strings for testing and data, while the Password Generator is tuned specifically for creating secure account passwords." },
      ],
    }),
  },
  {
    slug: "hex-color-generator",
    section, title: "Random Hex Color Generator", tag: "instant random palette",
    component: "HexColorGenerator",
    metaDescription: "Generate a random HEX color code for free, instantly — great for design inspiration and mockups.",
    content: () => manualToolContent({
      title: "Random Hex Color Generator",
      whatItDoes: "This tool generates a random HEX color code with a matching live preview swatch, useful for sparking design ideas, filling a placeholder color, or picking a quick random accent color.",
      howToSteps: [
        "Click generate to produce a random color.",
        "View the live color swatch and its HEX code.",
        "Copy the HEX code, or generate again for a new color.",
      ],
      useCases: [
        "Getting inspiration for a color palette during a design project.",
        "Filling a placeholder color in a mockup before final branding is set.",
        "Randomly picking an accent color for a quick project.",
      ],
      faq: [
        { q: "Can I generate a color within a specific hue range?", a: "This tool generates fully random colors; for a specific hue range, generate a few times and pick the closest match, or use the color converter tools to fine-tune it." },
      ],
    }),
  },
];
