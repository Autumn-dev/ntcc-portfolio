// Hidden SVG filters used by the .sketchy-border class
function SketchFilters() {
  return (
    <svg aria-hidden="true" className="absolute h-0 w-0">
      <filter id="sketch-a">
        <feTurbulence
          baseFrequency="0.03"
          numOctaves="2"
          result="noise"
          seed="1"
          type="fractalNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="6"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <filter id="sketch-b">
        <feTurbulence
          baseFrequency="0.04"
          numOctaves="2"
          result="noise"
          seed="7"
          type="fractalNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="5"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

export default SketchFilters;
