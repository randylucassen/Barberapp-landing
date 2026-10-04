// Het "K!"-symboollogo — zwarte achtergrond levert de omliggende tegel
// zelf, dit component tekent alleen de K (wit) en het uitroepteken
// (teal). Zelfde vectorpaden als het woordmerk-app-icoon in
// KPPRTJE-brand/logo/svg/app-icon.svg (de K- en !-glyphs 1-op-1
// overgenomen, de tussenliggende letters P-P-R-T-J-E weggelaten en de !
// dichter naar de K toe geschoven) — geen los lettertype nodig, blijft
// zo exact consistent met het bestaande woordmerk. Zelfde component ook
// native gebouwd, zie KPPRTJE-app/src/components/ui/KSymbol.tsx.
const VIEWBOX_WIDTH = 1274;
const VIEWBOX_HEIGHT = 688;
const K_PATH = "M27 0 149 -688H370L320 -407L606 -688H889L592 -405L772 0H519L417 -259L273 -135L248 0Z";
const EXCLAIM_BAR_PATH = "M1035 -239 1075 -688H1274L1152 -239Z";
const EXCLAIM_DOT_PATH = "M962 0 992 -167H1172L1142 0Z";

interface KSymbolProps {
  size?: number;
  className?: string;
}

export function KSymbol({ size = 16, className }: KSymbolProps) {
  const width = size * (VIEWBOX_WIDTH / VIEWBOX_HEIGHT);
  return (
    <svg width={width} height={size} viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className={className}>
      <g transform={`translate(0 ${VIEWBOX_HEIGHT})`}>
        <path d={K_PATH} fill="#FFFFFF" />
        <path d={EXCLAIM_BAR_PATH} fill="#0EA5A4" />
        <path d={EXCLAIM_DOT_PATH} fill="#0EA5A4" />
      </g>
    </svg>
  );
}
