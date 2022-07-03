#!/bin/bash
echo "NEXT_PUBLIC_VERSION=$(git describe --abbrev=0)" > .env