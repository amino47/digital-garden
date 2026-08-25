// quartz/components/Webmentions.tsx
import { QuartzComponent, QuartzComponentProps } from "./types"

const Webmentions: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div className={`webmentions-container ${displayClass ?? ""}`}>
      <h3>Responses & Mentions</h3>
      <div id="webmention-list">Loading mentions...</div>
      <script dangerouslySetInnerHTML={{ __html: `
        const pageUrl = window.location.href;
        fetch('https://webmention.io/ashellm.net/webmention?target=' + encodeURIComponent(pageUrl))
          .then(response => response.json())
          .then(data => {
            const webmentionList = document.getElementById('webmention-list');
            if (webmentionList) {
              webmentionList.innerHTML = data.length > 0 ? data.map(mention => {
                return '<div class="webmention">' +
                  '<p>' + (mention.name || 'Anonymous') + ' said:</p>' +
                  '<p>' + mention.content + '</p>' +
                '</div>';
              }).join('') : '<p>No mentions found.</p>';
            }
          })
          .catch(error => {
            console.error('Error fetching webmentions:', error);
          });
      ` }} />
    </div>
  )
}

export default Webmentions