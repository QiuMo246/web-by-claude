module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const su = process.env.SUPABASE_URL ? '已设置 (' + process.env.SUPABASE_URL.slice(0, 20) + '...)' : '❌ 未设置';
  const sk = process.env.SUPABASE_SERVICE_KEY ? '已设置 (' + process.env.SUPABASE_SERVICE_KEY.slice(0, 10) + '...)' : '❌ 未设置';
  const as = process.env.ADMIN_SECRET ? '已设置' : '❌ 未设置';

  res.status(200).json({
    SUPABASE_URL: su,
    SUPABASE_SERVICE_KEY: sk,
    ADMIN_SECRET: as,
    node_version: process.version,
  });
};
