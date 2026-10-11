// Text-to-speech integration point for listening exercises.
// Today: the browser's SpeechSynthesis (de-DE). Swap in a server provider
// (Azure, Google, ElevenLabs) by implementing `synthesize` and returning an audio URL.

export type TtsRequest = { text: string; voice?: string; rate?: number };
export type TtsResult = { kind: "url"; url: string } | { kind: "browser"; text: string; lang: "de-DE"; rate: number };

export async function synthesize({ text, rate = 0.95 }: TtsRequest): Promise<TtsResult> {
  switch (process.env.TTS_PROVIDER ?? "browser") {
    // case "azure": return { kind: "url", url: await azureTts(text, voice) };
    default:
      return { kind: "browser", text, lang: "de-DE", rate };
  }
}

/** Client-side playback for the "browser" provider. */
export function speakInBrowser(text: string, rate = 0.95): SpeechSynthesisUtterance | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = rate;
  const german = window.speechSynthesis.getVoices().find((v) => v.lang.startsWith("de"));
  if (german) utterance.voice = german;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return utterance;
}
