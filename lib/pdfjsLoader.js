let loadingPromise = null;

// pdf.js is loaded from a CDN, matching the original site, since bundling
// its worker inside Next.js adds unnecessary complexity for a client-only
// rendering/text-extraction utility.
export function loadPdfJs() {
  if (typeof window === "undefined") return Promise.reject(new Error("client-only"));
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      resolve(window.pdfjsLib);
    };
    script.onerror = () => reject(new Error("Failed to load pdf.js"));
    document.head.appendChild(script);
  });
  return loadingPromise;
}
