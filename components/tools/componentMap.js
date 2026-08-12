// Every tool component is loaded via next/dynamic so each of the 530+
// tool pages only ships the JS it actually needs (e.g. a unit-converter
// page never pulls in pdf-lib). Without this, webpack would bundle every
// tool — including heavy libraries like pdf-lib and qrcode — into every
// single page's first-load JS.
import dynamic from "next/dynamic";

const MergePdf = dynamic(() => import("@/components/tools/pdf/MergePdf"));
const SplitPdf = dynamic(() => import("@/components/tools/pdf/SplitPdf"));
const RotatePdf = dynamic(() => import("@/components/tools/pdf/RotatePdf"));
const PdfToImages = dynamic(() => import("@/components/tools/pdf/PdfToImages"));
const PdfToText = dynamic(() => import("@/components/tools/pdf/PdfToText"));
const DeletePdfPages = dynamic(() => import("@/components/tools/pdf/DeletePdfPages"));
const ExtractPdfPages = dynamic(() => import("@/components/tools/pdf/ExtractPdfPages"));
const PdfPageCounter = dynamic(() => import("@/components/tools/pdf/PdfPageCounter"));

const ImageCompressor = dynamic(() => import("@/components/tools/image/ImageCompressor"));
const ImageResizer = dynamic(() => import("@/components/tools/image/ImageResizer"));
const ImageFormatConverter = dynamic(() => import("@/components/tools/image/ImageFormatConverter"));
const FaviconGenerator = dynamic(() => import("@/components/tools/image/FaviconGenerator"));
const ImageToBase64 = dynamic(() => import("@/components/tools/image/ImageToBase64"));
const ImageCropper = dynamic(() => import("@/components/tools/image/ImageCropper"));
const ImageColorPicker = dynamic(() => import("@/components/tools/image/ImageColorPicker"));
const GrayscaleImage = dynamic(() => import("@/components/tools/image/GrayscaleImage"));
const ImageRotator = dynamic(() => import("@/components/tools/image/ImageRotator"));

const WordCounter = dynamic(() => import("@/components/tools/text/WordCounter"));
const LoremIpsumGenerator = dynamic(() => import("@/components/tools/text/LoremIpsumGenerator"));
const TextDiffChecker = dynamic(() => import("@/components/tools/text/TextDiffChecker"));
const FindAndReplace = dynamic(() => import("@/components/tools/text/FindAndReplace"));
const TextCaseConverter = dynamic(() => import("@/components/tools/text/TextCaseConverter"));
const TextReverser = dynamic(() => import("@/components/tools/text/TextReverser"));
const RemoveLineBreaks = dynamic(() => import("@/components/tools/text/RemoveLineBreaks"));
const RemoveDuplicateLines = dynamic(() => import("@/components/tools/text/RemoveDuplicateLines"));
const SortLines = dynamic(() => import("@/components/tools/text/SortLines"));
const RemoveExtraSpaces = dynamic(() => import("@/components/tools/text/RemoveExtraSpaces"));
const SlugGenerator = dynamic(() => import("@/components/tools/text/SlugGenerator"));

const QrCodeGenerator = dynamic(() => import("@/components/tools/generate/QrCodeGenerator"));
const PasswordGenerator = dynamic(() => import("@/components/tools/generate/PasswordGenerator"));
const PasswordStrengthChecker = dynamic(() => import("@/components/tools/generate/PasswordStrengthChecker"));
const UuidGenerator = dynamic(() => import("@/components/tools/generate/UuidGenerator"));
const RandomNumberGenerator = dynamic(() => import("@/components/tools/generate/RandomNumberGenerator"));
const RandomStringGenerator = dynamic(() => import("@/components/tools/generate/RandomStringGenerator"));
const HexColorGenerator = dynamic(() => import("@/components/tools/generate/HexColorGenerator"));

const JsonFormatter = dynamic(() => import("@/components/tools/dev/JsonFormatter"));
const RegexTester = dynamic(() => import("@/components/tools/dev/RegexTester"));
const HashGenerator = dynamic(() => import("@/components/tools/dev/HashGenerator"));
const UrlEncodeDecode = dynamic(() => import("@/components/tools/dev/UrlEncodeDecode"));
const HtmlEntityEncodeDecode = dynamic(() => import("@/components/tools/dev/HtmlEntityEncodeDecode"));
const TimestampConverter = dynamic(() => import("@/components/tools/dev/TimestampConverter"));
const JwtDecoder = dynamic(() => import("@/components/tools/dev/JwtDecoder"));
const CssMinifier = dynamic(() => import("@/components/tools/dev/CssMinifier"));
const MarkdownToHtml = dynamic(() => import("@/components/tools/dev/MarkdownToHtml"));

const Base64EncodeDecode = dynamic(() => import("@/components/tools/convert/Base64EncodeDecode"));
const CsvJsonConverter = dynamic(() => import("@/components/tools/convert/CsvJsonConverter"));
const ColorConverter = dynamic(() => import("@/components/tools/convert/ColorConverter"));
const NumberBaseConverter = dynamic(() => import("@/components/tools/convert/NumberBaseConverter"));
const UnitConverter = dynamic(() => import("@/components/tools/convert/UnitConverter"));

export const COMPONENT_MAP = {
  MergePdf, SplitPdf, RotatePdf, PdfToImages, PdfToText, DeletePdfPages, ExtractPdfPages, PdfPageCounter,
  ImageCompressor, ImageResizer, ImageFormatConverter, FaviconGenerator, ImageToBase64, ImageCropper, ImageColorPicker, GrayscaleImage, ImageRotator,
  WordCounter, LoremIpsumGenerator, TextDiffChecker, FindAndReplace, TextCaseConverter, TextReverser, RemoveLineBreaks, RemoveDuplicateLines, SortLines, RemoveExtraSpaces, SlugGenerator,
  QrCodeGenerator, PasswordGenerator, PasswordStrengthChecker, UuidGenerator, RandomNumberGenerator, RandomStringGenerator, HexColorGenerator,
  JsonFormatter, RegexTester, HashGenerator, UrlEncodeDecode, HtmlEntityEncodeDecode, TimestampConverter, JwtDecoder, CssMinifier, MarkdownToHtml,
  Base64EncodeDecode, CsvJsonConverter, ColorConverter, NumberBaseConverter, UnitConverter,
};
