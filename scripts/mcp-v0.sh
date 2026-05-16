#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f ".env.mcp" ]; then
  echo ".env.mcp is missing" >&2
  exit 1
fi

source scripts/load-env-mcp.sh

if [ -z "${V0_API_KEY:-}" ]; then
  echo "V0_API_KEY is missing in .env.mcp" >&2
  exit 1
fi

export DO_NOT_TRACK=1
export FRAMELINK_TELEMETRY=off
export npm_config_loglevel=silent

exec npx -y --quiet mcp-remote https://mcp.v0.dev --header "Authorization: Bearer ${V0_API_KEY}"
