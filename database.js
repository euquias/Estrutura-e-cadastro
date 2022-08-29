const pg = require('pg')



const config = {
    host: 'ec2-44-205-63-142.compute-1.amazonaws.com',
    user: 'tqphpmkxpvvbyn',     
    password: '6b7d31e4a3b67e5e0cdbc09ba738f7ca0a4230b68acc63fa7c6873ff6fb904d9',
    database: 'd6922c2fk8d296',
    port: 5432,
    ssl: true
};

const client = new pg.Client(config);


