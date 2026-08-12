import dynamic from "next/dynamic";
export const COMPONENT_MAP = {
  ImageCompressor: dynamic(() => import("@/components/tools/image/ImageCompressor")),
  ImageResizer: dynamic(() => import("@/components/tools/image/ImageResizer")),
  ImageFormatConverter: dynamic(() => import("@/components/tools/image/ImageFormatConverter")),
  FaviconGenerator: dynamic(() => import("@/components/tools/image/FaviconGenerator")),
  ImageToBase64: dynamic(() => import("@/components/tools/image/ImageToBase64")),
  ImageCropper: dynamic(() => import("@/components/tools/image/ImageCropper")),
  ImageColorPicker: dynamic(() => import("@/components/tools/image/ImageColorPicker")),
  GrayscaleImage: dynamic(() => import("@/components/tools/image/GrayscaleImage")),
  ImageRotator: dynamic(() => import("@/components/tools/image/ImageRotator")),
};
