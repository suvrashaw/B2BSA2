#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f ".env.mcp" ]; then
  echo ".env.mcp is missing" >&2
  exit 1
fi

source scripts/load-env-mcp.sh

MAGIC_KEY="${TWENTY_FIRST_DEV_API_KEY:-${MAGIC_API_KEY:-${API_KEY:-}}}"

if [ -z "$MAGIC_KEY" ]; then
  echo "TWENTY_FIRST_DEV_API_KEY or MAGIC_API_KEY is missing in .env.mcp" >&2
  exit 1
fi

export API_KEY="$MAGIC_KEY"

exec npx -y @21st-dev/magic@latest "API_KEY=$MAGIC_KEY"
