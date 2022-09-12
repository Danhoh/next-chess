// constants
const rootPath = `C:\\Users\\danho\\Desktop\\web\\react-chess`;

// node libs
const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2); 


let componentName = args[0];
let componentPath = args[1] ? path.join(rootPath, args[1], componentName) : path.join(rootPath, 'components', componentName);


const createFile = (path, content='Hello content!') => {
  fs.writeFile(path, content, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
}


if (!fs.existsSync(componentPath)){
  fs.mkdirSync(componentPath);
  createFile(path.join(componentPath, `${componentName}.jsx`), 
  `import styles from './${componentName}.module.css';


export const ${componentName} = () => {
  return <div>${componentName}</div>
}
  `
  );


  createFile(path.join(componentPath, `${componentName}.module.css`), `.${componentName.toLowerCase()} {

}`);
}

 




