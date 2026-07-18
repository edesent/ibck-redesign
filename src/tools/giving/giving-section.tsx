import { givingConfig } from "./config";
import "./styles.css";

// Server component: online giving via the church's provider (embedded or as a
// new-tab button), with a mail-a-check fallback and a giving verse.
//   <GivingSection />
export function GivingSection() {
  return (
    <div className="ct-giving">
      {givingConfig.embed ? (
        <div className="ct-giving-embed">
          <iframe
            title={`Give to ${givingConfig.churchName}`}
            src={givingConfig.embedUrl}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="ct-giving-cta">
          <a
            className="ct-giving-button"
            href={givingConfig.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Give Online
          </a>
          <p>You&apos;ll be taken to our secure giving page.</p>
        </div>
      )}

      {givingConfig.mailAddress ? (
        <p className="ct-giving-mail">
          Prefer to give by check? Mail it to {givingConfig.churchName},{" "}
          {givingConfig.mailAddress} — or drop it in the offering during any
          service.
        </p>
      ) : null}

      <blockquote className="ct-giving-verse">
        <p>&ldquo;{givingConfig.verse}&rdquo;</p>
        <cite>{givingConfig.verseRef}</cite>
      </blockquote>
    </div>
  );
}
