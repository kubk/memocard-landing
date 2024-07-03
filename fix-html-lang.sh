#!/bin/bash

# Array of locales
locales=("ru")

# Output directory
OUT_DIR="out"

# Function to perform sed replacement
sed_replace() {
    sed -i '' "s/$1/$2/g" "$3"
}

# Loop through each locale
for locale in "${locales[@]}"; do
    # Check if HTML file exists and replace 'en' with locale
    if [ -f "${OUT_DIR}/${locale}.html" ]; then
        sed_replace 'lang="en"' "lang=\"${locale}\"" "${OUT_DIR}/${locale}.html"
        echo "Replaced 'en' with '${locale}' in ${OUT_DIR}/${locale}.html"
    else
        echo "Warning: ${OUT_DIR}/${locale}.html not found"
    fi

    # Check if TXT file exists and replace "en" with "locale"
    if [ -f "${OUT_DIR}/${locale}.txt" ]; then
        sed_replace '"en"' "\"${locale}\"" "${OUT_DIR}/${locale}.txt"
        echo "Replaced \"en\" with \"${locale}\" in ${OUT_DIR}/${locale}.txt"
    else
        echo "Warning: ${OUT_DIR}/${locale}.txt not found"
    fi
done

echo "Script execution completed."
