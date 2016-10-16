# Changes src to build, if it was changed while developing
sed -i -e "s/src/build/g" index.js

# Remove the required statements on isomorphic-fetch, won't be needed
sed -i -e "/require('isomorphic-fetch');/d" build/bundle.js

# Remove import statements
sed -i -e "/import*/d" build/bundle.js

# Remove export statements
sed -i -e "s/export\s//" build/bundle.js
