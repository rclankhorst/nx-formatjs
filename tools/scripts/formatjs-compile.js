exports.compile = function (msgs) {
  const results = {};
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = msg.translation;
  }
  return results;
};
