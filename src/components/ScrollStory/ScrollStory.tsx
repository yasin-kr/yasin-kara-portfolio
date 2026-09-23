import { useSyncExternalStore } from "react";
import { storyScenes, type StorySceneAsset } from "../../data/portfolio";
import { useLanguage } from "../../i18n/LanguageContext";
import type { StorySceneCopy } from "../../i18n/types";
import { useSceneProgress } from "./useSceneProgress";
import { TrailImage } from "./TrailImage";
import styles from "./ScrollStory.module.css";

const motionQuery = "(prefers-reduced-motion: reduce)";
const readReducedMotion = () => matchMedia(motionQuery).matches;
const subscribeMotion = (listener: () => void) => {
  const media = matchMedia(motionQuery);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
};

export function StoryScene({
  asset,
  copy,
  motionEnabled,
}: {
  asset: StorySceneAsset;
  copy: StorySceneCopy;
  motionEnabled: boolean;
}) {
  const { textDirection } = useLanguage();
  const ref = useSceneProgress(motionEnabled);
  const titleId = `story-${asset.id}-title`;

  return (
    <article
      ref={ref}
      className={styles.scene}
      aria-labelledby={titleId}
      data-motion={motionEnabled}
    >
      <div className={styles.stage}>
        {asset.lightTrail ? (
          <TrailImage asset={asset} alt={copy.imageAlt} />
        ) : (
          <picture className={styles.visual}>
            {asset.mobileImage && (
              <source
                media="(max-width: 700px)"
                srcSet={asset.mobileImage.src}
                width={asset.mobileImage.width}
                height={asset.mobileImage.height}
              />
            )}
            <img
              src={asset.image.src}
              width={asset.image.width}
              height={asset.image.height}
              alt={copy.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </picture>
        )}
        <div className={styles.copy} dir={textDirection}>
          <h3 id={titleId}>{copy.title}</h3>
          <p>{copy.description}</p>
        </div>
      </div>
    </article>
  );
}

export function ScrollStory() {
  const { t, textDirection } = useLanguage();
  const reduceMotion = useSyncExternalStore(subscribeMotion, readReducedMotion);
  const motionEnabled = !reduceMotion;
  const ready = storyScenes.flatMap((asset) => {
    const copy = t.story.scenes[asset.id];
    return copy?.title.trim() && copy.description.trim() && asset.image.src
      ? [{ asset, copy }]
      : [];
  });
  // No placeholder, empty heading, image request or scroll spacer before approval.
  if (!ready.length) return null;

  return (
    <section className={styles.story} aria-labelledby="scroll-story-title">
      <h2
        id="scroll-story-title"
        className={styles.heading}
        dir={textDirection}
      >
        {t.story.title}
      </h2>
      {ready.map(({ asset, copy }) => (
        <StoryScene
          key={asset.id}
          asset={asset}
          copy={copy}
          motionEnabled={motionEnabled}
        />
      ))}
    </section>
  );
}
