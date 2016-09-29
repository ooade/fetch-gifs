echo "Removing duplicates";
sed -i -e "s/var axios = require('axios');//g" ./build/giphy.js ./build/riffsy.js
echo "Done! Removed duplicates";
sed -i -e "s/src/build/g" index.js
