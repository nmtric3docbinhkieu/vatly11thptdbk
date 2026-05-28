module.exports = async function handler(req, res) {
  try {
    const cronSecret = process.env.CRON_SECRET;
    if (cronSecret) {
      const provided = req.headers['x-cron-secret'] || req.query?.secret;
      if (provided !== cronSecret) {
        return res.status(401).json({ ok: false, error: 'Unauthorized' });
      }
    }

    const url = process.env.SUPABASE_URL;
    const anonKey = process.env.SUPABASE_ANON_KEY;

    if (!url || !anonKey) {
      return res.status(500).json({
        ok: false,
        error: 'Missing SUPABASE_URL or SUPABASE_ANON_KEY in Vercel env vars'
      });
    }

    const pingUrl = `${url}/rest/v1/students?select=id&limit=1`;
    const response = await fetch(pingUrl, {
      method: 'GET',
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`
      }
    });

    if (!response.ok) {
      const body = await response.text();
      return res.status(502).json({
        ok: false,
        status: response.status,
        body: body.slice(0, 500)
      });
    }

    const data = await response.json();
    return res.status(200).json({
      ok: true,
      timestamp: new Date().toISOString(),
      rows: Array.isArray(data) ? data.length : 0
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error?.message || String(error)
    });
  }
};
