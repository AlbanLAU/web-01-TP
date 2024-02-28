export default function parseUrl(url = window.location.href) {
  const query = url.split("?")[1] || "";
  let result = {};

  const parts = query.split("&");
  // TODO #functional-programming: Use Array.map() & Array.reduce()
  for (let i in parts) {
    const item = parts[i];
    const kv = item.split("=");
    result[kv[0]] = kv[1];
  }

  return result;
}
