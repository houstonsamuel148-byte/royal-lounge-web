# Netlify deployment

## Verify the publish directory

1. In Netlify, open the site’s **Site configuration → Build & deploy → Build settings**.
2. Leave **Publish directory** blank so Netlify reads the value from `netlify.toml`. The current value there is `dist`.
3. Open the latest deploy’s log and confirm the resolved publish directory is `dist`. If it differs, remove the dashboard override and redeploy.