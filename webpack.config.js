const path = require('path'); 

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
          
    entry: path.join(__dirname, 'resources/js/react', 'form.js'),    
    output: {        
        path: path.join(__dirname, 'build', 'js'),        
        filename: 'index.js'    },    
    module: {        
        rules: [{            
            test: /\.js$/,            
            loader: 'babel-loader',            
            exclude: '/node_modules/'        
        }]    
    } 
};