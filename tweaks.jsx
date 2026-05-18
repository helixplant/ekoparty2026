/* Minimal Tweaks panel — palette swatches for threat / tool tracks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "threatPalette": "Blue",
  "toolPalette": "Green",
  "showFooter": true
}/*EDITMODE-END*/;

const THREAT_OPTIONS = {
  "Blue":   { accent: "#3094FF", accent2: "#FE4C25" },
  "Purple": { accent: "#B870FF", accent2: "#FF4AC0" },
  "Red":    { accent: "#9EECFF", accent2: "#FE4C25" },
};
const TOOL_OPTIONS = {
  "Green": { accent: "#5FED83", accent2: "#D3FA37" },
  "Lime":  { accent: "#D3FA37", accent2: "#5FED83" },
  "Cyan":  { accent: "#9EECFF", accent2: "#5FED83" },
};

function applyPalette(t) {
  const root = document.documentElement;
  const threat = THREAT_OPTIONS[t.threatPalette] || THREAT_OPTIONS["Blue"];
  const tool = TOOL_OPTIONS[t.toolPalette] || TOOL_OPTIONS["Green"];
  root.style.setProperty("--threat-accent", threat.accent);
  root.style.setProperty("--threat-accent-2", threat.accent2);
  root.style.setProperty("--tool-accent", tool.accent);
  root.style.setProperty("--tool-accent-2", tool.accent2);
  document.querySelectorAll(".footer").forEach((el) => {
    el.style.display = t.showFooter ? "" : "none";
  });
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyPalette(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Threat sections" />
      <TweakRadio
        label="Palette"
        value={t.threatPalette}
        options={["Blue", "Purple", "Red"]}
        onChange={(v) => setTweak("threatPalette", v)}
      />
      <TweakSection label="Tooling sections" />
      <TweakRadio
        label="Palette"
        value={t.toolPalette}
        options={["Green", "Lime", "Cyan"]}
        onChange={(v) => setTweak("toolPalette", v)}
      />
      <TweakSection label="Slide chrome" />
      <TweakToggle
        label="Show footer"
        value={t.showFooter}
        onChange={(v) => setTweak("showFooter", v)}
      />
    </TweaksPanel>
  );
}

const tweakRoot = document.createElement("div");
document.body.appendChild(tweakRoot);
ReactDOM.createRoot(tweakRoot).render(<TweaksApp />);
