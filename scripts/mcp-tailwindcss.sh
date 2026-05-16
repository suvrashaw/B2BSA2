#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

export DO_NOT_TRACK=1
export FRAMELINK_TELEMETRY=off
export npm_config_loglevel=silent

exec node -e '
const { spawn } = require("child_process");
const child = spawn("npx", ["-y", "--quiet", "tailwindcss-mcp-server"], { stdio: ["inherit", "pipe", "inherit"] });
child.stdout.on("data", data => {
  const s = data.toString();
  if (s.startsWith("{") || s.startsWith("[")) {
    process.stdout.write(data);
  } else if (s.includes("initialized") || s.includes("running on stdio")) {
    process.stderr.write(data);
  } else {
    process.stdout.write(data);
  }
});
child.on("exit", code => process.exit(code));
'


