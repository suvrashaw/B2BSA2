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

exec npx -y figma-developer-mcp --figma-api-key="$FIGMA_ACCESS_TOKEN"
