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

export FIGMA_ACCESS_TOKEN
export FIGMA_API_KEY="$FIGMA_ACCESS_TOKEN"
export FIGMA_TOKEN="$FIGMA_ACCESS_TOKEN"
export FIGMA_FILE_KEY
export FIGMA_FILE_URL

exec npx -y figma-console-mcp
