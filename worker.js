/**
 * Garbha Sanskar — Cloudflare Worker
 * Serves garbha-sanskar.html for all requests.
 * No credentials, tokens, or secrets are stored here.
 */

import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    try {
      // Serve static assets (garbha-sanskar.html, etc.)
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
          mapRequestToAsset(req) {
            const url = new URL(req.url);
            // Serve index (garbha-sanskar.html) for root and unknown paths
            if (url.pathname === '/' || url.pathname === '') {
              return new Request(
                new URL('/garbha-sanskar.html', req.url),
                req
              );
            }
            return req;
          },
        }
      );
    } catch (e) {
      // Fallback: redirect to the HTML file
      return Response.redirect(
        new URL('/garbha-sanskar.html', request.url).toString(),
        302
      );
    }
  },
};
