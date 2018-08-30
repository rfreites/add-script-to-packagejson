const fs = require('fs');
const packageJsonPath = './package.json';

/**
 * Add custom scripts to package json file
 */
const updatePackageJson = async() => {
    fs.readFile(packageJsonPath, 'utf8', (err, data) => {
        if (err) throw err;

        let packageJson = JSON.parse(data);
        
        packageJson.scripts.dev = "nodemon -L --watch app --watch start --watch bootstrap --watch config --watch .env -x node server.js";

        packageJson = JSON.stringify(packageJson);

        fs.writeFile(packageJsonPath, packageJson, 'utf8', (err) => {

            if (err) throw new Error('Problem updating package json', err);

            console.log('package.json updated!');
        })
    });
}

updatePackageJson();