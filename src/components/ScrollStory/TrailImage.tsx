import { useId } from "react";
import type { StorySceneAsset } from "../../data/portfolio";
import styles from "./ScrollStory.module.css";

export function TrailImage({
  asset,
  alt,
}: {
  asset: StorySceneAsset;
  alt: string;
}) {
  const glowId = useId();
  return (
    <div className={styles.visual}>
      <div className={styles.trailFrame}>
        <img
          src={asset.image.src}
          width={asset.image.width}
          height={asset.image.height}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
        <svg
          className={styles.trailOverlay}
          viewBox={`0 0 ${asset.image.width} ${asset.image.height}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter id={glowId} x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          <path
            data-story-path
            d={asset.lightTrail}
            fill="none"
            stroke="none"
          />
          <g data-story-marker visibility="hidden">
            <circle
              r="13"
              fill="#ffce75"
              opacity="0.65"
              filter={`url(#${glowId})`}
            />
            <circle
              r="4"
              fill="#fff8df"
              stroke="#ffdc8e"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
