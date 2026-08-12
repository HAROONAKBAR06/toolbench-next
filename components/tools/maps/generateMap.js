import dynamic from "next/dynamic";
export const COMPONENT_MAP = {
  QrCodeGenerator: dynamic(() => import("@/components/tools/generate/QrCodeGenerator")),
  PasswordGenerator: dynamic(() => import("@/components/tools/generate/PasswordGenerator")),
  PasswordStrengthChecker: dynamic(() => import("@/components/tools/generate/PasswordStrengthChecker")),
  UuidGenerator: dynamic(() => import("@/components/tools/generate/UuidGenerator")),
  RandomNumberGenerator: dynamic(() => import("@/components/tools/generate/RandomNumberGenerator")),
  RandomStringGenerator: dynamic(() => import("@/components/tools/generate/RandomStringGenerator")),
  HexColorGenerator: dynamic(() => import("@/components/tools/generate/HexColorGenerator")),
};
