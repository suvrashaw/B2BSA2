#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f ".env.mcp" ]; then
  echo ".env.mcp is missing" >&2
  exit 1
fi

source scripts/load-env-mcp.sh

if [ -z "${FIGMA_ACCESS_TOKEN:-}" ]; then
  echo "FIGMA_ACCESS_TOKEN is missing in .env.mcp" >&2
  exit 1
fi

if [ -z "${FIGMA_FILE_KEY:-}" ]; then
  echo "FIGMA_FILE_KEY is missing in .env.mcp" >&2
  exit 1
fi

export DO_NOT_TRACK=1
export FRAMELINK_TELEMETRY=off
export npm_config_loglevel=silent

echo "ANTIGRAVITY_DEBUG: Script mcp-figma.sh is running" >&2

exec npx -y figma-developer-mcp --stdio --figma-api-key="$FIGMA_ACCESS_TOKEN"
