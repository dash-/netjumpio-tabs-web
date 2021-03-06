#!/bin/sh

# This file should be copied outside of this repository, typically to
# ~/.tabs-web-env.sh, and then customized.  The file can then be imported via
# the `source` command prior to running the web daemon.

export API_BASE_URL="http://localhost:4002/api"
export IMAGE_UPLOAD_URL="https://api.cloudinary.com/v1_1/tabsets-com/upload"
export IMAGE_UPLOAD_PRESET="nrzy8crc"

