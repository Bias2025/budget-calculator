export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const article = req.body;

    // Extract article fields from BabyLoveGrowth payload
    const {
      title = 'Untitled',
      slug = 'article',
      content = '',
      meta_description = '',
      published_at = new Date().toISOString(),
    } = article;

    // Build a clean HTML page from the article
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — WorldCup2026Budget.com</title>
  <meta name="description" content="${meta_description}">
  <meta name="impact-site-verification" content="c58f37bd-543a-4055-851d-449a6a5e46c9">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Reddit Pixel -->
  <script>
  !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js?pixel_id=a2_j3qc672zveob",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','a2_j3qc672zveob');rdt('track','PageVisit');
  </script>
  <!-- Travelpayouts -->
  <script nowprocket data-noptimize="1" data-cfasync="false" data-wpfc-render="false" seraph-accel-crit="1" data-no-defer="1">
  (function(){var s=document.createElement("script");s.async=1;s.src='https://emrldtp.com/NTM0OTk1.js?t=534995';document.head.appendChild(s);})();
  </script>

  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Barlow',sans-serif;background:#f4f4f0;color:#0d0d0d;min-height:100vh}
    .header{background:#00205B;padding:1.25rem 2rem;display:flex;align-items:center;justify-content:space-between}
    .header a{color:#D4A017;font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;text-decoration:none;letter-spacing:0.5px}
    .header nav a{color:rgba(255,255,255,0.7);font-size:13px;margin-left:20px;text-decoration:none}
    .header nav a:hover{color:#fff}
    .hero{background:linear-gradient(135deg,#00205B,#001040);padding:3rem 2rem;text-align:center}
    .hero-tag{display:inline-flex;align-items:center;gap:6px;background:#C8102E;color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;padding:4px 12px;border-radius:3px;margin-bottom:12px}
    .hero h1{font-family:'Barlow Condensed',sans-serif;font-size:clamp(28px,5vw,52px);font-weight:900;color:#fff;line-height:1.1;max-width:800px;margin:0 auto 10px}
    .hero-meta{font-size:13px;color:rgba(255,255,255,0.45)}
    .body{max-width:780px;margin:0 auto;padding:2.5rem 1.5rem}
    .article-body{background:#fff;border-radius:12px;padding:2rem;box-shadow:0 2px 12px rgba(0,0,0,0.08);line-height:1.75;font-size:15px;color:#1a1a1a}
    .article-body h2{font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:700;color:#00205B;margin:1.5rem 0 0.75rem}
    .article-body h3{font-size:18px;font-weight:600;color:#00205B;margin:1.25rem 0 0.5rem}
    .article-body p{margin-bottom:1rem}
    .article-body ul,.article-body ol{margin:0.75rem 0 1rem 1.5rem}
    .article-body li{margin-bottom:0.4rem}
    .article-body strong{font-weight:600}
    .article-body a{color:#C8102E;text-decoration:none}
    .article-body a:hover{text-decoration:underline}
    .cta-strip{background:#00205B;border-radius:10px;padding:1.25rem 1.5rem;margin:2rem 0;display:flex;align-items:center;gap:16px;flex-wrap:wrap}
    .cta-strip p{flex:1;color:rgba(255,255,255,0.8);font-size:13px;line-height:1.5}
    .cta-strip p strong{color:#D4A017}
    .cta-btn{display:inline-flex;align-items:center;gap:6px;background:#C8102E;color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;padding:9px 18px;border-radius:8px;text-decoration:none;white-space:nowrap}
    .back-link{display:inline-flex;align-items:center;gap:6px;color:#00205B;font-size:13px;font-weight:500;text-decoration:none;margin-bottom:1.5rem}
    .footer{background:#00205B;padding:1.5rem;text-align:center;margin-top:3rem}
    .footer p{font-size:11px;color:rgba(255,255,255,0.4)}
    .footer a{color:#D4A017;text-decoration:none}
  </style>
</head>
<body>

<div class="header">
  <a href="/">WorldCup2026Budget.com</a>
  <nav>
    <a href="/index.html">Budget Calculator</a>
    <a href="/matchday.html">Match Day Guide</a>
    <a href="/gear.html">Fan Gear</a>
  </nav>
</div>

<div class="hero">
  <div class="hero-tag">FIFA World Cup 2026</div>
  <h1>${title}</h1>
  <div class="hero-meta">Published ${new Date(published_at).toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'})}</div>
</div>

<div class="body">
  <a href="/blog.html" class="back-link">← Back to all articles</a>

  <div class="article-body">
    ${content}
  </div>

  <div class="cta-strip">
    <p><strong>Planning your World Cup trip?</strong> Get a full cost breakdown — flights, hotels, tickets and more across all 16 host cities.</p>
    <a href="/index.html" class="cta-btn">Calculate Your Budget</a>
    <a href="/matchday.html" class="cta-btn" style="background:#D4A017;color:#000;">Match Day Guide</a>
  </div>
</div>

<div class="footer">
  <p>WorldCup2026Budget.com · <a href="/index.html">Budget Calculator</a> · <a href="/matchday.html">Match Day Guide</a> · <a href="/gear.html">Fan Gear</a></p>
  <p style="margin-top:6px;">Links may earn a commission at no extra cost to you.</p>
</div>

</body>
</html>`;

    // Log the article (Vercel logs — viewable in dashboard)
    console.log('New article received:', { title, slug, published_at });
    console.log('HTML length:', html.length);

    // Return the generated HTML so you can save it manually
    // In production you would write to a storage service
    res.status(200).json({
      success: true,
      message: 'Article received and HTML generated',
      slug,
      html_preview: html.substring(0, 500),
      full_html: html,
    });

  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}
